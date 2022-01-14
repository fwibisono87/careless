<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</head>
<script>
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
        },
    ]
    let games = [
        {
            name: 'Getting Over It',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/240720/header.jpg?t=1577387341',
            link: 'https://www.youtube.com/watch?v=jEB8l3hwrDk'
        },
        {
            name: 'Papers Please',
            img: 'https://papersplea.se/img/Title.svg',
            link: 'https://www.youtube.com/watch?v=Ziej4X2L07Q'
        },
        {
            name: 'Superliminal',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1049410/header.jpg?t=1636144463',
            link: 'https://www.youtube.com/watch?v=dlO8RT5cGls'
        },
        {
            name: 'Undertale',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091',
            link: 'https://www.youtube.com/watch?v=ZsLAHi7mS7U'
        },
        {
            name: 'Resident Evil Village',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1640118086',
            link: 'https://www.youtube.com/watch?v=CXp3YHhOxYM'
        },
        {
            name: 'Inscryption',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1092790/header.jpg?t=1641581499',
            link: 'https://www.youtube.com/watch?v=Rs9RTEFxeGQ'
        },
        {
            name: 'FNAF: Security Breach',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/747660/header.jpg?t=1639706417',
            link: 'https://www.youtube.com/watch?v=7LQM4i1rlKA'
        },
        {
            name: 'Valorant',
            img: '/img/games/valorant.svg',
            link: 'https://www.youtube.com/watch?v=182LH9ccXKE'
        },
    ]
</script>
<template>
	<div class="flex flex-col bg-black text-green-500 font-poppins p-12 text-center">
		<div id="header">
			<h1 class="text-7xl font-bold">CarelessTheStray</h1>
			<div class="font-dancing text-xl text-orange-600 font-semibold">
				<span>Home of your favourite stray!</span>
			</div>
			<img src="https://s3.ap-northeast-1.wasabisys.com/careless/image/care.png" class="mx-auto" />
			<div class="bg-care text-black -mx-12 px-24 py-6 font-semibold">
				<p>
					"Welcome and heya! I'm careless the stray virtual person? Anyway if you got some time come
					join me as I stumble through a whole bunch of stuff, while trying to be entertaining. If
					you can stand the cringe and technical difficulties then welcome aboard!"
				</p>
			</div>
			<div class="bg-darkCare text-black -mx-12 px-24 py-6">
				<h2 class="text-5xl font-bold text-black">Games</h2>
				<div class="grid grid-cols-4 gap-4 mx-auto my-8">
                    {#each games as game}
                    <div class="w-64 h-72 flex flex-col bg-care rounded-md shadow-lg p-4 mx-auto">
                        <img src={game.img} class=" my-auto" alt={game.name}/>
                        <span>{game.name}</span>
                        <a href={game.link} class="underline">First stream</a>
                    </div>
                    {/each}
				</div>
                <span class="font-semibold">And many, many more!</span>
			</div>
            <div class="bg-care text-black -mx-12 px-24 py-6">
                <div class="flex flex-row">
                    <div class="my-auto">
                        <h2 class="text-5xl font-bold text-black text-left">Where to Watch</h2>
                        <p class="my-auto justify-center">
                            Here's where you can see watch Care's streams!
                        </p>
                    </div>
                    <div class="mx-auto">
                        {#each streams as stream}
                            <a
                                class="flex flex-row border-2 rounded-md border-black py-2 px-4 w-auto my-4"
                                href={stream.link}
                            >
                                <img src={stream.icon} alt={stream.name} class="mr-2" />
                                <span style="white-space: nowrap">
                                    {stream.name}
                                </span>
                            </a>
                        {/each}
                    </div>
                </div>
			</div>
            <div class="bg-darkCare text-black -mx-12 px-24 py-6">
                <div class="flex flex-row">
                    <div class="flex flex-row">
                        <img src="https://s3.ap-northeast-1.wasabisys.com/careless/image/care1.png" class="-mr-24">
                        <img src="https://s3.ap-northeast-1.wasabisys.com/careless/image/care2.png" class="-ml-36">
                    </div>
                    <div class="my-auto bg-care p-6 rounded-md shadow-lg">
                        <h2 class="text-5xl font-bold text-black text-left">About Care</h2>
                        <p class="my-auto justify-center">
                            A "yandere" VTuber that can change into a witch, or a cat. IDK she says she has no lore.
                        </p>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>
