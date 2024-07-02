<script lang="ts">
	import type { VisitTabsType } from '$types';
	import { activeVisitTab } from '$store/visit';
	import ExamsTab from '$components/tabs/visit/ExamsTab.svelte';
	import FilesTab from '$components/tabs/visit/FilesTab.svelte';
	import DiagnosticsTab from '$components/tabs/visit/DiagnosticsTab.svelte';
	import ActionsTab from '$components/tabs/visit/ActionsTab.svelte';
	import InfoTab from '$components/tabs/visit/InfoTab.svelte';
	import MedicalActsTab from '$components/tabs/visit/MedicalActsTab.svelte';
	import SurgicalActsTab from '$components/tabs/visit/SurgicalActsTab.svelte';
	import HospitTab from '$components/tabs/visit/HospitTab.svelte';
	import StoreTab from '$components/tabs/visit/StoreTab.svelte';
	import TreatmentTab from '$components/tabs/visit/TreatmentTab.svelte';

	$: isActive = (tab: VisitTabsType): boolean => tab === $activeVisitTab;
</script>

<div class="flex flex-col items-center justify-start lg:pl-14 w-full lg:pt-10">
	<div
		class="w-full p-1 pt-10 lg:p-5 bg-white shadow lg:shadow-2xl border-gray-200 xl:rounded-md pb-5"
	>
		<div class="flex flex-col items-center gap-x-3 w-full">
			<div class="flex overflow-x-auto whitespace-nowrap w-full">
				<button
					type="button"
					on:click={() => activeVisitTab.set('info')}
					class="px-4 {isActive('info')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
						/></svg
					>

					<span class="mx-1 text-sm"> Info </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('exams')}
					class="px-4 {isActive('exams')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
						/></svg
					>

					<span class="mx-1 text-sm"> Examens </span>
				</button>

				<button
					type="button"
					on:click={() => activeVisitTab.set('diagnostics')}
					class="px-4 {isActive('diagnostics')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
						/></svg
					>

					<span class="mx-1 text-sm"> Diagnostiques </span>
				</button>

				<button
					type="button"
					on:click={() => activeVisitTab.set('files')}
					class="px-4 {isActive('files')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"
						/></svg
					>

					<span class="mx-1 text-sm"> Fichiers </span>
				</button>

				<button
					type="button"
					on:click={() => activeVisitTab.set('actions')}
					class="px-4 {isActive('actions')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
						/></svg
					>

					<span class="mx-1 text-sm"> Conduites à tenir </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('treatments')}
					class="px-4 {isActive('treatments')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"
						/></svg
					>

					<span class="mx-1 text-sm"> Traitement </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('medical_acts')}
					class="px-4 {isActive('medical_acts')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"
						/></svg
					>

					<span class="mx-1 text-sm"> Actes médicaux </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('surgical_acts')}
					class="px-4 {isActive('surgical_acts')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z"
						/></svg
					>

					<span class="mx-1 text-sm"> Actes chirurgicaux </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('hospit')}
					class="px-4 {isActive('hospit')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						class="w-4 h-4"
						fill="currentColor"
						><path
							d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V320H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"
						/></svg
					>

					<span class="mx-1 text-sm"> Hospit </span>
				</button>
				<button
					type="button"
					on:click={() => activeVisitTab.set('shop')}
					class="px-4 {isActive('shop')
						? 'border border-b-transparent rounded-t-md focus:outline-none text-sinc-700'
						: 'bg-transparent border-b cursor-base focus:outline-none hover:border-gray-400 text-gray-600 px-[17px]'}  inline-flex items-center h-12 py-2 text-center border-gray-300 whitespace-nowrap"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						class="w-4 h-4"
						fill="currentColor"
					>
						<path
							d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"
						/></svg
					>

					<span class="mx-1 text-sm"> Magasin </span>
				</button>
			</div>
		</div>
		{#if $activeVisitTab === 'exams'}
			<ExamsTab />
		{:else if $activeVisitTab === 'files'}
			<FilesTab />
		{:else if $activeVisitTab === 'actions'}
			<ActionsTab />
		{:else if $activeVisitTab === 'diagnostics'}
			<DiagnosticsTab />
		{:else if $activeVisitTab === 'medical_acts'}
			<MedicalActsTab />
		{:else if $activeVisitTab === 'surgical_acts'}
			<SurgicalActsTab />
		{:else if $activeVisitTab === 'hospit'}
			<HospitTab />
		{:else if $activeVisitTab === 'shop'}
			<StoreTab />
		{:else if $activeVisitTab === 'treatments'}
			<TreatmentTab />
		{:else}
			<InfoTab />
		{/if}
	</div>
</div>
