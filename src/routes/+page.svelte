<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	import MaterialSymbolsKeyboardArrowDown from '~icons/material-symbols/keyboard-arrow-down';

	export const yScroll = writable(0);
	let y = 0;
	const scrollThreshold = 10;
	let hasScrolled: Boolean;

	$: yScroll.set(y);
	$: y < scrollThreshold ? (hasScrolled = true) : (hasScrolled = false);

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
	let streamTitleFirst = false;
	let show8Streams = true

	const handleShowAllStreamsToggle = () => {
		show8Streams = !show8Streams
	}
	const handleStreamTitleToggle = () => {
		streamTitleFirst = !streamTitleFirst;
	};

	onMount(async () => {
		const response = await fetch('/.netlify/functions/videos');
		let rawData = await response.json();
		try {
			data = rawData.data;
			ready = true;
		} catch {
			console.log(rawData.statusCode);
		}
	});
</script>

<div class="flex flex-col">
	<div class="flex flex-col gap-4 justify-between min-h-[75vh]">
		<div
			class="flex flex-col gap-2 top-0 sticky bg-onyx z-50 {hasScrolled
				? 'py-2 '
				: 'py-4 lg:py-8'} transition-all {y > scrollThreshold ? 'shadow-lg' : ''}"
			transition:fade
		>
			<h1
				class="font-bold {hasScrolled
					? 'text-2xl lg:text-5xl'
					: 'text-lg lg:text-xl'}  text-greenc text-center"
			>
				CarelessTheStray<span class="text-base text-lilac">.com</span>
			</h1>
			{#if hasScrolled}
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
				class="w-64 max-h-64 mx-auto object-cover z-0 drop-shadow transition-all mt-1 {y <
				scrollThreshold
					? '-mb-32'
					: 'mb-0'}"
				in:fade
			/>
			<div class="bg-lilac text-seashell text-center min-h-32 z-20 relative flex flex-col">
				{#if hasScrolled}
					<MaterialSymbolsKeyboardArrowDown class="h-16 w-16 mx-auto mt-2 animate-pulse" />
				{:else}
					<p class="mx-auto w-[80%] lg:w-[35%] font-semibold py-4" in:fade>
						"Welcome! I'm Careless the Stray, a virtual person. If you have some time, please join
						me as I stumble through a variety of things while trying to be entertaining. If you can
						handle the cringe and technical difficulties, then welcome aboard!"
					</p>
				{/if}
				{#if hasScrolled}
					<div class="w-full h-32 bg-onyx" />
				{/if}
			</div>
		</div>
		{#if y > scrollThreshold}
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[85vw] mx-auto" transition:fade>
				<div class="flex flex-col justify-center gap-4">
					<h1 class="text-2xl font-semibold text-greenc text-center">Recent Streams</h1>
					<label class="relative inline-flex items-center cursor-pointer mx-auto">
						<input
							bind:checked={streamTitleFirst}
							on:click={handleStreamTitleToggle}
							type="checkbox"
							value=""
							class="sr-only peer"
						/>
						
						<div
							class="w-11 h-6 bg-lilac peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-greenc dark:peer-focus:ring-greenc rounded-full peer dark:bg-lilac peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-lilac after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-lilac peer-checked:bg-greenc"
						/>
						<span class="ml-3 text-sm hidden md:block">Stream title first</span>
					</label>
					<span class="ml-3 text-sm md:hidden text-center">Stream title first</span>
				</div>

				{#if ready}
					{#each (show8Streams ? data.items.slice(0, 8): data.items) as stream}
						<a
							class="flex flex-col"
							href={'https://www.youtube.com/watch?v=' + stream.snippet.resourceId.videoId}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={stream.snippet.thumbnails['high'].url}
								class="w-64 max-h-64 mx-auto shadow-lg"
								alt={stream.snippet.title}
							/>
							<span
								class="mx-auto text-center transition-all w-full flex {streamTitleFirst
									? 'flex-col-reverse'
									: 'flex-col'}"
							>
								<div
									class="{streamTitleFirst
										? 'text-sm'
										: 'font-semibold text-greenc mt-2'} transition-all min-h-[3rem] break-words align-middle flex"
									transition:fly
								>
								<span class="my-auto w-full">
									{stream.snippet.title.split(' - ')[1]}
								</span>
									
								</div>
								<br />
								<span
									class="{!streamTitleFirst
										? 'text-sm'
										: 'font-semibold text-greenc mt-2'} transition-all min-h-[3rem] break-words align-middle flex"
									transition:fly
								>
								<span class="my-auto w-full">
									{stream.snippet.title.split(' - ')[0]}
								</span>
								</span>

								<!-- {stream.snippet.title} -->
							</span>
						</a>
					{/each}
					<div class="flex flex-col justify-center gap-4">
						<h1 class="text-2xl font-semibold text-greenc text-center underline cursor-pointer" on:click={handleShowAllStreamsToggle}>Show {show8Streams ? 'More' : 'Less'} Streams</h1>
					</div>
				{/if}


			</div>
		{/if}
	</div>
</div>

<svelte:window bind:scrollY={y} />
