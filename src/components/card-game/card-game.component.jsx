import React, { useState, useMemo } from "react";
import "./card-game.styles.css";
import { Card } from "../card-component/card.component";
import { uuid } from "uuidv4";

export const CardGame = () => {
	const [numbers, setNumbers] = useState([1, 1, 2, 2, 3, 3, 4, 4]);
	const [guess, setGuess] = useState(null);

	const handleCardClick = number => {
		if (number === guess) return setNumbers(numbers.filter(n => n !== number));
		setGuess(number);
	};

	const cards = useMemo(
		() =>
			numbers.map(number => (
				<Card
					testProp={() => console.log(number)}
					handleCardClick={handleCardClick}
					key={uuid()}
					number={number}
				/>
			)),
		[numbers],
	);

	return <div className="card-game">{cards}</div>;
};

//find out if 2 different card number props match, return true or false
