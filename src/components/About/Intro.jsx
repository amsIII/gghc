import React from "react";

const Intro = () => {
	return (
		<section
			id="About"
			className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 md:py-32 bg-gray-50 "
		>
			<div className="md:flex md:gap-y-0 md:flex-row lg:-mx-8">
				<div className="w-full lg:w-1/2 lg:px-8">
					<h6 className="text-sm uppercase font-semibold tracking-widest text-gray-500">
						Our specialty
					</h6>
					<h2 className="text-3xl leading-tight font-bold mt-4">
						This is the start of your business success
					</h2>
					<p className="text-lg font-medium mt-4">
						Where industry insight and marketing expertise meet
					</p>
					<p className="mt-2 leading-relaxed">
						Donec convallis sollicitudin facilisis. Integer nisl ligula,
						accumsan non tincidunt ac, imperdiet in enim. Donec efficitur
						ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis
						sem a, faucibus mi.
					</p>
				</div>

				<div className="w-full px-4 mt-24 md:mt-0 lg:w-1/2 lg:px-8">
					<div className="flex flex-col md:flex-row">
						<div>
							<div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
								<svg
									className="fill-current text-blue-500"
									width="24"
									height="29"
									viewBox="0 0 24 29"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M21.3333 7H18.6667C18.6667 3.26667 15.7333 0.333336 12 0.333336C8.26667 0.333336 5.33333 3.26667 5.33333 7H2.66667C1.2 7 0 8.2 0 9.66667V25.6667C0 27.1333 1.2 28.3333 2.66667 28.3333H21.3333C22.8 28.3333 24 27.1333 24 25.6667V9.66667C24 8.2 22.8 7 21.3333 7ZM12 3C14.2667 3 16 4.73334 16 7H8C8 4.73334 9.73333 3 12 3ZM21.3333 25.6667H2.66667V9.66667H21.3333V25.6667ZM12 15C9.73333 15 8 13.2667 8 11H5.33333C5.33333 14.7333 8.26667 17.6667 12 17.6667C15.7333 17.6667 18.6667 14.7333 18.6667 11H16C16 13.2667 14.2667 15 12 15Z" />
								</svg>
							</div>
						</div>
						<div className="mt-4 md:mt-0 md:ml-8">
							<h4 className="text-xl font-bold">We Provide the Full Package</h4>
							<p className="mt-2 leading-relaxed">
								Our comprehensive services will enable you to attract clients
								with the most expensive of dental needs such that business will
								boom to levels never seen before.
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row mt-24 md:mt-12">
						<div>
							<div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
								<svg
									className="fill-current text-blue-500"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M26.6667 24V18.6667H22.6667V20H20V18.6667H12V20H9.33333V18.6667H5.33333V24H26.6667ZM8.44 10.6667L6.12 16H9.33333V14.6667H12V16H20V14.6667H22.6667V16H25.88L23.56 10.6667H8.44ZM12 6.66667V8H20V6.66667H12ZM29.12 16.8133C29.2533 17.1067 29.3333 17.4533 29.3333 17.88V24C29.3333 24.7067 29.0533 25.3333 28.5333 25.88C28 26.4133 27.4 26.6667 26.6667 26.6667H5.33333C4.6 26.6667 4 26.4133 3.46666 25.88C2.94666 25.3333 2.66666 24.7067 2.66666 24V17.88C2.66666 17.4533 2.74666 17.1067 2.88 16.8133L6 9.62667C6.45333 8.54667 7.26666 8 8.44 8H9.33333V6.66667C9.33333 5.93333 9.57333 5.33333 10.0933 4.78667C10.6133 4.26667 11.2533 4 12 4H20C20.7467 4 21.3867 4.26667 21.9067 4.78667C22.4267 5.33333 22.6667 5.93333 22.6667 6.66667V8H23.56C24.7333 8 25.5467 8.54667 26 9.62667L29.12 16.8133Z" />
								</svg>
							</div>
						</div>
						<div className="mt-4 md:mt-0 md:ml-8">
							<h4 className="text-xl font-bold">
								A Comprehensive Marketing Approach
							</h4>
							<p className="mt-2 leading-relaxed">
								Not only will you pull in more wonderful clients, you will also
								be reading this and thinking to yourself if you could rewrite
								this slightly better only to now realize that you're reading
								what is considered a textual easter egg. Congrats!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
