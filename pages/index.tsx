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

	const [data] = useState(db);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [direction, setDirection] = useState("");

	// const directions = ["left-to-right", "right-to-left"];

	const showPrevImage = () => {
		selectedIndex == 0
			? setSelectedIndex(data.length - 1)
			: setSelectedIndex(selectedIndex - 1);
		setDirection("left-to-right");
	};

	const showNextImage = () => {
		selectedIndex == data.length - 1
			? setSelectedIndex(0)
			: setSelectedIndex(selectedIndex + 1);
		setDirection("right-to-left");
	};

	const images = data.map((element, index) => (
		<Card
			key={index}
			title={element.title}
			text={element.text}
			image={element.image}
			index={index}
			class_visible={
				index == selectedIndex ? "card-visible" : "card-nonvisible"
			}
			class_direction={
				index == selectedIndex ? direction : ""
			}
		/>
	));

	//TODO:
	// animate: 1. slide (left or right) 2. transform scale 3. opacity

	return (
		<div className="slider">
			{images}
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
