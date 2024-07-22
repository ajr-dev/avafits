<script>
	import '../../main.css';
	import { onMount, onDestroy } from 'svelte';
	import viewport from '$lib/useViewportAction.js';

	let currentOffset = 0;

	onMount(() => {
		let lastScrollTop = 0;
		// let currentOffset = -80; // Initial offset
		let requestId;

		const layer0 = document.getElementById('layer-0');

		function smoothScroll() {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			const scrollDiff = st - lastScrollTop;

			if (scrollDiff > 0) {
				// Scrolling Down
				if (currentOffset < 0) {
					currentOffset += 0.1 * scrollDiff; // Adjust the rate of change as needed
				}
			} else {
				// Scrolling Up
				if (currentOffset > -80) {
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
</script>

<div class="h-60 md:h-80 lg:h-[30rem]">
	<div style="position: relative; overflow: hidden; width: 100%;" class="h-full">
		<div
			use:viewport
			on:enterViewport={() => (currentOffset = 0)}
			on:exitViewport={() => (currentOffset = 0)}
			id="layer-0"
			style="position: absolute; inset: -50px 0px; will-change: transform;"
			class="relative"
		>
			<img
				alt="Parallax Layer"
				loading="lazy"
				decoding="async"
				data-nimg="fill"
				class="h-full w-full object-cover lg:object-fit"
				style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
				src="/images/avapack_screenshots_3_1920x1080-1024x576.png"
			/>
		</div>
		<div
			style="position: absolute; inset: 0px; will-change: transform; transform: translateY(0px);"
		>
			<div class="absolute inset-0 flex items-center justify-center lg:justify-start">
				<div id="petalsContainer">
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
					<div class="mushroom" />
				</div>
				<h2
					class="header-lg hidden max-w-6xl px-4 text-left lg:block lg:px-24 xl:max-w-[86%] text-paleSunflower drop-shadow-[0_3px_7.0px_rgba(0,0,0,0.4)]"
				>
					Discover Your Fit
				</h2>
				<h1
					class="sm-header-one mt-8 max-w-sm px-4 text-center md:max-w-md lg:hidden text-paleSunflower drop-shadow-[0_3px_7.0px_rgba(0,0,0,0.7)]"
				>
					Discover Your Fit
				</h1>
			</div>
		</div>
	</div>
</div>
