import React from "react";
import NavToggleBtn from "./NavToggleBtn";

const NavContent = () => {
	return (
		<div className="flex flex-wrap items-center justify-between py-6">
			{/* LOGO */}
			<div className="md:w-auto">
				<a href="/" className="font-bold text-2xl">
					GGHC
				</a>
			</div>

			<div>
				<NavToggleBtn />

				{/* NAV CONTENT/LINKS */}
				<div
					id="nav_content"
					className="absolute right-0 hidden md:block md:relative w-full md:w-auto"
				>
					<nav className="nav-content w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
						<ul className="md:flex items-center md:text- text-gray-900 sm:text-white">
							<li>
								<a
									className="py-2 inline-block  md:px-2 font-semibold "
									href="#About"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									className="py-2 inline-block  md:px-2 font-semibold "
									href="#Services"
								>
									Services
								</a>
							</li>
							<li className="">
								<a
									className="py-2 inline-block md:hidden lg:block md:px-2 font-semibold "
									href="#Community"
								>
									Marketing
								</a>
							</li>
							<li className=" md:hidden lg:block">
								<a
									className="py-2 inline-block  md:px-2 font-semibold "
									href="#Blog"
								>
									Blog
								</a>
							</li>
							<li className="ml-2 mt-3 md:mt-0">
								<a
									className="inline-block font-semibold px-4 py-2  bg-blue-600 md:bg-transparent border border-white rounded hover:bg-white hover:text-green-400 text-white"
									href="/contact_us.html"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default NavContent;
