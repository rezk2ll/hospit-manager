<script lang="ts">
	export let label: string;
	export let placeholder: string;
	export let value: number | string;
	export let isInValid: boolean = false;
	export let name: string;
	export let isNumber: boolean = false;
	export let onChange: (e: any) => void = () => {};
	export let disabled: boolean = false;

	$: props = { ...(isNumber ? {} : { step: 'any' }) };
</script>

<div class="relative mt-6 w-full">
	<input
		required
		id={name}
		{disabled}
		{name}
		min="0"
		bind:value
		{placeholder}
		{...props}
		on:change={onChange}
		type="number"
		class="h-14 rounded-[4px] ring-2 focus:outline-none px-4 text-[17px] font-medium leading-6 tracking-tight text-left peer w-full placeholder:text-transparent {isInValid
			? 'ring-red-500 focus:ring-red-500'
			: 'ring-gray-300 focus:ring-blue-500'}"
	/>
	<label
		for={name}
		class="absolute left-0 bg-white px-1 duration-100 ease-linear ml-1 -translate-y-2.5 translate-x-2 text-xs font-medium leading-4 {isInValid
			? 'text-red-500'
			: ''}">{label}</label
	>
</div>
