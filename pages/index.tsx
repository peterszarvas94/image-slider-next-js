import Card from "../components/Card";

const Home = () => {
	const data = [
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

	const images = data.map((e, index) => (
		<Card key={index} title={e.title} text={e.text} image={e.image} />
	));

	return <main>{images}</main>;
};
export default Home;
