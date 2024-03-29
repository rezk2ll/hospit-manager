import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { addFundsSchema } from '$lib/schemas';
import { fail } from '@sveltejs/kit';
import { isValid, parse } from 'date-fns';
import { getPreviousDays, getPreviousDaysLabels } from '$lib/utils/date';
import { FundsService } from '$lib/services/funds';

export const load: PageServerLoad = async ({ locals: { pb }, url }) => {
	const addFundsForm = superValidate(addFundsSchema, { id: 'addFunds' });
	const addExpenses = superValidate(addFundsSchema, { id: 'addExpenses' });
	const fundsService = new FundsService(pb);

	let startDate = '@todayStart';
	let endDate = '@todayEnd';

	const urlStartDate = url.searchParams.get('startDate');
	const urlEndDate = url.searchParams.get('endDate');

	const currentDate = new Date();

	const previousDates = getPreviousDays(currentDate);
	const labels = getPreviousDaysLabels(currentDate);
	const balanceData = fundsService.getDatesBalance(previousDates);

	if (urlStartDate && urlEndDate) {
		const parsedStartDate = parse(urlStartDate, 'yyyy-MM-dd HH:mm', new Date());
		const parsedEndDate = parse(urlEndDate, 'yyyy-MM-dd HH:mm', new Date());

		if (isValid(parsedStartDate) && isValid(parsedEndDate)) {
			startDate = urlStartDate;
			endDate = urlEndDate;
		}
	}

	const transactions = await fundsService.transactions(startDate, endDate);

	return { addFundsForm, addExpenses, transactions, labels, balanceData };
};

export const actions: Actions = {
	addFunds: async ({ request, locals: { pb, user } }) => {
		const form = await superValidate(request, addFundsSchema, { id: 'addFunds' });

		try {
			if (!form.valid) {
				return fail(400, { form });
			}

			await pb.collection('fund_transactions').create({
				...form.data,
				user: user?.id
			});
		} catch (error) {
			return fail(500, { form });
		}

		return { form };
	},

	addExpenses: async ({ request, locals: { pb, user } }) => {
		const form = await superValidate(request, addFundsSchema, { id: 'addExpenses' });

		try {
			if (!form.valid) {
				return fail(400, { form });
			}

			await pb.collection('fund_transactions').create({
				...form.data,
				amount: -form.data.amount,
				user: user?.id
			});
		} catch (error) {
			return fail(500, { form });
		}

		return { form };
	}
};
