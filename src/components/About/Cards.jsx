import React from "react";
import { AboutCardsData } from "../../data/Herodata";

const cards = () => {
	return (
		<section className="relative bg-gray-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-16 md:pt-8 pb-40">
			<div className="text-center font-bold">
				<h1 className="text-4xl">
					<span className="text-gray-900 tracking-wide">
						Our Marketing Approach
					</span>
				</h1>
				<p className="pt-6 text-xl text-gray-400 font-normal w-full px-4 md:px-8 md:w-full">
					Tailored to help you succeed in a competitive market.
				</p>
			</div>

			<div className="flex flex-col items-center justify-center md:flex-row mt-16 text-center md:-mx-4 flex-wrap gap-8">
				{AboutCardsData.map(({ id, svgPath, title, info, href }) => {
					{
						/* console.log(AboutCardsData); */
					}
					return (
						<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
							<div
								key={id}
								className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100"
							>
								<svg
									className="fill-current text-green-500"
									width="24"
									height="22"
									viewBox="0 0 24 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d={svgPath} />
								</svg>
							</div>
							<h4 className="text-xl font-bold">{title}</h4>
							<p className="mt-1">{info}</p>
							<a
								href={href}
								className="block mt-4 text-blue-500 hover:underline"
							>
								Read More
							</a>
						</div>
					);
				})}
			</div>

			{/* <div className="flex flex-col items-center justify-center md:flex-row mt-16 text-center md:-mx-4 flex-wrap gap-8">
				<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="24"
							height="22"
							viewBox="0 0 24 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V18.6667C24 19.3739 23.719 20.0522 23.219 20.5523C22.7189 21.0524 22.0406 21.3333 21.3333 21.3333H2.66667C1.95942 21.3333 1.28115 21.0524 0.781048 20.5523C0.280951 20.0522 0 19.3739 0 18.6667V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM21.3333 18.6667V5.33333H2.66667V18.6667H21.3333Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">Effective Websites</h4>
					<p className="mt-1">
						We don't just create websites (like everyone else does). We create
						websites that work.
					</p>
					<a
						href="/dentist_web_design.html"
						className="block mt-4 text-blue-500 hover:underline"
					>
						Read More
					</a>
				</div>

				<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="25"
							height="32"
							viewBox="0 0 25 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M12.6667 14.6667L21.1733 21.8267L20 22.0667L19.1467 22.2267C18.3067 22.4 17.8267 23.3333 18.2 24.0933L18.56 24.8667L20.3733 28.7867L18.48 29.6667L16.6667 25.76L16.32 24.9867C16.2374 24.8031 16.1138 24.6409 15.9586 24.5128C15.8034 24.3846 15.6208 24.2938 15.4249 24.2474C15.229 24.201 15.0251 24.2003 14.8289 24.2452C14.6327 24.2902 14.4495 24.3796 14.2933 24.5067L13.6133 25.04L12.6667 25.8V14.6667ZM11.68 11.5867C11.4112 11.5867 11.1535 11.6934 10.9635 11.8835C10.7734 12.0735 10.6667 12.3312 10.6667 12.6V27.8667C10.6667 28.4267 11.12 28.88 11.68 28.88C11.9333 28.88 12.1467 28.8 12.32 28.6667L14.8667 26.6L17.08 31.4267C17.2533 31.7867 17.6133 32 18 32C18.1467 32 18.2933 32 18.44 31.8933L22.12 30.1867C22.6267 29.9467 22.8667 29.3333 22.6 28.84L20.3733 24L23.5867 23.4C23.8074 23.3426 24.0066 23.2222 24.16 23.0533C24.52 22.6267 24.4667 22 24 21.6133L12.3467 11.8133L12.3333 11.8267C12.151 11.6716 11.9194 11.5866 11.68 11.5867V11.5867ZM17.3333 13.3333V10.6667H24V13.3333H17.3333ZM15.7733 6.34667L19.5467 2.57333L21.4267 4.45333L17.6533 8.22667L15.7733 6.34667ZM10.6667 0H13.3333V6.66667H10.6667V0ZM2.57333 19.5467L6.34667 15.7733L8.22667 17.6533L4.45333 21.4267L2.57333 19.5467V19.5467ZM2.57333 4.45333L4.45333 2.57333L8.22667 6.34667L6.34667 8.22667L2.57333 4.45333ZM6.66667 13.3333H0V10.6667H6.66667V13.3333Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">AdWords (PPC)</h4>
					<p className="mt-1">
						We've managed over $1,300,000 in AdWords campaigns to get results.
					</p>
					<a
						href="/ppc_for_dentists.html"
						className="block mt-4 text-blue-500 hover:underline"
					>
						Read More
					</a>
				</div>

				<div className="w-72 flex flex-col items-center rounded-lg shadow-md p-8 md:mx-4 bg-white">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8.66667 0C10.9652 0 13.1696 0.913092 14.7949 2.53841C16.4202 4.16372 17.3333 6.36812 17.3333 8.66667C17.3333 10.8133 16.5467 12.7867 15.2533 14.3067L15.6133 14.6667H16.6667L23.3333 21.3333L21.3333 23.3333L14.6667 16.6667V15.6133L14.3067 15.2533C12.7341 16.5957 10.7343 17.3332 8.66667 17.3333C6.36812 17.3333 4.16372 16.4202 2.53841 14.7949C0.913092 13.1696 0 10.9652 0 8.66667C0 6.36812 0.913092 4.16372 2.53841 2.53841C4.16372 0.913092 6.36812 0 8.66667 0V0ZM8.66667 2.66667C5.33333 2.66667 2.66667 5.33333 2.66667 8.66667C2.66667 12 5.33333 14.6667 8.66667 14.6667C12 14.6667 14.6667 12 14.6667 8.66667C14.6667 5.33333 12 2.66667 8.66667 2.66667Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">SEO</h4>
					<p className="mt-1">
						Effective on-page and off-page SEO to get you ranking in top
						positions on Google.
					</p>
					<a href="#" className="block mt-4 text-blue-500 hover:underline">
						Read More
					</a>
				</div>

				<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="27"
							height="27"
							viewBox="0 0 27 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M2.66667 5.33333H0V24C0 24.7072 0.280951 25.3855 0.781048 25.8856C1.28115 26.3857 1.95942 26.6667 2.66667 26.6667H21.3333V24H2.66667V5.33333ZM22.2667 7.13333L20.9333 8.46667L18.2 5.73333L19.5333 4.4C19.8133 4.10667 20.28 4.10667 20.56 4.4L22.2667 6.10667C22.56 6.38667 22.56 6.85333 22.2667 7.13333ZM9.33333 14.5867L17.4133 6.50667L20.16 9.25333L12.08 17.3333H9.33333V14.5867ZM24 2.66667V18.6667H8V2.66667H24ZM24 0H8C6.53333 0 5.33333 1.2 5.33333 2.66667V18.6667C5.33333 20.1333 6.53333 21.3333 8 21.3333H24C25.4667 21.3333 26.6667 20.1333 26.6667 18.6667V2.66667C26.6667 1.2 25.4667 0 24 0Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">Online Advertisements</h4>
					<p className="mt-1">
						Target the right person with the right message at the right time.
						This brings leads.
					</p>
					<a
						href="/online_advertising.html"
						className="block mt-4 text-blue-500 hover:underline"
					>
						Read More
					</a>
				</div>

				<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M25.9333 12.6667H28V15.3333H25.9333C25.3333 20.8933 20.8933 25.3333 15.3333 25.9333V28H12.6667V25.9333C7.10667 25.3333 2.66667 20.8933 2.06667 15.3333H0V12.6667H2.06667C2.66667 7.10667 7.10667 2.66667 12.6667 2.06667V0H15.3333V2.06667C20.8933 2.66667 25.3333 7.10667 25.9333 12.6667ZM4.76 12.6667H6.66667V15.3333H4.76C5.04335 17.3299 5.96757 19.1805 7.39353 20.6065C8.8195 22.0324 10.6701 22.9566 12.6667 23.24V21.3333H15.3333V23.24C17.3299 22.9566 19.1805 22.0324 20.6065 20.6065C22.0324 19.1805 22.9566 17.3299 23.24 15.3333H21.3333V12.6667H23.24C22.9566 10.6701 22.0324 8.8195 20.6065 7.39353C19.1805 5.96757 17.3299 5.04335 15.3333 4.76V6.66667H12.6667V4.76C10.6701 5.04335 8.8195 5.96757 7.39353 7.39353C5.96757 8.8195 5.04335 10.6701 4.76 12.6667V12.6667ZM19.3333 19.3333H8.66667V18C8.66667 16.2267 12.2267 15.3333 14 15.3333C15.7733 15.3333 19.3333 16.2267 19.3333 18V19.3333ZM14 8.66667C14.7072 8.66667 15.3855 8.94762 15.8856 9.44772C16.3857 9.94781 16.6667 10.6261 16.6667 11.3333C16.6667 12.0406 16.3857 12.7189 15.8856 13.219C15.3855 13.719 14.7072 14 14 14C13.2928 14 12.6145 13.719 12.1144 13.219C11.6143 12.7189 11.3333 12.0406 11.3333 11.3333C11.3333 10.6261 11.6143 9.94781 12.1144 9.44772C12.6145 8.94762 13.2928 8.66667 14 8.66667V8.66667Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">Content Writing</h4>
					<p className="mt-1">
						Our writers are highly-skilled communicators and persuaders.
					</p>
					<a
						href="/marketing.html"
						className="block mt-4 text-blue-500 hover:underline"
					>
						Read More
					</a>
				</div>

				<div className="w-72 flex flex-col items-center bg-white rounded-lg shadow-md p-8 md:mx-4">
					<div className="w-12 h-12 flex justify-center items-center p-3 mb-2 rounded-full bg-green-100">
						<svg
							className="fill-current text-green-500"
							width="32"
							height="19"
							viewBox="0 0 32 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M16 0C14.7623 0 13.5753 0.491666 12.7002 1.36684C11.825 2.24201 11.3333 3.42899 11.3333 4.66667C11.3333 5.90434 11.825 7.09133 12.7002 7.9665C13.5753 8.84167 14.7623 9.33333 16 9.33333C17.2377 9.33333 18.4247 8.84167 19.2998 7.9665C20.175 7.09133 20.6667 5.90434 20.6667 4.66667C20.6667 3.42899 20.175 2.24201 19.2998 1.36684C18.4247 0.491666 17.2377 0 16 0V0ZM16 2.66667C16.5304 2.66667 17.0391 2.87738 17.4142 3.25245C17.7893 3.62753 18 4.13623 18 4.66667C18 5.1971 17.7893 5.70581 17.4142 6.08088C17.0391 6.45595 16.5304 6.66667 16 6.66667C15.4696 6.66667 14.9609 6.45595 14.5858 6.08088C14.2107 5.70581 14 5.1971 14 4.66667C14 4.13623 14.2107 3.62753 14.5858 3.25245C14.9609 2.87738 15.4696 2.66667 16 2.66667ZM7.33333 4C6.44928 4 5.60143 4.35119 4.97631 4.97631C4.35119 5.60143 4 6.44928 4 7.33333C4 8.58667 4.70667 9.66667 5.72 10.24C6.2 10.5067 6.74667 10.6667 7.33333 10.6667C7.92 10.6667 8.46667 10.5067 8.94667 10.24C9.44 9.96 9.85333 9.56 10.16 9.08C9.18864 7.81409 8.66357 6.2623 8.66667 4.66667V4.29333C8.26667 4.10667 7.81333 4 7.33333 4ZM24.6667 4C24.1867 4 23.7333 4.10667 23.3333 4.29333V4.66667C23.3333 6.26667 22.8133 7.81333 21.84 9.08C22 9.33333 22.1733 9.53333 22.3733 9.73333C22.9882 10.3295 23.8103 10.664 24.6667 10.6667C25.2533 10.6667 25.8 10.5067 26.28 10.24C27.2933 9.66667 28 8.58667 28 7.33333C28 6.44928 27.6488 5.60143 27.0237 4.97631C26.3986 4.35119 25.5507 4 24.6667 4V4ZM16 12C12.88 12 6.66667 13.56 6.66667 16.6667V18.6667H25.3333V16.6667C25.3333 13.56 19.12 12 16 12ZM6.28 12.7333C3.70667 13.04 0 14.3467 0 16.6667V18.6667H4V16.0933C4 14.7467 4.92 13.6267 6.28 12.7333ZM25.72 12.7333C27.08 13.6267 28 14.7467 28 16.0933V18.6667H32V16.6667C32 14.3467 28.2933 13.04 25.72 12.7333ZM16 14.6667C18.04 14.6667 20.32 15.3333 21.64 16H10.36C11.68 15.3333 13.96 14.6667 16 14.6667Z" />
						</svg>
					</div>

					<h4 className="text-xl font-bold">Social Media</h4>
					<p className="mt-1">
						Social media growth to improve credibility and gain new patients.
					</p>
					<a
						href="/social_media.html"
						className="block mt-4 text-blue-500 hover:underline"
					>
						Read More
					</a>
				</div>
			</div> */}
		</section>
	);
};

export default cards;
