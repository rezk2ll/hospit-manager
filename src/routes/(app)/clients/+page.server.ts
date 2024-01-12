import type { Actions, PageServerLoad } from './$types';
import type { ClientsResponse } from '../../../pocketbase-types';
import type { RecordModel } from 'pocketbase';
import { message, superValidate } from 'sveltekit-superforms/server';
import { addClientSchema, removeClientSchema, updateClientSchema } from '$lib/schemas';

export const load: PageServerLoad = async ({ locals: { pb } }) => {
	const addForm = await superValidate(addClientSchema, { id: 'add-client' });
	const updateForm = await superValidate(updateClientSchema, { id: 'update-client' });
	const deleteForm = await superValidate(removeClientSchema, { id: 'delete-client' });

	const clientsList = await pb
		.collection('clients')
		.getFullList<ClientsResponse>({ expand: 'animals(client)' });

	const clients = clientsList.map((client) => ({
		...client,
		animals: (client.expand as RecordModel['expand'])?.['animals(client)'] || []
	}));

	return { clients, addForm, updateForm, deleteForm };
};

export const actions: Actions = {
	addClient: async ({ request, locals: { pb } }) => {
		const form = await superValidate(request, addClientSchema, { id: 'add-client' });
		try {
			if (!form.valid) {
				return message(form, 'Invalid data', { status: 400 });
			}

			await pb.collection('clients').create(form.data);
		} catch (error) {
			console.error(error);

			return message(form, 'Failed to add client', { status: 500 });
		}

		return { form };
	},

	removeClient: async ({ request, locals: { pb } }) => {
		const form = await superValidate(request, removeClientSchema, { id: 'delete-client' });
		try {
			if (!form.valid) {
				return message(form, 'Invalid data', { status: 400 });
			}

			const { id } = form.data;

			const client = await pb.collection('clients').getOne(id);

			if (client.animals && client.animals.length > 0) {
				return message(form, 'Client has animals assigned', { status: 400 });
			}

			await pb.collection('clients').delete(id);
		} catch (error) {
			console.error(error);

			return message(form, 'Failed to delete client', { status: 500 });
		}

		return { form };
	},

	updateClient: async ({ request, locals: { pb } }) => {
		const form = await superValidate(request, updateClientSchema, { id: 'update-client' });

		try {
			if (!form.valid) {
				return message(form, 'Failed to update client');
			}

			await pb.collection('clients').update(form.data.id, form.data);
		} catch (error) {
			console.error(error);

			return message(form, 'Failed to update client');
		}

		return { form };
	}
};
