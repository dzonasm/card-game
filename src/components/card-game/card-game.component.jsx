import React, { useState, useMemo, useEffect } from "react";
import "./card-game.styles.css";
import { Card } from "../card-component/card.component";
import { v4 } from "uuid";

export const CardGame = () => {
	const [numbers, setNumbers] = useState([]);
	const [guess, setGuess] = useState(null);

	useEffect(() => {
		const newNumbers = [];
		for (let i = 1; i <= 4; i += 1) {
			newNumbers.push({ number: i, id: v4() });
			newNumbers.push({ number: i, id: v4() });
		}
		setNumbers(newNumbers);
	}, []);

	//set active card

	const handleCardClick = card => {
		if (!guess) return setGuess(card);
		if (card.number === guess.number && card.id !== guess.id)
			setNumbers(numbers.filter(n => n.number !== guess.number));
		setGuess(card);
	};

	const findActiveCard = id => {
		if (!guess) return false;
		if (guess.id !== id) return false;
		return true;
	};

	const cards = numbers.map(card => {
		const { number, id } = card;
		return (
			<Card handleCardClick={handleCardClick} card={card} key={id} active={findActiveCard(id)} number={number} />
		);
	});

	return <div className="card-game">{cards}</div>;
};

//find out if 2 different card number props match, return true or false
