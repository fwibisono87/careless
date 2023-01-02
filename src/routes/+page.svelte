<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	import MaterialSymbolsKeyboardArrowDown from '~icons/material-symbols/keyboard-arrow-down';

	export const yScroll = writable(0);
	let y = 0;
	const scrollThreshold = 10;

	const key = import.meta.env.VITE_SECRET_KEY;

	$: yScroll.set(y);

	const heroImage0 = 'https://is3.cloudhost.id/francis/public/careless/image/careless_profile.png';

	const heroImage1 =
		'https://is3.cloudhost.id/francis/public/careless/image/cropped/Fullbody_0_testdelete_seperate1(1).png';

	let data: Data;

	interface Data {
		items: PlaylistItem[];
	}

	interface PlaylistItem {
		kind: string;
		etag: string;
		id: string;
		snippet: {
			publishedAt: string;
			channelId: string;
			title: string;
			description: string;
			thumbnails: {
				[key: string]: {
					url: string;
					width: number;
					height: number;
				};
			};
			channelTitle: string;
			playlistId: string;
			position: number;
			resourceId: {
				kind: string;
				videoId: string;
			};
		};
	}

	let ready = false;

	onMount(async () => {
		const response = await fetch(
			'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=49&playlistId=UUFrIoCS-BaPjSeA7r2UWNWA&key=' +
				key
		);
		data = await response.json();
		console.log(data);
		ready = true;
	});
</script>

<div class="flex flex-col">
	<div class="flex flex-col gap-4 justify-between min-h-[75vh]">
		<div
			class="flex flex-col gap-2 top-0 sticky bg-onyx z-50 py-4 lg:py-8 transition-all {y >
			scrollThreshold
				? 'shadow-lg'
				: ''}"
			transition:fade
		>
			<h1 class="font-bold text-2xl lg:text-5xl text-greenc text-center">
				CarelessTheStray<span class="text-base text-lilac">.com</span>
			</h1>
			{#if y < scrollThreshold}
				<span
					class="text-xl lg:text-3xl font-bold text-lilac text-center font-courgette"
					transition:fade>Home of your favourite stray!</span
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
					<p class="mx-auto w-[80%] lg:w-[35%] font-semibold py-4" in:fade>
						"Welcome! I'm Careless the Stray, a virtual person. If you have some time, please join
						me as I stumble through a variety of things while trying to be entertaining. If you can
						handle the cringe and technical difficulties, then welcome aboard!"
					</p>
				{/if}
				{#if y < scrollThreshold}
					<div class="w-full h-32 bg-onyx" />
				{/if}
			</div>
		</div>
		{#if y > scrollThreshold}
			<div class="grid grid-cols-2 lg:grid-cols-5 gap-4 w-[85vw] mx-auto" transition:fade>
				<h1 class="text-2xl font-semibold text-greenc my-auto text-center">Recent Streams</h1>
				{#if ready}
					{#each data.items as stream}
						<div class="flex flex-col">
							<img
								src={stream.snippet.thumbnails['high'].url}
								class="w-64 max-h-64 mx-auto shadow-lg"
							/>
							<span class="mx-auto text-center">
								<span class="font-semibold text-greenc">
									{stream.snippet.title.split(' - ')[1]}
								</span>
								<br>
								<span class="text-sm">
									{stream.snippet.title.split(' - ')[0]}
								</span>
								
								
								
								<!-- {stream.snippet.title} -->
							</span>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
</div>

<svelte:window bind:scrollY={y} />
