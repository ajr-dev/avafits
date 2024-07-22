<script lang="ts">
	import type { PageData } from './$types';

	import { theme } from '$lib/stores/store';
	import { Shine } from 'svelte-ux';
	import FitCard from '$lib/components/FitCard.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';

	export let data: PageData;
</script>

<div class="h-full min-h-screen w-full overflow-x-hidden">
	<div class="relative mx-auto gap-4 flex flex-col">
		<!-- <div
			class="relative z-10 w-full overflow-hidden py-4 px-4 {$theme == 'christmas'
				? 'text-lightTrout bg-[#474b57]'
				: ''} {$theme == 'home' ? 'bg-[#ffffff14]' : ''} rounded-3xl mt-36"
		>
			<div class="flex flex-row gap-4 w-full">
				<div class="w-full bg-paleSunflower rounded-3xl h-60 flex justify-center p-4">
					<img src="/images/outfit1.png" class="object-scale-down" alt="outfit" />
				</div>
				<div
					class="w-full bg-paleSunflower rounded-3xl h-min-60 flex flex-col justify-start font-bold text-blackWood p-4"
				>
					<div>Estimated coins: 8000</div>
					<div>Estimated crowns: 100</div>
				</div>
			</div>
		</div> -->
		<div
			class="mt-32 w-full rounded-[30px] p-2 text-dustyMiller md:p-5 lg:grid lg:grid-cols-3"
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
									<div class="swiper-wrapper swiper-first" style="transition-duration: 0ms;">
										<div
											class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center swiper-slide-visible swiper-slide-active"
											style="z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1; transition-duration: 0ms;"
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
																alt="outfit1"
																height="400px"
																width="150px"
																draggable="false"
																src="/images/outfit1.png"
																class="cd-pause animate-spin-slow"
															/>
														</button>
													</div>
												</Shine>
											</div>
										</div>
									</div>
									<button class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32" />
								</div>
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
										<div class="swiper-wrapper" style="transition-duration: 0ms">
											<div
												class="swiper-slide relative z-10 !flex h-full w-full cursor-grab items-center justify-center"
												style="transition-duration: 0ms; z-index: 3; transform: translate3d(calc(0px), calc(0px), calc(0px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); opacity: 1;"
											>
												<div
													class="relative m-auto mt-3 h-max w-max p-3 sm:mt-16 md:mt-12 md:p-0 lg:mt-auto"
												>
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
												</div>
											</div>
										</div>
										<button
											class="absolute right-0 top-0 !z-20 h-full w-16 cursor-pointer xl:w-32"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="relative order-2 col-span-2 flex flex-col justify-between overflow-hidden rounded-[20px] p-4 will-change-transform md:p-5 lg:col-span-1 xl:p-8 lg:!order-1"
				style="transform: scale(1); background-color: rgb(90, 78, 76);"
			>
				<!-- <div
					style="opacity: 0;"
					class="fixed left-0 top-0 z-0 h-full w-full rounded-[20px] bg-black mix-blend-overlay"
				/> -->
				<div>
					<h2 class="sm-header-three lg:hidden">The Rebel</h2>
					<h2 class="header-four hidden xl:block">The Rebel</h2>
					<h2 class="header-five hidden lg:block xl:hidden">The Rebel</h2>
				</div>
				<div class="pt-5 text-xl md:pt-10">
					<p class="t3-medium hidden max-w-[20rem] pb-5 lg:block">
						Estimated coins: 8000 <br />Estimated crowns: 100
					</p>
					<p class="sm-t4-medium max-w-[95%] pb-5 lg:hidden">
						Estimated coins: 8000 <br />Estimated crowns: 100
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	</div>
</div>

<style>
	.leading-\[36px\] {
		line-height: 36px;
	}
	.-tracking-\[1\.2px\] {
		letter-spacing: -1.2px;
	}
	.header-one {
		font-family: var(--font-ginto-nord);
		font-size: 3.625rem;
		font-weight: 700;
		line-height: 70px;
	}
	@media (min-width: 1024px) {
		.header-one {
			font-size: 100px;
			line-height: 110px;
			letter-spacing: -7px;
		}
	}
	@media (min-width: 1536px) {
		.header-one {
			font-size: 120px;
		}
	}
	.header-two {
		font-family: var(--font-ginto-nord);
		font-size: 40px;
		font-weight: 700;
		line-height: 36px;
		letter-spacing: -1px;
	}
	@media (min-width: 1024px) {
		.header-two {
			font-size: 100px;
			line-height: 100px;
			letter-spacing: -4px;
		}
	}
	.header-three {
		font-family: var(--font-ginto-nord);
		font-size: 1.875rem;
		font-weight: 700;
	}
	@media (min-width: 1024px) {
		.header-three {
			font-size: 90px;
			line-height: 90px;
			letter-spacing: -3px;
		}
	}
	.header-four {
		font-family: var(--font-ginto-nord);
		font-size: 32px;
		font-weight: 700;
		line-height: 30px;
		letter-spacing: -1px;
	}
	@media (min-width: 1024px) {
		.header-four {
			font-size: 58px;
			line-height: 50px;
			letter-spacing: -2.5px;
		}
	}
	.header-five {
		font-family: var(--font-ginto-nord);
		font-size: 36px;
		font-weight: 500;
		line-height: 35px;
		letter-spacing: -2px;
	}
	@media (min-width: 1024px) {
		.header-five {
			font-size: 50px;
			line-height: 50px;
		}
	}
	.header-six {
		font-family: var(--font-ginto-nord);
		font-size: 24px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: -2px;
	}
	@media (min-width: 1024px) {
		.header-six {
			font-size: 40px;
			line-height: 38px;
		}
	}
	.header-eight {
		font-size: 24px;
		line-height: 24px;
		letter-spacing: -0.5px;
	}
	.header-eight,
	.heading-nine {
		font-family: var(--font-ginto-nord);
		font-weight: 500;
	}
	.heading-nine {
		font-size: 11px;
		line-height: 14px;
	}
	@media (min-width: 1024px) {
		.heading-nine {
			font-size: 16px;
			line-height: 18px;
		}
		.t2 {
			font-size: 30px;
			line-height: 30px;
			letter-spacing: -1.2px;
		}
		.t3 {
			font-size: 24px;
			line-height: 24px;
			letter-spacing: -0.6px;
		}
	}
	.t3-medium {
		font-size: 14px;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: -0.2px;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
		opacity: 0.8;
	}
	@media (min-width: 1024px) {
		.t3-medium {
			font-size: 24px;
			line-height: 28px;
			letter-spacing: -0.6px;
		}
	}
	.t6-medium {
		font-size: 13px;
		font-style: normal;
		font-weight: 500;
		line-height: 15px;
		letter-spacing: -0.2px;
	}
	.sm-header-one {
		font-size: 40px;
		font-weight: 700;
		line-height: 36px;
		letter-spacing: -1px;
	}
	.sm-header-one,
	.sm-header-two {
		font-family: var(--font-ginto-nord);
	}
	.sm-header-two {
		font-size: 36px;
		font-weight: 500;
		line-height: 35px;
		letter-spacing: -2px;
	}
	.sm-header-three {
		font-family: var(--font-ginto-nord);
		font-size: 32px;
		font-weight: 700;
		line-height: 30px;
		letter-spacing: -1px;
	}
	.sm-t3-medium {
		font-size: 16px;
		line-height: 19px;
		opacity: 0.8;
	}
	.sm-t3-medium,
	.sm-t4-medium {
		font-weight: 500;
		letter-spacing: -0.2px;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
	}
	.sm-t4-medium {
		font-size: 14px;
		line-height: 16px;
	}
	.t5 {
		font-weight: 400;
		letter-spacing: -0.4px;
	}
	.t5,
	.t5-medium {
		font-size: 16px;
		font-style: normal;
		line-height: 19px;
	}
	.t5-medium {
		font-weight: 500;
		letter-spacing: -0.2px;
	}
	.text-blackWood {
		--tw-text-opacity: 1;
		color: rgb(39 46 41 / var(--tw-text-opacity));
	}
	.text-darkAzalea {
		--tw-text-opacity: 1;
		color: rgb(90 78 76 / var(--tw-text-opacity));
	}
	.text-darkForest {
		--tw-text-opacity: 1;
		color: rgb(61 75 65 / var(--tw-text-opacity));
	}
	.text-darkTrout {
		--tw-text-opacity: 1;
		color: rgb(71 75 87 / var(--tw-text-opacity));
	}
	.text-dustyMiller {
		--tw-text-opacity: 1;
		color: rgb(233 233 233 / var(--tw-text-opacity));
	}
	.text-lightAzalea {
		--tw-text-opacity: 1;
		color: rgb(245 212 210 / var(--tw-text-opacity));
	}
	.text-lightForest {
		--tw-text-opacity: 1;
		color: rgb(195 228 205 / var(--tw-text-opacity));
	}
	.text-lightLavender {
		--tw-text-opacity: 1;
		color: rgb(219 204 243 / var(--tw-text-opacity));
	}
	.text-lightSky {
		--tw-text-opacity: 1;
		color: rgb(220 220 220 / var(--tw-text-opacity));
	}
	.text-lightTrout {
		--tw-text-opacity: 1;
		color: rgb(208 219 255 / var(--tw-text-opacity));
	}
	.text-paleSunflower {
		--tw-text-opacity: 1;
		color: rgb(255 235 184 / var(--tw-text-opacity));
	}
	.text-white {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
	}
	.text-darkSky\/70 {
		color: rgba(70, 70, 70, 0.7);
	}
	.text-darkSky {
		--tw-text-opacity: 1;
		color: rgb(70 70 70 / var(--tw-text-opacity));
	}
	.font-semibold {
		font-weight: 600;
	}
	.gap-1 {
		gap: 0.25rem;
	}

	.leading-3 {
		line-height: 0.75rem;
	}
	.leading-4 {
		line-height: 1rem;
	}
	.leading-\[16px\] {
		line-height: 16px;
	}
	.leading-\[18px\] {
		line-height: 18px;
	}
	.leading-\[19px\] {
		line-height: 19px;
	}
	.leading-\[24px\] {
		line-height: 24px;
	}
	.leading-\[26px\] {
		line-height: 26px;
	}
	.leading-\[28px\] {
		line-height: 28px;
	}
	.leading-\[34px\] {
		line-height: 34px;
	}
	.leading-\[35px\] {
		line-height: 35px;
	}
	.tracking-\[-0\.2px\] {
		letter-spacing: -0.2px;
	}
	.tracking-\[-0\.3px\] {
		letter-spacing: -0.3px;
	}
	.tracking-\[-0\.5px\] {
		letter-spacing: -0.5px;
	}
	.tracking-\[-0\.6px\] {
		letter-spacing: -0.6px;
	}
	.tracking-\[-1\.63px\] {
		letter-spacing: -1.63px;
	}
	.tracking-\[-1\.8px\] {
		letter-spacing: -1.8px;
	}
	.tracking-\[-1px\] {
		letter-spacing: -1px;
	}
	.tracking-\[-2px\] {
		letter-spacing: -2px;
	}
	.tracking-wide {
		letter-spacing: 0.025em;
	}
	.\!text-\[14px\] {
		font-size: 14px !important;
	}
	.\!text-\[16px\] {
		font-size: 16px !important;
	}
	.text-\[1\.5rem\] {
		font-size: 1.5rem;
	}
	.text-\[13px\] {
		font-size: 13px;
	}
	.text-\[14px\] {
		font-size: 14px;
	}
	.text-\[15px\] {
		font-size: 15px;
	}
	.text-\[16px\] {
		font-size: 16px;
	}
	.text-\[17px\] {
		font-size: 17px;
	}
	.text-\[18px\] {
		font-size: 18px;
	}
	.text-\[26px\] {
		font-size: 26px;
	}
	.text-\[34px\] {
		font-size: 34px;
	}
	.text-\[36px\] {
		font-size: 36px;
	}
	.text-\[37px\] {
		font-size: 37px;
	}
	.text-\[40px\] {
		font-size: 40px;
	}
	.text-base {
		font-size: 0.9375rem;
	}
	.text-lg {
		font-size: 1.25rem;
	}
	.text-sm {
		font-size: 0.8125rem;
	}
	.text-xl {
		font-size: 1.5rem;
	}
	.text-xs {
		font-size: 0.7rem;
	}
	.font-bold {
		font-weight: 700;
	}
	.font-medium {
		font-weight: 500;
	}
	.font-normal {
		font-weight: 400;
	}
	.font-semibold {
		font-weight: 600;
	}
	.font-gintoNord {
		font-family: var(--font-ginto-nord);
	}
	.font-sans {
		font-family: var(--font-ginto);
	}
	.__variable_11c22e {
		--font-ginto-nord: '__gintoNord_11c22e', '__gintoNord_Fallback_11c22e', sans-serif;
	}
	.__variable_3dc94c {
		--font-ginto: '__ginto_3dc94c', '__ginto_Fallback_3dc94c', sans-serif;
	}
	.bg-paleSunflower {
		--tw-bg-opacity: 1;
		background-color: rgb(255 235 184 / var(--tw-bg-opacity));
	}
	.text-blackWood {
		--tw-text-opacity: 1;
		color: rgb(39 46 41 / var(--tw-text-opacity));
	}
	.text-paleSunflower {
		--tw-text-opacity: 1;
		color: rgb(255 235 184 / var(--tw-text-opacity));
	}
	.bg-blackWood {
		--tw-bg-opacity: 1;
		background-color: rgb(39 46 41 / var(--tw-bg-opacity));
	}

	@font-face {
		font-family: __ginto_3dc94c;
		src: url(/public/fonts/a1419c186c70e0ba-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: __ginto_3dc94c;
		src: url(/public/fonts/31238301f8443272-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 500;
		font-style: medium;
	}
	@font-face {
		font-family: __ginto_3dc94c;
		src: url(/public/fonts/869b1bce6403020a-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 700;
		font-style: bold;
	}
	@font-face {
		font-family: __ginto_Fallback_3dc94c;
		src: local('Arial');
		ascent-override: 76.64%;
		descent-override: 20.49%;
		line-gap-override: 0%;
		size-adjust: 102.96%;
	}
	.__className_3dc94c {
		font-family: __ginto_3dc94c, __ginto_Fallback_3dc94c, sans-serif;
	}
	.__variable_3dc94c {
		--font-ginto: '__ginto_3dc94c', '__ginto_Fallback_3dc94c', sans-serif;
	}
	@font-face {
		font-family: __gintoNord_11c22e;
		src: url(/public/fonts/36555fe2f4fa0600-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: __gintoNord_11c22e;
		src: url(/public/fonts/f39a3eef920c36ab-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 500;
		font-style: medium;
	}
	@font-face {
		font-family: __gintoNord_11c22e;
		src: url(/public/fonts/34ebcce2719507fb-s.p.woff) format('woff');
		font-display: swap;
		font-weight: 700;
		font-style: bold;
	}
	@font-face {
		font-family: __gintoNord_Fallback_11c22e;
		src: local('Arial');
		ascent-override: 63.89%;
		descent-override: 16.98%;
		line-gap-override: 0%;
		size-adjust: 123.65%;
	}
	.__className_11c22e {
		font-family: __gintoNord_11c22e, __gintoNord_Fallback_11c22e, sans-serif;
	}
	.__variable_11c22e {
		--font-ginto-nord: '__gintoNord_11c22e', '__gintoNord_Fallback_11c22e', sans-serif;
	}

	body {
		font-family: '__ginto_3dc94c', '__ginto_Fallback_3dc94c', sans-serif;
	}
	#headlessui-portal-root #logo-text {
		font-family: '__gintoNord_11c22e', '__gintoNord_Fallback_11c22e', sans-serif;
	}
	#headlessui-portal-root #logo-sans {
		font-family: '__ginto_3dc94c', '__ginto_Fallback_3dc94c', sans-serif;
	}
</style>
