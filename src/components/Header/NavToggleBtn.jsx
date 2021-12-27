import React from "react";

const NavToggleBtn = () => {
	const toggleNav = () => {
		const navToggle = document.querySelector("#nav_toggle");
		const navContent = document.querySelector("#nav_content");
		navContent.classList.toggle("hidden");
	};

	return (
		// MOBILE NAV TOGGLE
		<button onClick={toggleNav} id="nav_toggle" className="h-8 w-8 md:hidden">
			<svg
				className="h-full w-auto"
				xmlns="http://www.w3.org/2000/svg"
				width="192"
				height="192"
				fill="white"
				viewBox="0 0 256 256"
			>
				<rect width="256" height="256" fill="none"></rect>
				<line
					x1="40"
					y1="128"
					x2="216"
					y2="128"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				></line>
				<line
					x1="40"
					y1="64"
					x2="216"
					y2="64"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				></line>
				<line
					x1="40"
					y1="192"
					x2="216"
					y2="192"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				></line>
			</svg>
		</button>
	);
};

export default NavToggleBtn;
