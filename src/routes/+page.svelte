<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	import MaterialSymbolsKeyboardArrowDown from '~icons/material-symbols/keyboard-arrow-down';

	export const yScroll = writable(0);
	let y = 0;
	const scrollThreshold = 10;

	$: yScroll.set(y);

	const heroImage0 = 'https://is3.cloudhost.id/francis/public/careless/image/careless_profile.png';

	const heroImage1 =
		'https://is3.cloudhost.id/francis/public/careless/image/cropped/Fullbody_0_testdelete_seperate1(1).png';
</script>

<div class="flex flex-col">
	<div class="flex flex-col gap-4 justify-between min-h-[75vh]">
		<div
			class="flex flex-col gap-2 top-0 sticky bg-onyx z-50 py-4 lg:py-8 {y > scrollThreshold
				? 'shadow-lg'
				: ''}"
		>
			<h1 class="font-bold text-2xl lg:text-5xl text-greenc text-center">
				CarelessTheStray<span class="text-base text-lilac">.com</span>
			</h1>
			{#if y < scrollThreshold}
				<span class="text-xl lg:text-3xl font-bold text-lilac text-center font-courgette"
					>Home of your favourite stray!</span
				>
			{/if}
		</div>
		<div class="transition-all">
			<img
				src={heroImage0}
				alt="Careless The Stray"
				class="w-64 max-h-64 mx-auto object-cover z-0 drop-shadow transition-all {y <
				scrollThreshold
					? '-mb-32'
					: 'mb-0'}"
				in:fade
			/>
			<div class="bg-lilac text-seashell text-center min-h-32 z-20 relative flex flex-col">
				{#if y < scrollThreshold}
					<MaterialSymbolsKeyboardArrowDown class="h-16 w-16 mx-auto mt-2 animate-pulse" />
				{:else}
					<p class="mx-auto w-[80%] lg:w-[35%] font-semibold py-4">
						"Welcome and heya! I'm careless the stray virtual person. Anyway if you got some time
						come join me as I stumble through a whole bunch of stuff, while trying to be
						entertaining. If you can stand the cringe and technical difficulties then welcome
						aboard!"
					</p>
				{/if}
				{#if y < scrollThreshold}
					<div class="w-full h-32 bg-onyx" />
				{/if}
			</div>
		</div>
	</div>
</div>

<svelte:window bind:scrollY={y} />
