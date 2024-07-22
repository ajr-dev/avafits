<script>
	// var pfpUrls = ['http://media.avakin.life/thumbnails/31194991:profile_headshot:128x128'];

	import { theme } from '$lib/stores/store';

	import viewport from '$lib/useViewportAction.js';

	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();

	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	let currentOffset = -200;

	onMount(() => {
		$theme = 'home';

		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		let lastScrollTop = 0;
		// let currentOffset = -80; // Initial offset
		let requestId;

		const layer0 = document.getElementById('layer-0');

		function smoothScroll() {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			const scrollDiff = st - lastScrollTop;

			if (scrollDiff > 0) {
				// Scrolling Down
				if (currentOffset < -80) {
					currentOffset += 0.1 * scrollDiff; // Adjust the rate of change as needed
				}
			} else {
				// Scrolling Up
				if (currentOffset > -200) {
					currentOffset += 0.1 * scrollDiff; // Adjust the rate of change as needed
				}
			}

			layer0.style.transform = `translateY(${currentOffset}px)`;

			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

			requestId = requestAnimationFrame(smoothScroll);
		}

		// Start the animation
		smoothScroll();

		// Cancel the animation frame on component teardown
		onDestroy(() => {
			cancelAnimationFrame(requestId);
		});
	});

	import { Shine } from 'svelte-ux';
	import { Tilt } from 'svelte-ux';

	import '../videocontrols.css';
	import '../pipToggle.css';
	import '../main.css';
	import '../tippy.css';
	import '../inline1.css';
	import '../inline2.css';
</script>

<div class="px-5 pt-28 md:pt-32 xl:px-0 xl:pt-36 2xl:pt-44">
	<!-- hero section with lots of profile pictures -->
	<div class="hidden p-2 text-paleSunflower md:block md:p-0">
		<div class="grid gap-5 md:grid-cols-2 md:px-6 md:py-10">
			<div class="flex flex-col justify-between">
				<h1 class="header-one whitespace-pre-wrap md:!leading-[70px] lg:!leading-[100px]">
					The<br />Stylish<br />Quest in Avakin
				</h1>
				<div>
					<a target="_self" href="/outfits"
						><button
							style="transform: scale(1);"
							class="rounded-full bg-blackWood text-paleSunflower px-5 py-2 text-sm md:py-2 mt-5 rounded-full bg-paleSunflower px-5 py-3 text-sm font-bold uppercase leading-[16px] !text-blackWood hover:bg-[#FFF5DC] md:w-[222px] md:px-[38px] md:py-[25px] md:text-[20px]"
							>discover</button
						></a
					>
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full left-[10vw] 2xl:left-[100px] top-28 lg:top-8 w-16 lg:w-[98px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(-20.0118px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/LaHaute_female-646x1024.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="LaHaute_female"
					/>
					<div class="sphere-sm absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full left-[30vw] xl:left-[30vw] lg:top-[35vw] top-[40vh] 2xl:top-[560px] w-24 lg:w-[142px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(24.1375px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/filmdirector_1024x512.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="filmdirector_1024x512"
					/>
					<div class="sphere absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full left-[30vw] xl:left-[24vw] top-[20vh] 2xl:top-[200px] 2xl:left-[30vw] w-32 lg:w-[174px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(-13.7396px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/Golden_Summer_female-492x1024.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="Golden_Summer_female"
					/>
					<div class="sphere absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-96 top-[40vh] xl:right-1/3 xl:top-[10vw] 2xl:top-[10vw] w-14 lg:w-[87px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(-1.41203px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/Dionysus01_1024x512.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="Dionysus01_1024x512"
					/>
					<div class="sphere-sm absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-[25vw] xl:right-[30vw] xl:top-[26vh] 2xl:right-[22vw] 2xl:top-[300px] w-48 lg:w-[310px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(3.80022px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/IKONjewellery_female-1024x1021.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="IKONjewellery_female"
					/>
					<div class="sphere absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-72 top-[55vw] lg:top-[50vw] xl:right-[30vw] xl:top-[75vh] 2xl:right-[23vw] 2xl:top-[650px] w-12 lg:w-[76px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(24.5px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/Ashley_1024x512.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="Ashley_1024x512"
					/>
					<div class="sphere-sm absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-48 top-[45vh] xl:top-[50vh] xl:right-[20vw] 2xl:top-[550px] 2xl:right-[15vw] w-16 lg:w-[121px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(3.19139px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/MarbellaMahiki_male-269x1024.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="MarbellaMahiki_male"
					/>
					<div class="sphere-sm absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-12 xl:top-[40vh] top-[33vh] 2xl:top-[400px] w-24 lg:w-[151px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(-3.628px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/Nell_1024x512.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="Nell_1024x512"
					/>
					<div class="sphere absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
			<div
				class="group absolute aspect-square rounded-full right-32 top-36 xl:top-[10vh] w-16 lg:w-[163px]"
				aria-expanded="false"
				style="will-change: transform; transform: translateY(-11.4109px);"
			>
				<div style="transform: scale(1);" class="relative h-full w-full rounded-full shadow-lg">
					<img
						src="/images/WhiteWalker_female-693x1024.png"
						class="absolute h-full w-full rounded-full object-cover"
						draggable="false"
						alt="WhiteWalker_female"
					/>
					<div class="sphere absolute h-full w-full rounded-full opacity-50" />
				</div>
			</div>
		</div>
	</div>
	<div class="p-2 text-paleSunflower md:hidden md:p-0">
		<div class="grid place-items-center gap-5 md:grid-cols-2 md:p-10">
			<h1 class="sm-header-one w-3/4 text-center">The Stylish Quest in Avakin</h1>
			<div class="relative mt-14 flex w-full flex-col items-center py-36">
				<div
					class="group absolute aspect-square -left-4 -top-24 sm:left-4 w-[112px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/LaHaute_female-646x1024.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="LaHaute_female"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square left-12 top-[15%] sm:left-[15%] w-[63px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/filmdirector_1024x512.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="filmdirector_1024x512"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square left-[130px] -top-[4%] sm:left-[30%] w-[56px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/Golden_Summer_female-492x1024.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="Golden_Summer_female"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square -left-6 bottom-[35%] sm:left-0 w-[91px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/Dionysus01_1024x512.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="Dionysus01_1024x512"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square left-[85px] bottom-[15%] sm:left-[25%] w-[105px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/IKONjewellery_female-1024x1021.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="IKONjewellery_female"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square -right-10 -top-[15%] sm:right-8 w-[200px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/Ashley_1024x512.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="Ashley_1024x512"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square right-34 bottom-[50%] sm:right-[40%] w-[49px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/MarbellaMahiki_male-269x1024.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="MarbellaMahiki_male"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square right-1 bottom-[20%] sm:right-[15%] w-[78px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/Nell_1024x512.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="Nell_1024x512"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
				<div
					class="group absolute aspect-square right-[5rem] bottom-[6%] sm:right-[30%] w-[73px]"
					aria-expanded="false"
					style="will-change: transform; transform: translateY(-40px);"
				>
					<div class="relative h-full w-full rounded-full shadow-lg">
						<img
							src="/images/WhiteWalker_female-693x1024.png"
							class="absolute h-full w-full rounded-full object-cover"
							draggable="false"
							alt="WhiteWalker_female"
						/>
						<div class="sphere-sm absolute h-full w-full rounded-full opacity-30" />
					</div>
				</div>
			</div>
			<a class="mx-auto w-11/12" target="_self" href="/outfits"
				><button
					style="transform: scale(1);"
					class="rounded-full bg-paleSunflower text-darkForest px-5 py-2 text-sm md:py-2 h-[43px] w-full !text-[14px] font-bold uppercase"
					>discover</button
				></a
			>
		</div>
	</div>

	<!-- <div class="h-[6rem]" /> -->

	<!-- content section starts here -->
	<div class="space-y-5 pt-14">
		<div
			class="w-full rounded-[30px] p-2 text-dustyMiller md:p-5 lg:grid lg:grid-cols-3"
			style="background-color: rgb(245, 212, 210);"
		>
			<div class="flex w-full justify-center lg:col-span-2 order-2">
				<div class="hidden w-full md:block md:h-[550px]">
					<div class="flex h-full w-full items-center justify-center">
						<div class="hidden h-full w-full md:block">
							<div class="flex h-full w-full flex-col">
								<div
									class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
								>
									<swiper-container
										scrollbar="true"
										class="swiper-wrapper swiper-first"
										style="transition-duration: 0ms;"
									>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1; transition-duration: 0ms;"
										>
											<div
												class="relative m-auto mt-3 h-max w-max p-3 sm:mt-16 md:mt-12 md:p-0 lg:mt-auto"
											>
												<!-- <a target="_blank" href="https://lenster.xyz/posts/0x01afc5-0x1e"
													><div
														class="z-10 flex items-start justify-start gap-2 absolute -left-24 -top-4"
														style="will-change: transform; transform: translateY(-25.2018px);"
													>
														<img
															alt="Post user"
															src="https://www.lens.xyz/sections/illustration-post-avatar.svg"
														/><img
															alt="Post"
															src="https://www.lens.xyz/sections/illustration-post.png"
															draggable="false"
															class="rounded-b-3xl rounded-tr-3xl backdrop-blur-lg md:h-32 md:rounded-b-[2rem] md:rounded-tr-[2rem]"
														/>
													</div>
												</a> -->
												<Shine depth={10}>
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit1"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit1.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
														<!-- <audio
														class="invisible"
														src="https://prismic-io.s3.amazonaws.com/lensv2/6b35a643-595f-499b-a6a0-dc8d08cd968c_rac.wav"
													/>
													<div
														class="pointer-events-none absolute left-0 right-0 top-[43%] ml-auto mr-auto w-12"
													>
														<img
															alt="Play"
															src="https://www.lens.xyz/sections/play-white.svg"
															draggable="false"
															class="pl-1 pt-1 opacity-90"
														/>
													</div> -->
													</div>
												</Shine>
												<a target="_self" href="avakinlife://shop/item/dwgEFqL0dYY2XXuI">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-28 top-4"
														draggable="false"
														alt="hair"
														width="90px"
														src="/images/outfit1_hair.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/F2BPSGEtSmRc">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -left-36 top-28"
														alt="shirt"
														draggable="false"
														width="90px"
														src="/images/outfit1_shirt.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/6EIK9UGLLM0Q0G9W">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-32 top-48"
														alt="skirt"
														width="90px"
														src="/images/outfit1_skirt.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/0EGHGG1TANGBZFG5">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-32 bottom-10"
														alt="shoes"
														width="90px"
														src="/images/outfit1_shoes.png"
													/>
												</a>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											style="width: 1147px; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1; transition-duration: 0ms;"
										>
											<div
												class="relative m-auto mt-3 h-max w-max p-3 sm:mt-16 md:mt-12 md:p-0 lg:mt-auto"
											>
												<!-- <a target="_self" href="">
													<div
														class="z-10 flex items-start justify-start gap-2 absolute -left-24 -top-12 xl:-top-20"
														style="will-change: transform; transform: translateY(-20.6278px);"
													>
														<img
															alt="Post user"
															draggable="false"
															src="https://www.lens.xyz/sections/illustration-post-video-avatar.svg"
															class="w-[45px] lg:w-full"
														/><img
															alt="Post"
															draggable="false"
															src="https://www.lens.xyz/sections/illustration-post-video.png"
															class="rounded-b-3xl rounded-tr-3xl backdrop-blur-[48px] md:h-32 md:rounded-b-[2rem] md:rounded-tr-[2rem]"
														/>
													</div>
												</a> -->
												<Shine depth={10}>
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit2"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit2.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
												</Shine>

												<!-- <img
													class="absolute lg:hidden -right-12 top-10 w-24"
													alt="Actions"
													draggable="false"
													src="https://www.lens.xyz/sections/video-actions.png"
												/> -->
												<a target="_self" href="avakinlife://shop/item/8LB70Y0W80M8CRN9">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-28 top-4"
														draggable="false"
														alt="hair"
														width="90px"
														src="/images/outfit2_pods.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/XYR5ZX136H6E4G7I">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -left-28 top-4"
														draggable="false"
														alt="hair"
														width="90px"
														src="/images/outfit2_hair.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/PxAegejYKfXl93OO">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -left-36 top-36"
														alt="shirt"
														draggable="false"
														width="90px"
														src="/images/outfit2_shirt.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/V2VNKRSQD5OE5HKG">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-32 top-48"
														alt="skirt"
														width="90px"
														src="/images/outfit2_shorts.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/19c873a29f3b">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-32 bottom-10"
														alt="shoes"
														width="90px"
														src="/images/outfit2_shoes.png"
													/>
												</a>
												<!-- <button class="outline-none"
													><div
														class="absolute rounded-full -bottom-6 left-12"
														style="will-change: transform; transform: translateY(5.51089px);"
													>
														<img
															alt="play"
															class="h-12 rounded-full shadow-lg backdrop-blur-lg lg:h-[3.5rem] lg:shadow-xl"
															draggable="false"
															src="https://www.lens.xyz/sections/button-play-video.svg"
														/>
													</div>
												</button> -->
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											style="width: 1147px; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1; transition-duration: 0ms;"
										>
											<div
												class="relative m-auto mt-3 h-max w-max p-3 sm:mt-16 md:mt-12 md:p-0 lg:mt-auto"
											>
												<Shine depth={10}>
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit3"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit3.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
												</Shine>
												<a target="_self" href="avakinlife://shop/item/MLZW4195awOURVc2">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-28 top-4"
														draggable="false"
														alt="hair"
														width="90px"
														src="/images/outfit3_hair.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/goYgPzqVTGK9IpsE">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -left-36 top-36"
														alt="shirt"
														draggable="false"
														width="90px"
														src="/images/outfit3_fit.png"
													/>
												</a>
												<a target="_self" href="avakinlife://shop/item/J5FTTJtXcSwF">
													<img
														class="absolute rounded-full shadow-xl backdrop-blur-lg -right-32 bottom-10"
														alt="shoes"
														width="90px"
														src="/images/outfit3_shoes.png"
													/>
												</a>
											</div>
										</swiper-slide>
									</swiper-container>
									<button class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32" />
								</div>
								<!-- <div
									class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
								>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/25" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/25" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="w-full md:hidden">
					<div class="w-full md:hidden">
						<div class="flex h-full w-full items-center justify-center">
							<div class="h-full w-full md:hidden">
								<div class="flex h-full w-full flex-col">
									<div
										class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
									>
										<swiper-container
											scrollbar="true"
											class="swiper-wrapper"
											style="transition-duration: 0ms"
										>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
												style="transition-duration: 0ms; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative m-auto mt-3 h-max w-max p-3 sm:mt-16 md:mt-12 md:p-0 lg:mt-auto"
												>
													<!-- <a target="_blank" href="https://lenster.xyz/posts/0x01afc5-0x1e">
														<div
															class="z-10 flex items-start justify-start gap-2 relative ml-3 w-4/6"
															style="will-change: transform; transform: translateY(-15px);"
														>
															<img
																alt="Post user"
																src="https://www.lens.xyz/sections/illustration-post-avatar.svg"
															/>
															<img
																alt="Post"
																src="https://www.lens.xyz/sections/illustration-post.png"
																draggable="false"
																class="rounded-b-3xl rounded-tr-3xl backdrop-blur-lg h-[128px] md:h-32 md:rounded-b-[2rem] md:rounded-tr-[2rem]"
															/>
														</div>
													</a> -->
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit1"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit1.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
													<a target="_self" href="avakinlife://shop/item/dwgEFqL0dYY2XXuI">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-8 sm:-right-16 top-4"
															draggable="false"
															alt="hair"
															width="80px"
															src="/images/outfit1_hair.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/F2BPSGEtSmRc">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -left-16 sm:-left-24 top-28"
															alt="shirt"
															draggable="false"
															width="80px"
															src="/images/outfit1_shirt.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/6EIK9UGLLM0Q0G9W">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-16 sm:-right-20 top-48"
															alt="skirt"
															width="80px"
															src="/images/outfit1_skirt.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/0EGHGG1TANGBZFG5">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-16 sm:-right-20 bottom-10"
															alt="shoes"
															width="80px"
															src="/images/outfit1_shoes.png"
														/>
													</a>
												</div>
											</swiper-slide>
											<swiper-slide
												class="wiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
												style="transition-duration: 0ms; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative mb-[5rem] ml-4 mr-1 mt-6 h-max w-max md:mt-20 lg:mx-4 lg:w-4/6 xl:m-auto xl:mt-28 xl:w-max"
												>
													<!-- <a target="_self" href=""
														><div
															class="z-10 flex items-start justify-start gap-2 relative top-10 w-3/4"
															style="will-change: transform; transform: translateY(-40px);"
														>
															<img
																alt="Post user"
																draggable="false"
																src="https://www.lens.xyz/sections/illustration-post-video-avatar.svg"
																class="w-[45px] lg:w-full"
															/>
															<img
																alt="Post"
																draggable="false"
																src="https://www.lens.xyz/sections/illustration-post-video.png"
																class="rounded-b-3xl rounded-tr-3xl backdrop-blur-[48px] md:h-32 md:rounded-b-[2rem] md:rounded-tr-[2rem]"
															/>
														</div>
													</a> -->
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit2"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit2.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
													<!-- <img
														class="absolute lg:hidden -bottom-10 -right-2 w-16 sm:right-4 sm:w-20"
														alt="Actions"
														draggable="false"
														src="https://www.lens.xyz/sections/video-actions.png"
													/> -->
													<a target="_self" href="avakinlife://shop/item/8LB70Y0W80M8CRN9">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-14 sm:-right-20 top-4"
															draggable="false"
															alt="pods"
															width="90px"
															src="/images/outfit2_pods.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/XYR5ZX136H6E4G7I">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -left-20 sm:-left-24 top-4"
															draggable="false"
															alt="hair"
															width="90px"
															src="/images/outfit2_hair.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/PxAegejYKfXl93OO">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -left-24 sm:-left-28 top-36"
															alt="shirt"
															draggable="false"
															width="90px"
															src="/images/outfit2_shirt.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/V2VNKRSQD5OE5HKG">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg hidden sm:block -right-24 top-48"
															alt="skirt"
															width="90px"
															src="/images/outfit2_shorts.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/19c873a29f3b">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-14 sm:-right-20 bottom-10"
															alt="shoes"
															width="90px"
															src="/images/outfit2_shoes.png"
														/>
													</a>
													<!-- <button class="outline-none">
														<div
															class="absolute rounded-full -bottom-6 left-4"
															style="will-change: transform; transform: translateY(-10px);"
														>
															<img
																alt="play"
																class="h-12 rounded-full shadow-lg backdrop-blur-lg lg:h-[3.5rem] lg:shadow-xl"
																draggable="false"
																src="https://www.lens.xyz/sections/button-play-video.svg"
															/>
														</div>
													</button> -->
												</div>
											</swiper-slide>
											<swiper-slide
												class="wiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
												style="transition-duration: 0ms; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative mb-[5rem] ml-4 mr-1 mt-6 h-max w-max md:mt-20 lg:mx-4 lg:w-4/6 xl:m-auto xl:mt-28 xl:w-max"
												>
													<div class="relative flex items-center justify-center">
														<button
															class="scale-[1] hover:scale-[1.05] hover:cursor-grab"
															style="transition: transform 0.3s;"
														>
															<img
																alt="outfit3"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit3.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
													<a target="_self" href="avakinlife://shop/item/MLZW4195awOURVc2">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-16 sm:-right-24 top-4"
															draggable="false"
															alt="hair"
															width="90px"
															src="/images/outfit3_hair.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/goYgPzqVTGK9IpsE">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -left-20 sm:-left-28 top-36"
															alt="shirt"
															draggable="false"
															width="90px"
															src="/images/outfit3_fit.png"
														/>
													</a>
													<a target="_self" href="avakinlife://shop/item/J5FTTJtXcSwF">
														<img
															class="absolute rounded-full shadow-xl backdrop-blur-lg -right-14 sm:-right-16 bottom-10"
															alt="shoes"
															width="90px"
															src="/images/outfit3_shoes.png"
														/>
													</a>
												</div>
											</swiper-slide>
										</swiper-container>
										<button
											class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32"
										/>
									</div>
									<!-- <div
										class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
									>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a
				href="/discord"
				target="_blank"
				class="relative order-2 col-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] p-4 will-change-transform md:p-5 lg:col-span-1 xl:p-8 lg:!order-1"
				style="transform: scale(1); background-color: rgb(90, 78, 76);"
			>
				<!-- <div
					style="opacity: 0;"
					class="fixed left-0 top-0 z-0 h-full w-full rounded-[20px] bg-black mix-blend-overlay"
				/> -->
				<div>
					<h2 class="sm-header-three lg:hidden">Join the AvaFits community</h2>
					<h2 class="header-four hidden xl:block">Join the AvaFits community</h2>
					<h2 class="header-five hidden lg:block xl:hidden">Join the AvaFits community</h2>
				</div>
				<div class="pt-5 text-xl md:pt-10">
					<p class="t3-medium hidden max-w-[20rem] pb-5 lg:block">
						Designed to be interoperable, AvaFits allows you to share and discover outfits. This
						gives anyone the abillity to become their own fashion stylist.
					</p>
					<p class="sm-t4-medium max-w-[95%] pb-5 lg:hidden">
						Designed to be interoperable, AvaFits allows you to share and discover outfits. This
						gives anyone the abillity to become their own fashion stylist.
					</p>
					<div>
						<button
							style="transform: scale(1);"
							class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 !h-[43px] w-full font-semibold uppercase lg:h-auto lg:w-auto"
						>
							Join Discord
						</button>
					</div>
				</div>
			</a>
		</div>
		<div
			class="w-full rounded-[30px] p-2 text-dustyMiller md:p-5 lg:grid lg:grid-cols-3"
			style="background-color: rgb(208, 219, 255);"
		>
			<div class="flex w-full justify-center lg:col-span-2">
				<div class="hidden w-full md:block md:h-[550px]">
					<div class="flex h-full w-full items-center justify-center">
						<div class="relative w-full">
							<div class="relative mx-auto w-max">
								<img
									src="/images/socialmedia_post.png"
									class="h-full w-full rounded-3xl object-cover pb-36"
									alt=""
									draggable="false"
								/>
							</div>
							<div class="absolute -bottom-0 -left-10 -right-10 mx-auto max-w-[700px]">
								<img
									src="/images/socialmedia_comments.png"
									alt=""
									draggable="false"
									style="will-change: transform; transform: translateY(-40px);"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full md:hidden">
					<div class="hidden w-full p-6 md:block md:p-0 lg:h-[500px]">
						<img
							src="/images/socialmedia_post.png"
							class="h-full w-full object-contain"
							draggable="false"
							alt=""
						/>
					</div>
					<div class="flex h-full w-full items-center justify-center">
						<div class="relative w-full p-6 md:hidden md:p-0 lg:h-[500px]">
							<img
								src="/images/socialmedia_post.png"
								class="w-full rounded-3xl object-cover pb-36"
								alt=""
								draggable="false"
							/>
							<div class="absolute -bottom-0 -left-10 -right-10 mx-auto max-w-full">
								<img
									src="/images/socialmedia_comments.png"
									alt=""
									class="object-scale-down"
									draggable="false"
									style="will-change: transform; transform: translateY(-60px);"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a
				href="/profile"
				target="_self"
				class="relative order-2 col-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] p-4 will-change-transform md:p-5 lg:col-span-1 xl:p-8"
				style="transform: scale(1); background-color: rgb(71, 75, 87);"
				><div
					style="opacity: 0;"
					class="fixed left-0 top-0 z-0 h-full w-full rounded-[20px] bg-black mix-blend-overlay"
				/>
				<h2 class="sm-header-three lg:hidden">Create and share</h2>
				<h2 class="header-four hidden xl:block">Create and share</h2>
				<h2 class="header-five hidden lg:block xl:hidden">Create and share</h2>
				<div class="pt-5 text-xl md:pt-10">
					<p class="t3-medium hidden max-w-[20rem] pb-5 lg:block">
						Take your outfit to the public, and inspire others. Stylists can share their outfit with
						a simple link and truly connect with their audience.
					</p>
					<p class="sm-t4-medium max-w-[95%] pb-5 lg:hidden">
						Take your outfit to the public, and inspire others. Stylists can share their outfit with
						a simple link and truly connect with their audience.
					</p>
					<div>
						<button
							style="transform: scale(1);"
							class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 !h-[43px] w-full font-semibold uppercase lg:h-auto lg:w-auto"
							>become stylist</button
						>
					</div>
				</div></a
			>
		</div>
		<div
			class="w-full rounded-[30px] p-2 text-dustyMiller md:p-5 lg:grid lg:grid-cols-3"
			style="background-color: rgb(219, 204, 243);"
		>
			<div class="flex w-full justify-center lg:col-span-2 order-2">
				<div class="hidden w-full md:block md:h-[550px]">
					<div class="flex h-full w-full items-center justify-center">
						<div class="hidden h-full w-full md:block">
							<div class="flex h-full w-full flex-col">
								<div
									class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
								>
									<swiper-container scrollbar="true" class="swiper-wrapper" style="">
										<!-- making fits access- DESKTOP IMAGES -->
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
										>
											<div
												class="relative h-full w-full justify-center flex items-center text-center"
											>
												<h2 class="sm-header-three lg:hidden">Feature in development!</h2>
												<h2 class="header-four hidden xl:block">Feature in development!</h2>
												<h2 class="header-five hidden lg:block xl:hidden">
													Feature in development!
												</h2>
											</div>
										</swiper-slide>
										<!-- <swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
										>
											<div class="relative h-full w-full">
												<div class="absolute bottom-0 right-0 mb-16 mr-14 w-1/2">
													<div class="relative">
														<img
															alt="Shinsei blur"
															src="https://www.lens.xyz/sections/illustration-shinsei-banner.svg"
															draggable="false"
															class="rounded-3xl shadow-xl backdrop-blur"
														/><img
															alt="Click NFT Collection"
															src="https://www.lens.xyz/sections/button-shinsei.png"
															draggable="false"
															class="absolute -bottom-4 left-0 right-0 mx-auto w-[60%] rounded-full shadow-xl backdrop-blur"
														/>
													</div>
												</div>
												<img
													alt="NFT Collection"
													src="https://www.lens.xyz/sections/illustration-shinsei-gating.svg"
													class="absolute left-0 top-0 z-20 ml-20 mt-12 w-[45%] rounded-3xl shadow-xl backdrop-blur"
													draggable="false"
													style="will-change: transform; transform: translateY(-30px);"
												/>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
										>
											<div class="relative mb-16 flex h-full w-2/3 pt-28">
												<div class="relative m-auto w-5/6">
													<div
														class="absolute -left-32 -top-20 z-10 flex items-start justify-start gap-2"
														style="will-change: transform; transform: translateY(-30px);"
													>
														<img
															alt="Post user"
															draggable="false"
															src="https://www.lens.xyz/sections/illustration-mint-avatar.svg"
															class="rounded-full"
														/><img
															alt="Post"
															src="https://www.lens.xyz/sections/illustration-mint-post.svg"
															draggable="false"
															class="backdrop-blur-lg"
														/>
													</div>
													<img
														alt="Forest"
														src="https://www.lens.xyz/sections/illustration-mint.png"
														draggable="false"
														class="w-full rounded-3xl"
													/><img
														alt="Mint"
														draggable="false"
														src="https://www.lens.xyz/sections/button-mint.svg"
														class="absolute -bottom-6 left-0 right-0 mx-auto w-2/3 rounded-full shadow-xl backdrop-blur-xl"
													/>
												</div>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
										>
											<div
												class="relative mx-40 flex h-full w-full max-w-[580px] items-center justify-center"
											>
												<img
													draggable="false"
													alt="CD"
													src="https://www.lens.xyz/sections/illustration-split-back.png"
													class="absolute right-0 top-16 rounded-full shadow-xl backdrop-blur"
												/><img
													draggable="false"
													alt="Split"
													src="https://www.lens.xyz/sections/illustration-split-front.svg"
													class="absolute bottom-16 left-0 rounded-3xl shadow-xl backdrop-blur"
													style="will-change: transform; transform: translateY(-30px);"
												/>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
										>
											<div class="relative flex justify-center">
												<img
													alt="Delegation"
													class="w-full"
													src="https://www.lens.xyz/sections/illustration-delegation.svg"
													draggable="false"
													style="will-change: transform; transform: translateY(20.8239px);"
												/>
											</div>
										</swiper-slide> -->
									</swiper-container>
									<button class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32" />
								</div>
								<!-- <div
									class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
								>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
								</div> -->
							</div>
						</div>
						<div class="h-full w-full md:hidden">
							<div class="flex h-full w-full flex-col">
								<div
									class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
								>
									<swiper-container
										scrollbar="true"
										class="swiper-wrapper"
										style="transition-duration: 0ms;"
									>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
										>
											<div class="relative h-full w-full">
												<div class="absolute bottom-0 right-0 mb-16 mr-14 w-1/2">
													<div class="relative">
														<img
															alt="Shinsei blur"
															src="https://www.lens.xyz/sections/illustration-shinsei-banner.svg"
															draggable="false"
															class="rounded-3xl shadow-xl backdrop-blur"
														/><img
															alt="Click NFT Collection"
															src="https://www.lens.xyz/sections/button-shinsei.png"
															draggable="false"
															class="absolute -bottom-4 left-0 right-0 mx-auto w-[60%] rounded-full shadow-xl backdrop-blur"
														/>
													</div>
												</div>
												<img
													alt="NFT Collection"
													src="https://www.lens.xyz/sections/illustration-shinsei-gating.svg"
													class="absolute left-0 top-0 z-20 ml-20 mt-12 w-[45%] rounded-3xl shadow-xl backdrop-blur"
													draggable="false"
													style="will-change: transform; transform: translateY(-30px);"
												/>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
										>
											<div class="relative mb-16 flex h-full w-2/3 pt-28">
												<div class="relative m-auto w-5/6">
													<div
														class="absolute -left-32 -top-20 z-10 flex items-start justify-start gap-2"
														style="will-change: transform; transform: translateY(-30px);"
													>
														<img
															alt="Post user"
															draggable="false"
															src="https://www.lens.xyz/sections/illustration-mint-avatar.svg"
															class="rounded-full"
														/><img
															alt="Post"
															src="https://www.lens.xyz/sections/illustration-mint-post.svg"
															draggable="false"
															class="backdrop-blur-lg"
														/>
													</div>
													<img
														alt="Forest"
														src="https://www.lens.xyz/sections/illustration-mint.png"
														draggable="false"
														class="w-full rounded-3xl"
													/><img
														alt="Mint"
														draggable="false"
														src="https://www.lens.xyz/sections/button-mint.svg"
														class="absolute -bottom-6 left-0 right-0 mx-auto w-2/3 rounded-full shadow-xl backdrop-blur-xl"
													/>
												</div>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
										>
											<div
												class="relative mx-40 flex h-full w-full max-w-[580px] items-center justify-center"
											>
												<img
													draggable="false"
													alt="CD"
													src="https://www.lens.xyz/sections/illustration-split-back.png"
													class="absolute right-0 top-16 rounded-full shadow-xl backdrop-blur"
												/><img
													draggable="false"
													alt="Split"
													src="https://www.lens.xyz/sections/illustration-split-front.svg"
													class="absolute bottom-16 left-0 rounded-3xl shadow-xl backdrop-blur"
													style="will-change: transform; transform: translateY(-30px);"
												/>
											</div>
										</swiper-slide>
										<swiper-slide
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
										>
											<div class="relative flex justify-center">
												<img
													alt="Delegation"
													class="w-full"
													src="https://www.lens.xyz/sections/illustration-delegation.svg"
													draggable="false"
													style="will-change: transform; transform: translateY(20px);"
												/>
											</div>
										</swiper-slide>
									</swiper-container>
									<button class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32" />
								</div>
								<!-- <div
									class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
								>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
									<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
										<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
										<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="w-full md:hidden">
					<div class="w-full md:hidden">
						<div class="flex h-full w-full items-center justify-center">
							<div class="hidden h-full w-full md:block">
								<div class="flex h-full w-full flex-col">
									<div
										class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
									>
										<swiper-container
											scrollbar="true"
											class="swiper-wrapper"
											style="transition-duration: 0ms;"
										>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											>
												<div class="relative h-full w-full">
													<div class="absolute bottom-0 right-0 mb-16 mr-14 w-1/2">
														<div class="relative">
															<img
																alt="Shinsei blur"
																src="https://www.lens.xyz/sections/illustration-shinsei-banner.svg"
																draggable="false"
																class="rounded-3xl shadow-xl backdrop-blur"
															/><img
																alt="Click NFT Collection"
																src="https://www.lens.xyz/sections/button-shinsei.png"
																draggable="false"
																class="absolute -bottom-4 left-0 right-0 mx-auto w-[60%] rounded-full shadow-xl backdrop-blur"
															/>
														</div>
													</div>
													<img
														alt="NFT Collection"
														src="https://www.lens.xyz/sections/illustration-shinsei-gating.svg"
														class="absolute left-0 top-0 z-20 ml-20 mt-12 w-[45%] rounded-3xl shadow-xl backdrop-blur"
														draggable="false"
														style="will-change: transform; transform: translateY(-30px);"
													/>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											>
												<div class="relative mb-16 flex h-full w-2/3 pt-28">
													<div class="relative m-auto w-5/6">
														<div
															class="absolute -left-32 -top-20 z-10 flex items-start justify-start gap-2"
															style="will-change: transform; transform: translateY(-30px);"
														>
															<img
																alt="Post user"
																draggable="false"
																src="https://www.lens.xyz/sections/illustration-mint-avatar.svg"
																class="rounded-full"
															/><img
																alt="Post"
																src="https://www.lens.xyz/sections/illustration-mint-post.svg"
																draggable="false"
																class="backdrop-blur-lg"
															/>
														</div>
														<img
															alt="Forest"
															src="https://www.lens.xyz/sections/illustration-mint.png"
															draggable="false"
															class="w-full rounded-3xl"
														/><img
															alt="Mint"
															draggable="false"
															src="https://www.lens.xyz/sections/button-mint.svg"
															class="absolute -bottom-6 left-0 right-0 mx-auto w-2/3 rounded-full shadow-xl backdrop-blur-xl"
														/>
													</div>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											>
												<div
													class="relative mx-40 flex h-full w-full max-w-[580px] items-center justify-center"
												>
													<img
														draggable="false"
														alt="CD"
														src="https://www.lens.xyz/sections/illustration-split-back.png"
														class="absolute right-0 top-16 rounded-full shadow-xl backdrop-blur"
													/><img
														draggable="false"
														alt="Split"
														src="https://www.lens.xyz/sections/illustration-split-front.svg"
														class="absolute bottom-16 left-0 rounded-3xl shadow-xl backdrop-blur"
														style="will-change: transform; transform: translateY(-30px);"
													/>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
											>
												<div class="relative flex justify-center">
													<img
														alt="Delegation"
														class="w-full"
														src="https://www.lens.xyz/sections/illustration-delegation.svg"
														draggable="false"
														style="will-change: transform; transform: translateY(20px);"
													/>
												</div>
											</swiper-slide>
										</swiper-container>
										<button
											class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32"
										/>
									</div>
									<!-- <div
										class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
									>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
									</div> -->
								</div>
							</div>
							<div class="h-full w-full md:hidden">
								<div class="flex h-full w-full flex-col">
									<div
										class="swiper swiper-creative swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress relative flex h-full w-full flex-col items-center justify-center"
									>
										<swiper-container
											scrollbar="true"
											class="swiper-wrapper"
											style="transition-duration: 0ms;"
										>
											<!-- making fits access- MOBILE SCREEN IMAGES -->
											<!-- <swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
												style="transition-duration: 0ms; z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative m-4 sm:m-12"
													style="will-change: transform; transform: translateY(-10px);"
												>
													<img
														alt="Shinsei Gating"
														src="https://www.lens.xyz/sections/shinsei-gating-sm.png"
														draggable="false"
													/>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
												style="transition-duration: 0ms; z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative m-2 mt-3 sm:m-12 sm:mt-16"
													style="will-change: transform; transform: translateY(-10px);"
												>
													<img
														alt="Shinsei Mint"
														src="https://www.lens.xyz/sections/seadrop-mint.png"
														draggable="false"
													/>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
												style="transition-duration: 0ms; z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative m-4 sm:m-12"
													style="will-change: transform; transform: translateY(-10px);"
												>
													<img
														alt="Split"
														src="https://www.lens.xyz/sections/split-sm.png"
														draggable="false"
													/>
												</div>
											</swiper-slide>
											<swiper-slide
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
												style="transition-duration: 0ms; z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative mt-8 px-3 sm:mt-28"
													style="will-change: transform; transform: translateY(20px);"
												>
													<img
														alt="Shinsei Mint"
														src="https://www.lens.xyz/sections/illustration-delegation.png"
														draggable="false"
													/>
												</div>
											</swiper-slide> -->
										</swiper-container>
										<button
											class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32"
										/>
									</div>
									<!-- <div
										class="swiper-pagination flex w-full items-center gap-4 px-4 py-2 sm:px-8 sm:py-4"
									>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
										<div class="relative h-1 w-full rounded-xl sm:h-2 sm:w-1/3">
											<div class="absolute left-0 top-0 h-full w-full rounded-xl bg-black/20" />
											<button class="absolute -top-3 left-0 h-8 w-full cursor-pointer" />
										</div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a
				href="/outfits"
				target="_self"
				class="relative order-2 col-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] p-4 will-change-transform md:p-5 lg:col-span-1 xl:p-8 lg:!order-1"
				style="transform: scale(1); background-color: rgb(86, 84, 103);"
				><div
					style="opacity: 0;"
					class="fixed left-0 top-0 z-0 h-full w-full rounded-[20px] bg-black mix-blend-overlay"
				/>
				<h2 class="sm-header-three lg:hidden">Making Fits Accesible</h2>
				<h2 class="header-four hidden xl:block">Making Fits Accesible</h2>
				<h2 class="header-five hidden lg:block xl:hidden">Making Fits Accesible</h2>
				<div class="pt-5 text-xl md:pt-10">
					<p class="t3-medium hidden max-w-[20rem] pb-5 lg:block">
						With the abillity to like, share and favorite fits comes with awesome filters to find
						just what you need for any occasion.
					</p>
					<p class="sm-t4-medium max-w-[95%] pb-5 lg:hidden">
						With the abillity to like, share and favorite fits comes with awesome filters to find
						just what you need for any occasion.
					</p>
					<div>
						<button
							style="transform: scale(1);"
							class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 !h-[43px] w-full font-semibold uppercase lg:h-auto lg:w-auto"
							>Discover Most Liked</button
						>
					</div>
				</div></a
			>
		</div>
		<div
			class="w-full rounded-[30px] p-2 text-dustyMiller md:p-5 lg:grid lg:grid-cols-3"
			style="background-color: rgb(195, 228, 205);"
		>
			<div class="flex w-full justify-center lg:col-span-2">
				<div class="hidden w-full md:block md:h-[550px]">
					<div
						class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
						style="z-index: 4; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
					>
						<div class="relative h-full w-full justify-center flex items-center text-center">
							<h2 class="sm-header-three lg:hidden">Feature in development!</h2>
							<h2 class="header-four hidden xl:block">Feature in development!</h2>
							<h2 class="header-five hidden lg:block xl:hidden">Feature in development!</h2>
						</div>
					</div>
					<!-- discord images desktop -->
					<!-- <div class="mt-2 flex h-full w-full items-center justify-center">
						<div class="relative mb-[10%] mr-[30%]">
							<img
								src="https://www.lens.xyz/sections/illustration-build-back.svg"
								class=" rounded-3xl shadow-2xl backdrop-blur-lg"
								draggable="false"
								alt=""
								style="will-change: transform; transform: translateY(20.8639px);"
							/><img
								draggable="false"
								src="https://www.lens.xyz/sections/illustration-build-front.svg"
								class="absolute -right-[75%] top-44 w-[600px] rounded-3xl shadow-2xl backdrop-blur-lg"
								alt=""
								style="will-change: transform; transform: translateY(-20px);"
							/>
						</div>
					</div> -->
				</div>
				<div class="w-full md:hidden">
					<!-- discord images mobile -->
					<!-- <div class="hidden w-full p-6 md:block md:p-0 lg:h-[500px]">
						<img
							src="https://images.prismic.io/lensv2/c2cb981e-9bb9-443e-b08b-b8e81b2aec05_5lines.png?auto=compress,format"
							class="h-full w-full object-contain"
							draggable="false"
							alt=""
						/>
					</div>
					<div class="w-full p-6 md:hidden md:p-0 lg:h-[500px]">
						<img
							src="https://images.prismic.io/lensv2/aafb1d7d-5d0b-48a0-a022-75dc195ef869_connect-build-small.png?auto=compress,format"
							class="h-full w-full object-contain"
							draggable="false"
							alt=""
						/>
					</div> -->
				</div>
			</div>
			<a
				href="/discord"
				target="_blank"
				class="relative order-2 col-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] p-4 will-change-transform md:p-5 lg:col-span-1 xl:p-8"
				style="transform: scale(1); background-color: rgb(61, 75, 65);"
				><div
					style="opacity: 0;"
					class="fixed left-0 top-0 z-0 h-full w-full rounded-[20px] bg-black mix-blend-overlay"
				/>
				<h2 class="sm-header-three lg:hidden">Connect with other stylists</h2>
				<h2 class="header-four hidden xl:block">Connect with other stylists</h2>
				<h2 class="header-five hidden lg:block xl:hidden">Connect with other stylists</h2>
				<div class="pt-5 text-xl md:pt-10">
					<p class="t3-medium hidden max-w-[20rem] pb-5 lg:block">
						Join our Discord community and meet other stylists already making amazing curated
						outfits.
					</p>
					<p class="sm-t4-medium max-w-[95%] pb-5 lg:hidden">
						Join our Discord community and meet other stylists already making amazing curated
						outfits.
					</p>
					<div>
						<button
							style="transform: scale(1);"
							class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 !h-[43px] w-full font-semibold uppercase lg:h-auto lg:w-auto"
							>Join Discord</button
						>
					</div>
				</div>
			</a>
		</div>
		<!-- integrations / apps slider -->
		<!-- could use to feature top outfits -->
		<!-- <div
			class="text-dustyMiller md:m-0 my-1.5 rounded-2xl"
			style="background-color: rgb(70, 70, 70);"
		>
			<div class="p-5 text-center md:px-10 md:py-4 md:text-left lg:p-[30px]">
				<h1 class="header-four header-three hidden max-w-6xl lg:block">Lens apps</h1>
				<h1 class="header-four sm-header-one mt-6 lg:hidden">Lens apps</h1>
				<p class="t3-medium pt-2 md:pt-4">Explore apps and integrations using Lens</p>
			</div>
			<swiper-container
				space-between={35}
				slides-per-view={3}
				centered-slides={false}
				class="no-scrollbar mt-4 flex gap-4 overflow-x-auto px-4 pb-6 last:pr-0 md:gap-[35px] md:px-[35px] md:pb-[35px] indiana-scroll-container indiana-scroll-container--hide-scrollbars"
			>
				<swiper-slide
					class="relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/a5c8ecea-c99a-42a4-b085-7e0c3fb9d9a0_Desktop_Orb.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/669fe033-8daa-4834-bd81-51ec8f0e498c_Mobile_Orb.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/50c3cccb-9a77-4606-91e2-f2a07ec4cc07_orb.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Orb
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Mobile experience with a focus on creators and communities
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">
									Mobile app for creators and communities
								</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://orb.ac"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Get App</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Get</button
							></a
						>
					</div>
				</swiper-slide>
				<swiper-slide
					class=" relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/584c528f-ba1c-4818-9d12-c86d449d4c7c_Desktop_Heypng.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/1a8df73f-37d0-4a9c-9626-d1027bd16b89_Mobile_Hey.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/9b2131e0-b990-4603-8fb0-82928c6724a4_hey.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Hey
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Open source platform for desktop
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">
									Optimized for desktop
								</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://hey.xyz"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Visit</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Visit</button
							></a
						>
					</div>
				</swiper-slide>
				<swiper-slide
					class=" relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/be27aceb-1703-4b5b-abe6-11152cc02b43_Desktop_Buttrfly.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/335fec47-937e-4da7-aa20-18495a4ce90e_Mobile_Buttrfly.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/c2672341-441b-473e-b7c2-8acf83c13c92_buttrfly-lg.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Buttrfly
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Web3 Social Explorer
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">
									Web3 Social Explorer
								</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://buttrfly.app"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Get App</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Get</button
							></a
						>
					</div>
				</swiper-slide>
				<swiper-slide
					class=" relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/64a4bac7-a49d-4016-82c7-7ec480b04462_Desktop_Tape.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/22542a7b-bf53-4866-8fa4-b63c7ef0d859_Mobile_Tape.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/03cfaad9-6b2e-4a3f-aa4a-7a30beea9998_tape.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Tape
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Open-source video platform for desktop
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">Video platform</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://tape.xyz"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Visit</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Visit</button
							></a
						>
					</div>
				</swiper-slide>
				<swiper-slide
					class=" relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/5bf61398-9fb6-4d9d-b2b9-745ef6940738_Desktop_Riff.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/e659a34f-6979-4b0f-987e-3b81ebbdc36c_Mobile_Riff.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/22caed25-59c9-494a-801b-987c44b73fd1_riffapp.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Riff
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Discover and collect new music on Lens
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">
									Discover new music on Lens
								</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://www.riffapp.xyz/"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Visit</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Visit</button
							></a
						>
					</div>
				</swiper-slide>
				<swiper-slide
					class=" relative flex h-[290px] w-[310px] flex-none flex-col justify-end rounded-2xl p-3 pt-4 last:mr-4 md:h-[520px] md:w-[650px] md:space-y-5 md:rounded-[30px] md:p-6 md:last:mr-8 bg-lightSky"
				>
					<div
						class="absolute left-0 top-0 hidden h-full w-full justify-center md:flex"
						style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"
					>
						<img
							class="-mb-12 mt-4 h-[95%] w-full object-contain"
							src="https://images.prismic.io/lensv2/c22b9b25-2d59-45ee-9801-66cc20d86245_Desktop_Dumpling.png?auto=compress,format"
							alt=""
							draggable="false"
						/>
					</div>
					<img
						class="absolute left-0 top-0 h-full w-full object-contain md:hidden"
						src="https://images.prismic.io/lensv2/e3c5ff29-c6d6-48a1-b984-dd23b7d3d215_Mobile_Dumpling.png?auto=compress,format"
						alt=""
						draggable="false"
					/>
					<div
						class="z-[1] flex items-center justify-between gap-4 rounded-lg bg-darkSky px-2 py-2 shadow-xl md:mt-0 md:rounded-2xl md:pl-2 md:pr-4"
					>
						<div class="flex items-center space-x-2">
							<img
								class="h-[60px] md:h-[7rem] md:rounded-lg"
								src="https://images.prismic.io/lensv2/7e92ad55-7f07-4a38-9f67-21e469f12077_dtv-lg.png?auto=compress,format"
								draggable="false"
								alt=""
							/>
							<div
								class="-mt-1 flex flex-col items-start justify-center font-gintoNord text-dustyMiller"
							>
								<h1
									class="text-[18px] font-semibold leading-[18px] tracking-[-0.5px] lg:text-[40px] lg:leading-[50px] lg:tracking-[-1px]"
								>
									Dumpling
								</h1>
								<p class="heading-nine line-clamp-2 hidden tracking-[-0.2px] md:block">
									Streaming and steaming the best content from Lens
								</p>
								<p class="heading-nine line-clamp-2 tracking-[-0.2px] md:hidden">
									Streaming and steaming
								</p>
							</div>
						</div>
						<a class="flex justify-end md:w-[190px]" target="_blank" href="https://dumpling.lol"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 hidden text-[18px] font-semibold uppercase leading-[24px] tracking-[-0.3px] lg:block"
								>Visit</button
							><button
								style="transform: scale(1);"
								class="rounded-full bg-dustyMiller text-blackWood px-5 py-2 text-sm md:py-2 font-bold uppercase lg:hidden"
								>Visit</button
							></a
						>
					</div>
				</swiper-slide>
			</swiper-container>
		</div> -->
		<div
			style="position: relative; overflow: hidden; width: 100%;"
			class="flex h-[320px] items-center justify-center rounded-[20px] bg-cover pb-10 pt-10 text-paleSunflower md:py-[150px] lg:h-[580px]"
		>
			<div
				use:viewport
				on:enterViewport={() => (currentOffset = -200)}
				on:exitViewport={() => (currentOffset = -200)}
				id="layer-0"
				data-testid="layer-0"
				style="background-image: url(&quot;https://avakin.com/wp-content/uploads/2021/08/AvakinZoom_Space_Image-1024x576.png&quot;); background-position: center center; background-size: cover; position: absolute; inset: -80px 0px; will-change: transform; transform: translateY(-80px);"
			>
				<video
					src="https://avakin.com/wp-content/uploads/2021/09/AvakinZoom_Space.mp4"
					autoplay={true}
					loop
					muted
					class="absolute z-10 w-auto
						min-w-full min-h-full max-w-none inset-x-[-750px] inset-y-[-230px] md:inset-x-[-580px] md:inset-y-[-230px] lg:inset-x-[-460px] lg:inset-y-[-230px] xl:inset-x-0 xl:inset-y-0"
				/>
			</div>
			<div data-testid="layer-1" style="position: absolute; inset: 0px; will-change: transform;">
				<div class="m-auto flex h-full max-w-5xl flex-col items-center justify-center">
					<h1
						class="sm-header-one font-bold md:font-gintoNord lg:text-[136px] lg:leading-[120px] lg:tracking-[-6.4px] text-center"
					>
						Coming Soon
					</h1>
					<div class="t3-medium max-w-2xl px-10 py-4 text-center !opacity-100">
						AvaFits is rolling out soon. Join the Discord to stay updated.
					</div>
					<span class="w-3/5 pt-6 md:w-auto"
						><a target="_blank" href="/discord"
							><button
								style="transform: scale(1);"
								class="rounded-full bg-paleSunflower text-darkForest px-8 py-5 text-lg w-full text-sm font-semibold uppercase md:text-lg"
								>Join Discord</button
							></a
						></span
					>
					<!-- <span
						class="mt-2 inline-flex gap-1 px-3 py-2 text-sm md:text-[16px] md:font-medium md:leading-[19px] md:tracking-[-0.4px]"
					>
						<p class="font-medium text-white">No wallet?</p>
						<span class="relative">
							<a
								target="_blank"
								class="link link-underline link-underline-black font-medium text-white"
								href="https://ethereum.org/en/wallets/"
							>
								Get a wallet
							</a>
						</span>
					</span> -->
				</div>
			</div>
		</div>
	</div>
</div>
