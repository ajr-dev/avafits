<script>
	import '../../app.css';

	import { styles } from 'svelte-ux';
</script>

<a
	href="/outfits/test"
	target="_self"
	class="bg-paleSunflower rounded-lg p-3 flex flex-col items-center justify-between md:justify-start"
>
	<img src="/images/outfit1.png" width="70" height="70" class="object-scale-down" alt="outfit" />
	<p
		class="font-gintoNord font-bold text-blackWood text-center text-md sm:text-lg md:text-2xl leading-1 sm:leading-2 -tracking-[1.2px] mt-4 md:mt-10"
	>
		The Rebel
	</p>
	<div
		class="flex flex-col sm:flex-row items-center justify-center mx-auto py-1 rounded-lg !font-medium sm:mx-2 w-full"
	>
		<span class="text-darkSky/70 flex gap-1 w-full justify-center sm:w-auto"
			><p class="text-darkSky font-semibold">8000</p>
			coins</span
		><span class="text-darkSky/70 flex gap-1 w-full justify-center sm:w-auto"
			><p class="text-darkSky font-semibold">0</p>
			crowns</span
		>
	</div>
</a>

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
