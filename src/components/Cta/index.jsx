const index = () => {
	return (
		<section class="relative bg-gradient-to-r from-blue-500 to-green-400  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<h2 class="text-xl font-bold text-white">
					Get in touch at (267) 813 4552
				</h2>
				<a
					href="mailto: angelmsiii@gmail.com?subject = Feedback&body = Message"
					class="px-8 py-4 mt-8 lg:mt-0 uppercase rounded inline-block font-bold lg:ml-8 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-blue-50"
				>
					Contact Us
				</a>
			</div>
		</section>
	);
};

export default index;
