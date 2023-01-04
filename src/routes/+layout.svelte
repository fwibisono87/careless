<script>
	import '../app.css';

	import JamTwitch from '~icons/jam/twitch';
	import JamYoutube from '~icons/jam/youtube';
	import JamDiscord from '~icons/jam/discord';
	import JamTwitter from '~icons/jam/twitter';

	let hoverSocials = false;

	const handleShowSocials = () => {
		hoverSocials = true;
	};
	const handleHideSocials = () => {
		hoverSocials = false;
	};
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet" />
	<title>CarelessTheStray</title>
</head>

<div class="bg-onyx min-w-screen text-seashell font-poppins min-h-[120vh] pb-8">
	<slot />
	<div
		on:mouseenter={handleShowSocials}
		on:mouseleave={handleHideSocials}
		class="flex flex-col sticky bottom-24 bg-onyx shadow-xl border-y-2 border-r-2 border-greenc rounded-r-lg z-50 py-4 gap-2 justify-center {hoverSocials
			? 'w-16'
			: 'w-8'} transition-all"
	>
		<a
			href="https://twitch.tv/carelessthestray"
			target="_blank"
			rel="noreferrer"
			title="Twitch Channel"
		>
			<JamTwitch
				class="w-8 h-8 mx-auto text-greenc shadow-md {hoverSocials ? '' : '-ml-4'} transition-all"
			/>
		</a>
		<a
			href="https://www.youtube.com/@carelessthestray9174"
			target="_blank"
			rel="noreferrer"
			title="YouTube Channel"
		>
			<JamYoutube
				class="w-8 h-8 mx-auto text-greenc shadow-md {hoverSocials ? '' : '-ml-4'} transition-all"
			/>
		</a>
		<a href="https://discord.gg/hh2hHjwkjs" target="_blank" rel="noreferrer" title="Discord Server">
			<JamDiscord
				class="w-8 h-8 mx-auto text-greenc shadow-md {hoverSocials ? '' : '-ml-4'} transition-all"
			/>
		</a>
		<a href="https://twitter.com/CarelessStray" target="_blank" rel="noreferrer" title="Twitter">
			<JamTwitter
				class="w-8 h-8 mx-auto text-greenc shadow-md {hoverSocials ? '' : '-ml-4'} transition-all"
			/>
		</a>
	</div>
</div>
<div class="w-screen bg-lilac text-center text-onyx flex flex-col py-8">
	<span class="font-semibold">© CarelessTheStray 2023</span>
	<span
		>Icons provided by <a
			class="underline"
			target="_blank"
			rel="noreferrer"
			href="https://icones.js.org/">Icones.js</a
		></span
	>
	<span
		>Built with 💖 <a
			class="underline"
			target="_blank"
			rel="noreferrer"
			href="https://www.franciswibisono.com">dw87</a
		></span
	>
</div>
