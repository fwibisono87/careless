<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	export const yScroll = writable(0);
	let y = 0;
    const scrollThreshold = 10

	$: yScroll.set(y);

	const heroImage0 = 'https://is3.cloudhost.id/francis/public/careless/image/careless_profile.png';

	const heroImage1 =
		'https://is3.cloudhost.id/francis/public/careless/image/cropped/Fullbody_0_testdelete_seperate1(1).png';
</script>

<div class="flex flex-col">
	<div
		class="flex flex-col gap-4 justify-between {$yScroll < scrollThreshold ? 'min-h-[65vh]' : 'min-h-screen'}"
	>
		<div class="flex flex-col gap-2 top-2 sticky">
			<h1 class="font-bold text-2xl lg:text-5xl text-greenc text-center">
				CarelessTheStray<span class="text-base text-lilac">.com</span>
			</h1>
			<span class="text-xl lg:text-3xl font-bold text-lilac text-center font-courgette"
				>Home of your favourite stray!</span
			>
		</div>
		<div>
			{#if $yScroll < scrollThreshold}
				<img src={heroImage0} alt="Careless The Stray" class="w-64 max-h-64 mx-auto" in:fade/>
			{:else}
				<img src={heroImage1} alt="Careless The Stray" class="w-64  mx-auto mt-32" in:fade/>{/if}
			<div class="bg-lilac text-seashell text-center">scroll down {$yScroll}</div>
		</div>
	</div>
</div>

<svelte:window bind:scrollY={y} />
