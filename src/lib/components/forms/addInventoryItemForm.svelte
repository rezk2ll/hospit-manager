<script lang="ts">
	import TextAreaField from '$lib/components/inputs/TextAreaField.svelte';
	import type { addInventoryItemSchema } from '$lib/schemas';
	import { superForm } from 'sveltekit-superforms/client';
	import NumberField from '../inputs/NumberField.svelte';
	import TextField from '../inputs/TextField.svelte';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let open = false;
	export let addForm: SuperValidated<typeof addInventoryItemSchema>;

	const { form, message, enhance } = superForm(addForm, {
		resetForm: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				location.reload();
			}
		}
	});
</script>

<div>
	<div class="flex items-center justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"
			><path
				d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
			/></svg
		>
	</div>

	<div class="mt-2 text-center">
		<h3
			class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
			id="modal-title"
		>
			Nouvel article
		</h3>
		<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
			Veuillez remplir le formulaire ci-dessous avec des détails précis
		</p>
		{#if $message && $message.length}
			<p class="mt-2 text-sm text-red-500 dark:text-red-400">
				{$message}
			</p>
		{/if}
	</div>
</div>

<form use:enhance action="?/add" class="mt-4" method="POST">
	<TextField name="name" label="Nom" bind:value={$form.name} isInValid={false} />
	<TextField name="code" label="Code" bind:value={$form.code} isInValid={false} />
	<NumberField
		label="Quantité"
		placeholder="1"
		bind:value={$form.quantity}
		name="quantity"
		isInValid={false}
	/>
	<NumberField
		label="Prix d'achat unitaire"
		placeholder="1"
		bind:value={$form.cost}
		name="cost"
		isInValid={false}
	/>
	<NumberField
		label="prix de vente unitaire"
		placeholder="1"
		bind:value={$form.price}
		name="price"
		isInValid={false}
	/>
	<hr class="pb-4" />
	<TextAreaField
		name="description"
		bind:value={$form.description}
		label="Description"
		placeholder="description"
	/>

	<div class="mt-4 sm:flex sm:items-center sm:-mx-2">
		<button
			type="button"
			on:click={() => (open = false)}
			class="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
		>
			Annuler
		</button>

		<button
			type="submit"
			class="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
		>
			Confirmer
		</button>
	</div>
</form>
