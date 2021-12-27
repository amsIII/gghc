import React from "react";
import { AboutCardsData } from "../../data/Herodata";

const Cardss = () => {
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
		</section>
	);
};

export default Cardss;
