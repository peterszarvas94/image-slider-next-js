import Image from "next/image";

interface CardProps {
	title: string;
	text: string;
	image: string;
	index: number;
}

const Card = (props: CardProps) => {
	const pic = require(`../img/${props.image}`);

	const prevClick = () => {};

	const nextClick = () => {
		console.log("next in: ", props.index);
	};

	return (
		<div className="card-container" data-index="index">
			<Image className="card-image" src={pic} alt={props.title} />
			<div className="card-backdrop" />
			<p className="card-title">{props.title}</p>
			<p className="card-text">{props.text}</p>
		</div>
	);
};

export default Card;
