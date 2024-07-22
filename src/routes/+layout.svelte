<script>
	import '../app.css';
	// import '../videocontrols.css';
	// import '../pipToggle.css';
	// import '../main.css';
	// import '../tippy.css';
	// import '../inline1.css';
	// import '../inline2.css';

	import { theme } from '$lib/stores/store';

	let openMobileMenu = false;
</script>

<div id="__next">
	<main class="jsx-1933661039 __variable_3dc94c __variable_11c22e font-sans">
		<div
			class="h-full min-h-screen w-full overflow-x-hidden {$theme == 'home'
				? 'bg-blackWood'
				: ''} {$theme == 'christmas'
				? 'bg-blackWood'
				: 'bg-gradient-to-b from-[#FFFFFF20] to-[#FFFFFF00]'} "
		>
			<div class="relative mx-auto container max-w-[1800px] pb-5 md:pb-10 xl:px-5">
				<!-- navigation -->
				<div
					class="fixed left-0 right-0 top-3 !z-50 mx-auto hidden h-[60px] justify-center rounded-full md:flex md:w-[698px] lg:top-6"
				>
					<div
						class="m-[1px] flex max-w-4xl items-center justify-between rounded-full p-2 pl-3 shadow-2xl transition-width duration-200 ease-in-out {$theme ==
						'home'
							? 'bg-paleSunflower text-blackWood'
							: ''} {$theme == 'christmas'
							? 'bg-gradient-to-b from-[#FFFFFF20] to-[#FFFFFF00] bg-opacity-60 backdrop-blur-2xl bg-darkTrout text-lightTrout'
							: ''} w-full"
					>
						{#if $theme == 'home'}
							<a class="flex items-center space-x-2 outline-none" href="/">
								<svg class="w-12" viewBox="0 0 44 29" xmlns="http://www.w3.org/2000/svg"
									><path
										d="M29.8889 9.06558C29.7188 9.23851 29.4385 9.12011 29.4385 8.87751C29.4385 8.65607 29.4385 8.41187 29.428 8.18133C29.1658 -1.39378 14.8334 -1.39378 14.5712 8.18133C14.5652 8.41187 14.5622 8.64393 14.5622 8.87751C14.5622 9.11174 14.2776 9.231 14.1118 9.06558C13.9491 8.90329 13.7804 8.73797 13.6146 8.58023C6.69848 1.99611 -3.42947 12.2082 3.10858 19.1564C3.26726 19.3242 3.42845 19.4911 3.59215 19.6569C11.4808 27.5993 21.9978 27.6 21.9996 27.6C21.9996 27.6 21.9997 27.6 21.9996 27.6C22.0014 27.6 32.5199 27.5993 40.4086 19.6569C40.5733 19.4921 40.7345 19.3252 40.8921 19.1564C47.4302 12.2007 37.2962 1.99611 30.3861 8.58023C30.2189 8.73797 30.0486 8.90026 29.8889 9.06558Z"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1.65481"
										stroke-miterlimit="10"
									/><path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M28.0929 16.2621C27.8709 16.2621 27.7942 16.5849 27.9357 16.7559C28.1863 17.0586 28.337 17.448 28.337 17.8729C28.337 18.837 27.5607 19.6186 26.6031 19.6186C25.6454 19.6186 24.8691 18.837 24.8691 17.8729C24.8691 17.8213 24.8023 17.7957 24.7721 17.8375C24.4987 18.2156 24.3141 18.6401 24.2383 19.0859C24.1956 19.3369 23.993 19.5447 23.7384 19.5447H23.5977C23.2653 19.5447 22.9911 19.2734 23.0402 18.9447C23.3764 16.6923 25.5814 15.0586 28.0929 15.0586C30.6044 15.0586 32.8094 16.6923 33.1457 18.9447C33.1947 19.2734 32.9206 19.5447 32.5882 19.5447C32.2559 19.5447 31.9927 19.2721 31.9205 18.9477C31.5917 17.4712 30.0678 16.2621 28.0929 16.2621ZM12.6953 17.8729C12.6953 17.8049 12.6077 17.7684 12.5665 17.8225C12.2742 18.2065 12.0751 18.6414 11.9908 19.0998C11.9411 19.3705 11.7224 19.5955 11.4471 19.5955H11.3437C11.0114 19.5955 10.7372 19.3242 10.7862 18.9955C11.1223 16.7418 13.3275 15.1094 15.839 15.1094C18.3505 15.1094 20.5557 16.7418 20.8918 18.9955C20.9408 19.3242 20.6666 19.5955 20.3343 19.5955C20.002 19.5955 19.7388 19.3229 19.6666 18.9985C19.3381 17.5211 17.8142 16.3129 15.839 16.3129C15.6594 16.3129 15.5936 16.5669 15.7139 16.7004C15.9931 17.0102 16.1632 17.4216 16.1632 17.8729C16.1632 18.837 15.3869 19.6186 14.4292 19.6186C13.4716 19.6186 12.6953 18.837 12.6953 17.8729ZM24.8181 21.8928C24.5264 21.7334 24.1634 21.8477 23.9286 22.0828C23.4758 22.536 22.7894 22.8457 21.995 22.8457C21.1985 22.8457 20.5129 22.5391 20.0611 22.0856C19.8265 21.8502 19.4641 21.7345 19.1719 21.8928C18.8797 22.0511 18.7677 22.4207 18.9771 22.6788C19.6625 23.5234 20.7733 24.0492 21.995 24.0492C23.2174 24.0492 24.3257 23.5179 25.0102 22.6795C25.2204 22.422 25.1097 22.0521 24.8181 21.8928Z"
										fill="#FFEBB8"
									/>
								</svg>
								<!-- <img
								alt="logo"
								height="50px"
								width="50px"
								draggable="false"
								src="/images/logo.png"
								class="cd-pause animate-spin-slow"
							/> -->
								<div
									id="logo-text"
									class="flex-col justify-center space-y-1 font-gintoNord text-[15px] font-bold uppercase tracking-wide lg:text-base flex duration-700"
								>
									<h1 class="leading-3">Ava</h1>
									<h1 class="leading-3">Fits</h1>
								</div>
							</a>
						{/if}
						{#if $theme == 'christmas'}
							<a class="flex items-center space-x-2 outline-none" href="/"
								><svg class="w-12" viewBox="0 0 44 29" xmlns="http://www.w3.org/2000/svg"
									><path
										d="M29.8889 9.06558C29.7188 9.23851 29.4385 9.12011 29.4385 8.87751C29.4385 8.65607 29.4385 8.41187 29.428 8.18133C29.1658 -1.39378 14.8334 -1.39378 14.5712 8.18133C14.5652 8.41187 14.5622 8.64393 14.5622 8.87751C14.5622 9.11174 14.2776 9.231 14.1118 9.06558C13.9491 8.90329 13.7804 8.73797 13.6146 8.58023C6.69848 1.99611 -3.42947 12.2082 3.10858 19.1564C3.26726 19.3242 3.42845 19.4911 3.59215 19.6569C11.4808 27.5993 21.9978 27.6 21.9996 27.6C21.9996 27.6 21.9997 27.6 21.9996 27.6C22.0014 27.6 32.5199 27.5993 40.4086 19.6569C40.5733 19.4921 40.7345 19.3252 40.8921 19.1564C47.4302 12.2007 37.2962 1.99611 30.3861 8.58023C30.2189 8.73797 30.0486 8.90026 29.8889 9.06558Z"
										fill="currentColor"
										stroke="currentColor"
										stroke-width="1.65481"
										stroke-miterlimit="10"
									/><path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M28.0929 16.2621C27.8709 16.2621 27.7942 16.5849 27.9357 16.7559C28.1863 17.0586 28.337 17.448 28.337 17.8729C28.337 18.837 27.5607 19.6186 26.6031 19.6186C25.6454 19.6186 24.8691 18.837 24.8691 17.8729C24.8691 17.8213 24.8023 17.7957 24.7721 17.8375C24.4987 18.2156 24.3141 18.6401 24.2383 19.0859C24.1956 19.3369 23.993 19.5447 23.7384 19.5447H23.5977C23.2653 19.5447 22.9911 19.2734 23.0402 18.9447C23.3764 16.6923 25.5814 15.0586 28.0929 15.0586C30.6044 15.0586 32.8094 16.6923 33.1457 18.9447C33.1947 19.2734 32.9206 19.5447 32.5882 19.5447C32.2559 19.5447 31.9927 19.2721 31.9205 18.9477C31.5917 17.4712 30.0678 16.2621 28.0929 16.2621ZM12.6953 17.8729C12.6953 17.8049 12.6077 17.7684 12.5665 17.8225C12.2742 18.2065 12.0751 18.6414 11.9908 19.0998C11.9411 19.3705 11.7224 19.5955 11.4471 19.5955H11.3437C11.0114 19.5955 10.7372 19.3242 10.7862 18.9955C11.1223 16.7418 13.3275 15.1094 15.839 15.1094C18.3505 15.1094 20.5557 16.7418 20.8918 18.9955C20.9408 19.3242 20.6666 19.5955 20.3343 19.5955C20.002 19.5955 19.7388 19.3229 19.6666 18.9985C19.3381 17.5211 17.8142 16.3129 15.839 16.3129C15.6594 16.3129 15.5936 16.5669 15.7139 16.7004C15.9931 17.0102 16.1632 17.4216 16.1632 17.8729C16.1632 18.837 15.3869 19.6186 14.4292 19.6186C13.4716 19.6186 12.6953 18.837 12.6953 17.8729ZM24.8181 21.8928C24.5264 21.7334 24.1634 21.8477 23.9286 22.0828C23.4758 22.536 22.7894 22.8457 21.995 22.8457C21.1985 22.8457 20.5129 22.5391 20.0611 22.0856C19.8265 21.8502 19.4641 21.7345 19.1719 21.8928C18.8797 22.0511 18.7677 22.4207 18.9771 22.6788C19.6625 23.5234 20.7733 24.0492 21.995 24.0492C23.2174 24.0492 24.3257 23.5179 25.0102 22.6795C25.2204 22.422 25.1097 22.0521 24.8181 21.8928Z"
										fill="#474B57"
									/></svg
								>
								<div
									id="logo-text"
									class="flex-col justify-center space-y-1 font-gintoNord text-[15px] font-bold uppercase tracking-wide lg:text-base flex duration-700"
								>
									<h1 class="leading-3">Ava</h1>
									<h1 class="leading-3">Fits</h1>
								</div></a
							>
						{/if}
						<span class="flex items-center transition-all ease-in-out hidden duration-100">
							<button class="hidden md:block">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 23 16"
									fill="none"
									class="ml-4 h-6 w-6 flex-none"
									><path
										fill="currentColor"
										stroke="currentColor"
										stroke-width="0.3"
										d="M1.004 1.425A1.15 1.15 0 0 0 2 3.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 13.425A1.15 1.15 0 0 0 2 15.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 7.425A1.15 1.15 0 0 0 2 9.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575Z"
									/></svg
								></button
							><button class="md:hidden"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 23 16"
									fill="none"
									class="mr-3 h-6 w-6 flex-none"
									><path
										fill="currentColor"
										stroke="currentColor"
										stroke-width="0.3"
										d="M1.004 1.425A1.15 1.15 0 0 0 2 3.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 13.425A1.15 1.15 0 0 0 2 15.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 7.425A1.15 1.15 0 0 0 2 9.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575Z"
									/></svg
								></button
							></span
						><span
							class="hidden transition-opacity ease-in-out md:inline-block opacity-100 duration-700"
							><div class="hidden items-center justify-around space-x-6 text-sm md:flex">
								<a class="font-bold uppercase hover:opacity-70" href="/discord">Community</a><a
									class="font-bold uppercase hover:opacity-70"
									href="/stylists">Stylists</a
								><a
									class="flex items-center space-x-1 font-bold uppercase hover:opacity-70"
									href="/outfits"><span>Fits</span></a
								><a class="font-bold uppercase hover:opacity-70" href="/finder">Finder</a>
							</div></span
						><span
							class="hidden transition-opacity ease-in-out md:inline-block opacity-100 duration-700"
							><a target="_self" href="/create"
								><button
									style="transform: scale(1);"
									class="h-[40px] rounded-full px-5 py-3 text-sm font-bold uppercase leading-[16px] md:py-2.5 {$theme ==
									'home'
										? 'bg-blackWood text-paleSunflower'
										: ''} {$theme == 'christmas' ? 'bg-lightTrout text-darkTrout' : ''} "
									>Create Now</button
								></a
							></span
						>
					</div>
				</div>
				<div
					class="fixed left-0 right-0 top-3 z-20 mx-auto flex h-[60px] justify-center rounded-full md:hidden"
				>
					<div
						class="m-[1px] flex w-[120px] max-w-4xl items-center justify-between rounded-full p-2 pl-3 shadow-2xl transition-width duration-200 ease-in-out bg-paleSunflower text-blackWood"
					>
						<a class="flex items-center space-x-2 outline-none" href="/">
							<svg class="w-12" viewBox="0 0 44 29" xmlns="http://www.w3.org/2000/svg"
								><path
									d="M29.8889 9.06558C29.7188 9.23851 29.4385 9.12011 29.4385 8.87751C29.4385 8.65607 29.4385 8.41187 29.428 8.18133C29.1658 -1.39378 14.8334 -1.39378 14.5712 8.18133C14.5652 8.41187 14.5622 8.64393 14.5622 8.87751C14.5622 9.11174 14.2776 9.231 14.1118 9.06558C13.9491 8.90329 13.7804 8.73797 13.6146 8.58023C6.69848 1.99611 -3.42947 12.2082 3.10858 19.1564C3.26726 19.3242 3.42845 19.4911 3.59215 19.6569C11.4808 27.5993 21.9978 27.6 21.9996 27.6C21.9996 27.6 21.9997 27.6 21.9996 27.6C22.0014 27.6 32.5199 27.5993 40.4086 19.6569C40.5733 19.4921 40.7345 19.3252 40.8921 19.1564C47.4302 12.2007 37.2962 1.99611 30.3861 8.58023C30.2189 8.73797 30.0486 8.90026 29.8889 9.06558Z"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="1.65481"
									stroke-miterlimit="10"
								/><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M28.0929 16.2621C27.8709 16.2621 27.7942 16.5849 27.9357 16.7559C28.1863 17.0586 28.337 17.448 28.337 17.8729C28.337 18.837 27.5607 19.6186 26.6031 19.6186C25.6454 19.6186 24.8691 18.837 24.8691 17.8729C24.8691 17.8213 24.8023 17.7957 24.7721 17.8375C24.4987 18.2156 24.3141 18.6401 24.2383 19.0859C24.1956 19.3369 23.993 19.5447 23.7384 19.5447H23.5977C23.2653 19.5447 22.9911 19.2734 23.0402 18.9447C23.3764 16.6923 25.5814 15.0586 28.0929 15.0586C30.6044 15.0586 32.8094 16.6923 33.1457 18.9447C33.1947 19.2734 32.9206 19.5447 32.5882 19.5447C32.2559 19.5447 31.9927 19.2721 31.9205 18.9477C31.5917 17.4712 30.0678 16.2621 28.0929 16.2621ZM12.6953 17.8729C12.6953 17.8049 12.6077 17.7684 12.5665 17.8225C12.2742 18.2065 12.0751 18.6414 11.9908 19.0998C11.9411 19.3705 11.7224 19.5955 11.4471 19.5955H11.3437C11.0114 19.5955 10.7372 19.3242 10.7862 18.9955C11.1223 16.7418 13.3275 15.1094 15.839 15.1094C18.3505 15.1094 20.5557 16.7418 20.8918 18.9955C20.9408 19.3242 20.6666 19.5955 20.3343 19.5955C20.002 19.5955 19.7388 19.3229 19.6666 18.9985C19.3381 17.5211 17.8142 16.3129 15.839 16.3129C15.6594 16.3129 15.5936 16.5669 15.7139 16.7004C15.9931 17.0102 16.1632 17.4216 16.1632 17.8729C16.1632 18.837 15.3869 19.6186 14.4292 19.6186C13.4716 19.6186 12.6953 18.837 12.6953 17.8729ZM24.8181 21.8928C24.5264 21.7334 24.1634 21.8477 23.9286 22.0828C23.4758 22.536 22.7894 22.8457 21.995 22.8457C21.1985 22.8457 20.5129 22.5391 20.0611 22.0856C19.8265 21.8502 19.4641 21.7345 19.1719 21.8928C18.8797 22.0511 18.7677 22.4207 18.9771 22.6788C19.6625 23.5234 20.7733 24.0492 21.995 24.0492C23.2174 24.0492 24.3257 23.5179 25.0102 22.6795C25.2204 22.422 25.1097 22.0521 24.8181 21.8928Z"
									fill="#FFEBB8"
								/>
							</svg>
							<div
								id="logo-text"
								class="flex-col justify-center space-y-1 font-gintoNord text-[15px] font-bold uppercase tracking-wide lg:text-base hidden duration-100"
							>
								<h1 class="leading-3">Ava</h1>
								<h1 class="leading-3">Fits</h1>
							</div></a
						><span class="flex items-center transition-all ease-in-out"
							><button on:click={() => (openMobileMenu = true)} class="md:hidden"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 23 16"
									fill="none"
									class="mr-3 h-6 w-6 flex-none"
									><path
										fill="currentColor"
										stroke="currentColor"
										stroke-width="0.3"
										d="M1.004 1.425A1.15 1.15 0 0 0 2 3.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 13.425A1.15 1.15 0 0 0 2 15.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575ZM1.004 7.425A1.15 1.15 0 0 0 2 9.15h19.334a1.15 1.15 0 0 0 .996-1.725 1.15 1.15 0 0 0-.996-.575H2c-.41 0-.79.22-.996.575Z"
									/></svg
								></button
							></span
						>
					</div>
				</div>
				<div id="headlessui-portal-root" class={openMobileMenu == true ? '' : 'hidden'}>
					<div data-headlessui-portal="">
						<button
							type="button"
							data-headlessui-focus-guard="true"
							aria-hidden="true"
							style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
						/>
						<div>
							<div
								class="relative z-50 md:hidden"
								id="headlessui-dialog-:rc:"
								role="dialog"
								aria-modal="true"
								data-headlessui-state="open"
								aria-labelledby="headlessui-dialog-title-:re:"
							>
								<div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-2xl opacity-100" />
								<div class="fixed inset-0 overflow-y-auto" id="logo-text">
									<div class="flex min-h-full justify-center p-3 text-center">
										<div
											class="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-paleSunflower text-blackWood opacity-100 scale-100"
											id="headlessui-dialog-panel-:rd:"
											data-headlessui-state="open"
										>
											<div
												class="flex items-center justify-between"
												id="headlessui-dialog-title-:re:"
												data-headlessui-state="open"
											>
												<a class="flex items-center space-x-2 outline-none text-blackWood" href="/"
													><svg class="w-12" viewBox="0 0 44 29" xmlns="http://www.w3.org/2000/svg"
														><path
															d="M29.8889 9.06558C29.7188 9.23851 29.4385 9.12011 29.4385 8.87751C29.4385 8.65607 29.4385 8.41187 29.428 8.18133C29.1658 -1.39378 14.8334 -1.39378 14.5712 8.18133C14.5652 8.41187 14.5622 8.64393 14.5622 8.87751C14.5622 9.11174 14.2776 9.231 14.1118 9.06558C13.9491 8.90329 13.7804 8.73797 13.6146 8.58023C6.69848 1.99611 -3.42947 12.2082 3.10858 19.1564C3.26726 19.3242 3.42845 19.4911 3.59215 19.6569C11.4808 27.5993 21.9978 27.6 21.9996 27.6C21.9996 27.6 21.9997 27.6 21.9996 27.6C22.0014 27.6 32.5199 27.5993 40.4086 19.6569C40.5733 19.4921 40.7345 19.3252 40.8921 19.1564C47.4302 12.2007 37.2962 1.99611 30.3861 8.58023C30.2189 8.73797 30.0486 8.90026 29.8889 9.06558Z"
															fill="currentColor"
															stroke="currentColor"
															stroke-width="1.65481"
															stroke-miterlimit="10"
														/><path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M28.0929 16.2621C27.8709 16.2621 27.7942 16.5849 27.9357 16.7559C28.1863 17.0586 28.337 17.448 28.337 17.8729C28.337 18.837 27.5607 19.6186 26.6031 19.6186C25.6454 19.6186 24.8691 18.837 24.8691 17.8729C24.8691 17.8213 24.8023 17.7957 24.7721 17.8375C24.4987 18.2156 24.3141 18.6401 24.2383 19.0859C24.1956 19.3369 23.993 19.5447 23.7384 19.5447H23.5977C23.2653 19.5447 22.9911 19.2734 23.0402 18.9447C23.3764 16.6923 25.5814 15.0586 28.0929 15.0586C30.6044 15.0586 32.8094 16.6923 33.1457 18.9447C33.1947 19.2734 32.9206 19.5447 32.5882 19.5447C32.2559 19.5447 31.9927 19.2721 31.9205 18.9477C31.5917 17.4712 30.0678 16.2621 28.0929 16.2621ZM12.6953 17.8729C12.6953 17.8049 12.6077 17.7684 12.5665 17.8225C12.2742 18.2065 12.0751 18.6414 11.9908 19.0998C11.9411 19.3705 11.7224 19.5955 11.4471 19.5955H11.3437C11.0114 19.5955 10.7372 19.3242 10.7862 18.9955C11.1223 16.7418 13.3275 15.1094 15.839 15.1094C18.3505 15.1094 20.5557 16.7418 20.8918 18.9955C20.9408 19.3242 20.6666 19.5955 20.3343 19.5955C20.002 19.5955 19.7388 19.3229 19.6666 18.9985C19.3381 17.5211 17.8142 16.3129 15.839 16.3129C15.6594 16.3129 15.5936 16.5669 15.7139 16.7004C15.9931 17.0102 16.1632 17.4216 16.1632 17.8729C16.1632 18.837 15.3869 19.6186 14.4292 19.6186C13.4716 19.6186 12.6953 18.837 12.6953 17.8729ZM24.8181 21.8928C24.5264 21.7334 24.1634 21.8477 23.9286 22.0828C23.4758 22.536 22.7894 22.8457 21.995 22.8457C21.1985 22.8457 20.5129 22.5391 20.0611 22.0856C19.8265 21.8502 19.4641 21.7345 19.1719 21.8928C18.8797 22.0511 18.7677 22.4207 18.9771 22.6788C19.6625 23.5234 20.7733 24.0492 21.995 24.0492C23.2174 24.0492 24.3257 23.5179 25.0102 22.6795C25.2204 22.422 25.1097 22.0521 24.8181 21.8928Z"
															fill="#FFEBB8"
														/></svg
													>
													<div
														id="logo-text"
														class="flex-col justify-center space-y-1 font-gintoNord text-[15px] font-bold uppercase tracking-wide lg:text-base flex duration-700"
													>
														<h1 class="leading-3">Ava</h1>
														<h1 class="leading-3">Fits</h1>
													</div></a
												><button on:click={() => (openMobileMenu = false)} class="rounded-full"
													><svg
														class="h-8 w-8 rounded-full bg-opacity-70 bg-blackWood"
														viewBox="0 0 34 34"
														xmlns="http://www.w3.org/2000/svg"
														><path
															d="M16.9961 19.3322L11.4456 24.8826C10.8013 25.527 9.75654 25.527 9.11218 24.8826C8.46782 24.2382 8.46781 23.1935 9.11218 22.5492L14.6626 16.9987L9.11218 11.4483C8.46781 10.8039 8.46782 9.75923 9.11218 9.11486C9.75655 8.4705 10.8013 8.4705 11.4456 9.11486L16.9961 14.6653L22.5472 9.11413C23.1916 8.46977 24.2363 8.46977 24.8807 9.11413C25.525 9.7585 25.525 10.8032 24.8807 11.4476L19.3295 16.9987L24.8807 22.5499C25.525 23.1943 25.525 24.239 24.8807 24.8833C24.2363 25.5277 23.1916 25.5277 22.5472 24.8833L16.9961 19.3322Z"
															fill="currentColor"
															class="text-paleSunflower"
														/></svg
													></button
												>
											</div>
											<div class="flex h-full flex-1 flex-col justify-end">
												<ul
													class="mt-2 space-y-5 py-12 font-gintoNord text-[34px] font-bold leading-[34px] tracking-[-1px] text-blackWood text-blackWood"
												>
													<p class="text-[17px] font-bold uppercase">Menu</p>
													<li class=" text-[37px] font-bold tracking-[-1.8px]">
														<a href="/discord">Community</a>
													</li>
													<li class="text-[37px] font-bold tracking-[-1.8px]">
														<a href="/stylists">Stylists</a>
													</li>
													<li
														class="flex items-center justify-between text-[37px] font-bold tracking-[-1.8px]"
													>
														<a href="/outifts"><span id="logo-text">Fits</span></a>
													</li>
													<li class="text-[37px] font-bold tracking-[-1.8px]">
														<a href="/finder">Finder</a>
													</li>
												</ul>
												<a target="_blank" href="https://claim.lens.xyz"
													><button
														id="logo-sans"
														class="mb-6 w-full rounded-full px-6 py-7 text-[26px] font-bold uppercase leading-[16px] lg:text-base bg-blackWood text-paleSunflower"
														>Create Now</button
													></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button
							type="button"
							data-headlessui-focus-guard="true"
							aria-hidden="true"
							style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
						/>
					</div>
				</div>
				<!-- body -->
				<slot />
				<!-- footer -->
				<div
					class="relative p-5 xl:m-0 bg-[#ffffff14] m-5 rounded-3xl lg:px-[36px] lg:py-[26px] xl:mt-6"
				>
					<div class="mx-auto grid w-full max-w-7xl gap-16 md:grid-cols-3">
						<div class="col-span-1 space-y-6 text-dustyMiller">
							<div class="space-y-[16px]">
								<a target="_blank" href="">@avafits</a>
								<h2
									class="font-gintoNord text-[36px] font-medium leading-[35px] tracking-[-2px] lg:text-[58px] lg:leading-[56px] lg:tracking-[-2.5px]"
								>
									Ava<br />Fits
								</h2>
							</div>
							<div class="space-y-[12px] lg:w-2/3 lg:pt-10">
								<span class="opacity-60">Partners</span>
								<div class="flex flex-wrap items-center gap-2">
									<!-- <a
										target="_blank"
										title="Polygon"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://polygon.technology/"
										><img
											src="https://images.prismic.io/lensv2/0210c5ad-3c27-440b-904e-14af525e7168_polygon%402x.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Polygon"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Coinbase"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.coinbase.com"
										><img
											src="https://images.prismic.io/lensv2/9a70b56e-759f-4fb0-b863-3172ff98a3f3_coinbase.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Coinbase"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Bonfire"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.bonfire.xyz/"
										><img
											src="https://images.prismic.io/lensv2/d1faa3e4-f1d1-4b87-80dd-f9cf8f359d5a_bonfire.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Bonfire"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Snapshot"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://snapshot.org/"
										><img
											src="https://images.prismic.io/lensv2/5010924c-2404-43c4-b730-25dd64a39eef_snapshot.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Snapshot"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Opensea"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://opensea.io/"
										><img
											src="https://images.prismic.io/lensv2/eb8d99f8-6042-4dd9-b450-30ccd0d42737_opensea.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Opensea"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Lit Protocol"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://litprotocol.com/"
										><img
											src="https://images.prismic.io/lensv2/d429df1d-24b0-43f2-8011-8da52ce693cd_litprotocol.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Lit Protocol"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Zerion"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://zerion.io/"
										><img
											src="https://images.prismic.io/lensv2/4f5c92cf-faaa-4704-990e-504c77ce5b7d_zerion.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Zerion"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Livepeer"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://livepeer.org/"
										><img
											src="https://images.prismic.io/lensv2/cea9e3aa-95c5-464d-bed5-7cd55849cba0_livepeer.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Livepeer"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="XMTP"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://xmtp.org/"
										><img
											src="https://images.prismic.io/lensv2/e4811f83-6ec3-4461-bb82-ebb5ee86ef2b_xmtp.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="XMTP"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="POAP"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://poap.xyz/"
										><img
											src="https://images.prismic.io/lensv2/abc89873-3c86-498a-b33c-99936f44bfe7_poap.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="POAP"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Coinvise"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.coinvise.co/"
										><img
											src="https://images.prismic.io/lensv2/19da6d6a-772c-4bac-b5e1-dd85f3ff07ea_coinvise.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Coinvise"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Bello"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.bello.lol/"
										><img
											src="https://images.prismic.io/lensv2/db4ea90f-b776-4656-91b5-320ab14a255a_bello.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Bello"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Guild"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://guild.xyz"
										><img
											src="https://images.prismic.io/lensv2/ca95d423-221d-40b8-a666-e0632212336a_guild.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Guild"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Airstack"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.airstack.xyz/"
										><img
											src="https://images.prismic.io/lensv2/9c5c7959-9249-41f2-9c78-5013527c5677_airstack.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Airstack"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Gallery"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://gallery.so/"
										><img
											src="https://images.prismic.io/lensv2/854ad388-78a4-42a3-a4e6-04741c92b11b_galleryso.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Gallery"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Feature"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.feature.fm"
										><img
											src="https://images.prismic.io/lensv2/a036da85-8d6f-4960-bab4-4dbc54303e54_featurefm.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Feature"
											draggable="false"
										/></a
									><a
										target="_blank"
										title="Charmverse"
										class="rounded-[4px] bg-[#ffffff08] hover:bg-inherit"
										href="https://www.charmverse.io/"
										><img
											src="https://images.prismic.io/lensv2/80178abe-b249-47c2-a60a-c58adee7e466_charmverse.png?auto=compress,format"
											class="h-[34px] w-[34px]"
											alt="Charmverse"
											draggable="false"
										/></a
									> -->
									<a>Discuss partnership at akio@avafits.io</a>
								</div>
							</div>
						</div>
						<div class="col-span-2 flex w-full flex-wrap justify-between">
							<div class="max-w-lg space-y-4">
								<span class="right-8 top-7 whitespace-nowrap xl:relative xl:right-0 xl:top-0"
									>© 2023</span
								>
								<h2
									class="font-gintoNord text-[36px] font-medium leading-[35px] tracking-[-1.63px] lg:text-[58px] lg:leading-[56px] lg:tracking-[-2.5px] text-paleSunflower"
								>
									Your last terrible outfit.
								</h2>
								<div class="grid grid-cols-2 lg:pt-10">
									<div>
										<span class="opacity-60">Learn More</span>
										<ul class="text-dustyMiller mt-1 lg:mt-0">
											<!-- <li class="lg:pt-2">
												<a target="_blank" class="t2 text-lg" href="https://docs.lens.xyz"
													><span class="hover:text-[#FFEBB8]">Dev Docs</span></a
												>
											</li>
											<li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://github.com/lens-protocol/brand-kit"
													><span class="hover:text-[#FFEBB8]">Brand Kit</span></a
												>
											</li> -->
											<li class="lg:pt-2">
												<a target="_blank" class="t2 text-lg" href="">
													<span class="hover:text-[#FFEBB8]">Integrations</span></a
												>
											</li>
											<!-- <li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://aave.notion.site/Grants-Application-eec79f59fbad4e34b51acc3c936073a2"
													><span class="hover:text-[#FFEBB8]">Grants</span></a
												>
											</li>
											<li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://github.com/lens-protocol/core"
													><span class="hover:text-[#FFEBB8]">GitHub</span></a
												>
											</li> -->
										</ul>
									</div>
									<div>
										<span class="opacity-60">Follow us</span>
										<ul class="text-dustyMiller mt-1 lg:mt-0">
											<!-- <li class="lg:pt-2">
												<a target="_blank" class="t2 text-lg" href="https://hey.xyz/u/lensprotocol"
													><span class="hover:text-[#FFEBB8]">Hey</span></a
												>
											</li>
											<li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://mirror.xyz/lensprotocol.eth"
													><span class="hover:text-[#FFEBB8]">Mirror</span></a
												>
											</li> -->
											<li class="lg:pt-2">
												<a target="_blank" class="t2 text-lg" href="">
													<span class="hover:text-[#FFEBB8]">Instagram</span></a
												>
											</li>
											<li class="lg:pt-2">
												<a target="_blank" class="t2 text-lg" href=""
													><span class="hover:text-[#FFEBB8]">Discord</span></a
												>
											</li>
											<!-- <li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://twitter.com/lensprotocol"
													><span class="hover:text-[#FFEBB8]">Twitter</span></a
												>
											</li>
											<li class="lg:pt-2">
												<a
													target="_blank"
													class="t2 text-lg"
													href="https://www.threads.net/@lensprotocol.eth"
													><span class="hover:text-[#FFEBB8]">Threads</span></a
												>
											</li> -->
										</ul>
									</div>
								</div>
							</div>
							<div class="ml-auto flex flex-col items-end justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 124 80"
									fill="none"
									class="text-paleSunflower w-32"
									><path
										fill="currentColor"
										stroke="currentColor"
										stroke-miterlimit="10"
										stroke-width="4.641"
										d="M84.228 25.62a.732.732 0 0 1-1.263-.527c0-.622 0-1.306-.03-1.953-.735-26.853-40.93-26.853-41.665 0a74.725 74.725 0 0 0-.026 1.953c0 .657-.798.99-1.263.527-.456-.455-.93-.919-1.394-1.361C19.19 5.794-9.213 34.434 9.123 53.919c.445.472.897.94 1.356 1.405C32.602 77.597 62.097 77.6 62.103 77.6c.005 0 29.504-.002 51.628-22.276.462-.463.914-.93 1.356-1.404 18.336-19.508-10.085-48.126-29.464-29.661a42.22 42.22 0 0 0-1.395 1.361Z"
									/><path
										fill="#383F3A"
										fill-rule="evenodd"
										d="M79.191 45.803c-.622 0-.838.905-.44 1.384a4.896 4.896 0 0 1 1.125 3.133c0 2.704-2.177 4.896-4.863 4.896-2.686 0-4.863-2.192-4.863-4.896 0-.145-.187-.217-.272-.1-.767 1.061-1.285 2.252-1.497 3.502-.12.704-.689 1.287-1.403 1.287h-.394c-.932 0-1.701-.76-1.564-1.682.944-6.318 7.127-10.9 14.171-10.9 7.043 0 13.227 4.582 14.17 10.9.138.921-.63 1.682-1.563 1.682-.932 0-1.67-.764-1.873-1.674-.922-4.141-5.195-7.532-10.734-7.532ZM36.009 50.32c0-.19-.246-.293-.361-.141-.82 1.077-1.38 2.296-1.616 3.582-.14.76-.753 1.39-1.525 1.39h-.29c-.931 0-1.7-.76-1.563-1.682.943-6.32 7.127-10.899 14.17-10.899 7.044 0 13.229 4.578 14.171 10.9.138.92-.631 1.682-1.563 1.682-.932 0-1.67-.765-1.873-1.675-.921-4.143-5.195-7.531-10.734-7.531-.504 0-.688.711-.351 1.085a4.897 4.897 0 0 1 1.26 3.289c0 2.704-2.177 4.896-4.863 4.896-2.685 0-4.862-2.192-4.862-4.896Zm33.998 11.274c-.818-.447-1.836-.127-2.495.533-1.27 1.27-3.195 2.14-5.423 2.14-2.233 0-4.156-.86-5.423-2.132-.658-.66-1.675-.985-2.494-.541-.82.444-1.134 1.48-.546 2.204 1.922 2.37 5.037 3.843 8.463 3.843 3.428 0 6.537-1.49 8.457-3.84.589-.723.279-1.76-.54-2.207Z"
										clip-rule="evenodd"
									/></svg
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
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
