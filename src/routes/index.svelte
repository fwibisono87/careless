<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// import { Options } from '@splidejs/splide';
	import '@splidejs/splide/dist/css/splide.min.css';
	let streams = [
		{
			name: 'YouTube',
			link: 'https://www.youtube.com/channel/UCFrIoCS-BaPjSeA7r2UWNWA/featured',
			icon: '/img/icons/youtube.svg'
		},
		{
			name: 'Twitch',
			link: 'https://www.twitch.tv/carelessthestray',
			icon: '/img/icons/twitch.svg'
		}
	];
	let games = [
		{
			name: 'Getting Over It',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/getting-over-it.jpeg',
			link: 'https://www.youtube.com/watch?v=jEB8l3hwrDk'
		},
		{
			name: 'Papers Please',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/papers-please.jpg',
			link: 'https://www.youtube.com/watch?v=Ziej4X2L07Q'
		},
		{
			name: 'Superliminal',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/superliminal.jpg',
			link: 'https://www.youtube.com/watch?v=dlO8RT5cGls'
		},
		{
			name: 'Hidden Folks',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/hidden-folks.jpg',
			link: 'https://www.youtube.com/watch?v=-8Dyw7shY6w'
		},
		{
			name: 'Undertale',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/undertale.jpg',
			link: 'https://www.youtube.com/watch?v=ZsLAHi7mS7U'
		},
		{
			name: 'Muse Dash',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/muse-dash.jpg',
			link: 'https://www.youtube.com/watch?v=oAmmP-1zx6Q'
		},
		{
			name: 'Amnesia',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/amnesia.jpg',
			link: 'https://www.youtube.com/watch?v=vrE-GkqHTAI'
		},
		{
			name: 'Enter The Gungeon',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/enter-the-gungeon.jpg',
			link: 'https://www.youtube.com/watch?v=sYQjokGnwKI'
		},
		{
			name: 'Hades',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/hades.jpg',
			link: 'https://www.youtube.com/watch?v=9T_wTna72MM'
		},
		{
			name: 'Apex Legends',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/apex.jpg',
			link: 'https://www.youtube.com/watch?v=gnjfBx6Wc7w'
		},
		{
			name: 'Loop Hero',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/loop-hero.jpg',
			link: 'https://www.youtube.com/watch?v=4nOpWCa06Pc'
		},
		{
			name: 'Dead Cells',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/dead-cells.jpg',
			link: 'https://www.youtube.com/watch?v=tymrsJOWBjc'
		},
		{
			name: 'Resident Evil Village',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/re-v.jpg',
			link: 'https://www.youtube.com/watch?v=CXp3YHhOxYM'
		},
		{
			name: "Five Nights at Freddy's",
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/fnaf.jpg',
			link: 'https://www.youtube.com/watch?v=__mk3J5g7ek&t=2s'
		},
		{
			name: 'Dead by Daylight',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/dead-by-daylight.jpg',
			link: 'https://www.youtube.com/watch?v=iJ8nVgRvN1M'
		},
		{
			name: 'Guilty Gear: Strive',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/guilty-gear.jpg',
			link: 'https://www.youtube.com/watch?v=ojkxY8EosEQ'
		},
		{
			name: 'Spelunky 2',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/spelunky-2.jpg',
			link: 'https://www.youtube.com/watch?v=TNZuQM_7an8'
		},
		{
			name: 'There is No Game',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/there-is-no-game.jpg',
			link: 'https://www.youtube.com/watch?v=sAu8OLQxBQQ'
		},
		{
			name: 'Zombie Night Terror',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/zombie-night-terror.jpg',
			link: 'https://www.youtube.com/watch?v=sAu8OLQxBQQ'
		},
		{
			name: 'Dead Space',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/dead-space.jpg',
			link: 'https://www.youtube.com/watch?v=i4LAxDV6grw'
		},
		{
			name: 'Hand Of Fate',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/hand-of-fate.jpg',
			link: 'https://www.youtube.com/watch?v=a8rB1GwdLs4'
		},
		{
			name: 'Idol Manager',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/idol-manager.jpg',
			link: 'https://www.youtube.com/watch?v=UqUEy4rJBzA'
		},
		{
			name: 'NARAKA: BLADEPOINT',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/naraka-bladepoint.jpg',
			link: 'https://www.youtube.com/watch?v=HmG306VQDYQ'
		},
		{
			name: 'The Henry Stickmin Collection',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/the-henry-stickmin-collection.jpg',
			link: 'https://www.youtube.com/watch?v=uuBmrBKD_DU'
		},
		{
			name: 'Phasmophobia',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/phasmophobia.jpg',
			link: 'https://www.youtube.com/watch?v=ZidFjf0NZMg'
		},
		{
			name: 'Valorant',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/valorant.jpg',
			link: 'https://www.youtube.com/watch?v=182LH9ccXKE'
		},
		{
			name: 'Tormented Souls',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/tormented-souls.jpg',
			link: 'https://www.youtube.com/watch?v=i0tOiZPBhOM'
		},
		{
			name: 'Doom Eternal',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/doom-eternal.jpg',
			link: 'https://www.youtube.com/watch?v=MPl5ySaO_p0'
		},
		{
			name: 'Poly Bridge 2',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/poly-bridge-2.jpg',
			link: 'https://www.youtube.com/watch?v=tQ-8I-rAPJY'
		},
		{
			name: 'Crab Game',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/crab-game.jpg',
			link: 'https://www.youtube.com/watch?v=OIgP_t0YRV8'
		},
		{
			name: 'Poppy Playtime',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/poppy-playtime.jpg',
			link: 'https://www.youtube.com/watch?v=fs4TUAmrS9E&t=1794s'
		},
		{
			name: 'Super Auto Pets',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/super-auto-pets.jpg',
			link: 'https://www.youtube.com/watch?v=PKjfnhFNzLE'
		},
		{
			name: 'Inscryption',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/inscryption.jpg',
			link: 'https://www.youtube.com/watch?v=Rs9RTEFxeGQ'
		},
		{
			name: 'FNAF: Security Breach',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/fnaf-sb.jpg',
			link: 'https://www.youtube.com/watch?v=7LQM4i1rlKA'
		},
		{
			name: 'Sonic Generations',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/sonic-generations.jpg',
			link: 'https://www.youtube.com/watch?v=tBax6W8g5Tk'
		},
		{
			name: 'Jump King',
			img: 'https://s3.ap-northeast-1.wasabisys.com/careless/image/games/jump-king.jpg',
			link: 'https://www.youtube.com/watch?v=sTSp39veim0'
		}
	];
	const heroImage2 =
		'https://s3.ap-northeast-1.wasabisys.com/careless/image/cropped/Yandere_Trans_blood(1).png';
	const heroImage1 =
		'https://s3.ap-northeast-1.wasabisys.com/careless/image/cropped/Fullbody_0_testdelete_seperate1(1).png';
	let imageToggle = false;
	let chosenHero = heroImage1;

	// setInterval(chooseImage, 1000)

	export function chooseImage() {
		imageToggle = !imageToggle;
		if (imageToggle) {
			chosenHero = heroImage1;
		} else chosenHero = heroImage2;
		setTimeout(chooseImage, Math.floor(Math.random() * 500) + 500);
	}

	chooseImage();
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</head>
<template>
	<div class="flex flex-col bg-black text-white font-poppins text-center min-h-screen">
		<div id="header" class="my-8 flex flex-col justify-center">
			<h1 class="font-lora text-4xl md:text-6xl">CarelessTheStray</h1>
			<span class="text-care font-dancing text-2xl">Home of your favourite stray!</span>
			<section class="w-full md:w-[25rem] mx-auto z-0 mb-0">
				<img
					src="https://s3.ap-northeast-1.wasabisys.com/careless/image/careless_profile.png"
					alt="Careless The Stray"
				/>
			</section>
			<div
				class="bg-darkCare bg-opacity-75 w-full md:w-[800px] -mt-[96px] mx-auto md:px-24 z-20 backdrop-blur-lg rounded-t-lg py-2 px-6"
			>
				"Welcome and heya! I'm careless the stray virtual person. Anyway if you got some time come
				join me as I stumble through a whole bunch of stuff, while trying to be entertaining. If you
				can stand the cringe and technical difficulties then welcome aboard!"
			</div>
		</div>
		<div class="hidden md:flex flex-col md:flex-row align-middle mx-auto w-[800px] mt-12" id="hero">
			<section class="max-w-full h-25 md:w-3/6 ">
				<img src={chosenHero} alt="Careless The Stray" class="max-h-25" />
			</section>
			<div class=" flex flex-col md:align-middle justify-center md:w-[25rem] text-left ml-12">
				<h2 class="text-5xl font-lora font-medium">About <span class="text-care">Care</span></h2>
				<p class="text-lg mt-10">
					A "yandere" VTuber that can change into a witch, or a cat. IDK she says she has no lore.
				</p>
			</div>
		</div>
		<div class="md:hidden flex flex-col md:flex-row align-middle mx-auto mt-12" id="hero">
			<div class=" flex flex-col md:align-middle justify-center text-left ml-12">
				<h2 class="text-5xl font-lora font-medium">About <span class="text-care">Care</span></h2>
				<p class="text-lg mt-10">
					A "yandere" VTuber that can change into a witch, or a cat. IDK she says she has no lore.
				</p>
			</div>
			<section class="max-w-full h-25 mx-auto mt-8">
				<img src={chosenHero} alt="Careless The Stray" class="max-h-96" />
			</section>
		</div>
		<h2 class="text-5xl font-lora font-medium mt-12">Games</h2>
		<span>Click to go to this game's first stream!</span>
		<Splide
			class="hidden lg:block lg:w-[800px] mx-auto"
			options={{ perPage: 2, rewind: true, perMove: 1 }}
		>
			{#each games as game}
				<SplideSlide>
					<div class=" lg:w-96 mx-auto my-auto flex flex-col align-middle h-72 rounded-lg">
						<span class="-mb-12 mt-10">{game.name}</span>
						<a target="_blank" href={game.link} class="mx-auto my-auto">
							<section>
								<img src={game.img} class="rounded-lg" alt={game.name} />
							</section>
						</a>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
		<Splide
			class="w-[80%] block lg:hidden mx-auto"
			options={{ perPage: 1, rewind: true, perMove: 1 }}
		>
			{#each games as game}
				<SplideSlide>
					<div class=" lg:w-96 mx-auto my-auto flex flex-col align-middle h-72 rounded-lg">
						<span class=" mt-10">{game.name}</span>
						<a target="_blank" href={game.link} class="mx-auto my-auto">
							<section>
								<img src={game.img} alt={game.name} class="rounded-lg" />
							</section>
						</a>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
		<div
			class="bg-grayCare flex flex-col md:flex-row lg:m-12 md:rounded-2xl mb-8 align-middle"
			id=""
		>
			<section class="mx-auto md:mx-0">
				<img
					src="https://s3.ap-northeast-1.wasabisys.com/careless/image/cropped/Witch_Care_Trans(1).png"
					class="h-96"
					alt="Witch Care"
				/>
			</section>
			<div class="flex flex-col align-middle justify-center mx-auto">
				<h2 class="text-5xl font-lora mt-2 md:mt-12 font-semibold">Catch Care Live!</h2>
				<div class="flex flex-row justify-evenly mt-4">
					{#each streams as stream}
						<a target="_blank" href={stream.link}>
							<section class="">
								<img
									src={stream.icon}
									class="w-24"
									style="filter: invert(99%) sepia(1%) saturate(2093%) hue-rotate(163deg) brightness(116%) contrast(100%);"
									alt={stream.name}
								/>
							</section>
							<span>{stream.name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
		<a class="underline mb-4" href="https://www.franciswibisono.com"
			><span>Made with ♡ by www.franciswibisono.com</span></a
		>
	</div>
</template>
