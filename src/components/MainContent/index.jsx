import React from "react";
import { HeroData } from "../../data/Herodata";
import Hero from "../Hero";
import About from "../About";

const MainContent = () => {
	return (
		<main className="text-gray-900 dark:text-white">
			{/* HERO */}
			<Hero {...HeroData} />

			{/* ABOUT */}
			<About />
		</main>
	);
};

export default MainContent;
