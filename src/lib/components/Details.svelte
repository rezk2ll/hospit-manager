<script lang="ts">
	import AgeDisplay from './dispaly/AgeDisplay.svelte';

	export let details: { name: string; value: string | number ; isAge?: boolean }[];
</script>

<div class="mt-6 border-t border-gray-100">
	<dl class="divide-y divide-gray-100">
		{#each details as detail}
			<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 text-gray-900">{detail.name}</dt>
				<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
					{#if detail.isAge === true}
						<AgeDisplay date={detail.value.toString()} />
					{:else}
						{detail.value}
					{/if}
				</dd>
			</div>
		{/each}
	</dl>
</div>
