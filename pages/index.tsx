import { useEffect, useState } from "react";
import Card from "../components/Card";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Home = () => {
	const db = [
		{
			title: "Hosue",
			text: "You can live in it",
			image: "house.jpg",
		},
		{
			title: "Dog",
			text: "Look how cute",
			image: "dog.jpg",
		},
		{
			title: "Calisthenics",
			text: "Best sport in the word",
			image: "calisthenics.jpg",
		},
	];

	const [data, setData] = useState(db);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const showPrevImage = () => {
		selectedIndex == 0
			? setSelectedIndex(data.length - 1)
			: setSelectedIndex(selectedIndex - 1);
	};

	const showNextImage = () => {
		selectedIndex == data.length - 1
			? setSelectedIndex(0)
			: setSelectedIndex(selectedIndex + 1);
	};

	//TODO:
	// render all the cards
	// opacity: 0 for non-selected
	// add class when selected to opacity: 100%

	return (
		<div className="slider">
			<Card
				title={data[selectedIndex].title}
				text={data[selectedIndex].text}
				image={data[selectedIndex].image}
				index={selectedIndex}
			/>
			<button className="card-prev-button" onClick={showPrevImage}>
				<SlArrowLeft />
			</button>
			<button className="card-next-button" onClick={showNextImage}>
				<SlArrowRight />
			</button>
		</div>
	);
};
export default Home;
