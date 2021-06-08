import React, { useState, useMemo, useEffect } from "react";
import "./card-game.styles.css";
import { Card } from "../card-component/card.component";
import { v4 } from "uuid";

import { randomRecursive } from "../../common/utils";

export const CardGame = () => {
	const [numbers, setNumbers] = useState([]);
	const [guess, setGuess] = useState([]);
	const [guessCount, setGuessCount] = useState(0);

	//guess is an array, if an element is in the array, it becomes active,
	//if two elements are the same, a timeout occurs and the elements are removed,
	//if the elements are not the same, the guess array is cleared

	useEffect(() => {
		const newNumbers = [];
		for (let i = 1; i <= 4; i += 1) {
			newNumbers.push({ number: i, id: v4() });
			newNumbers.push({ number: i, id: v4() });
		}
		const randomized = randomRecursive(newNumbers);
		setNumbers(randomized);
	}, []);

	const handleCardClick = card => {
		if (guess.length === 2) return setGuess([card]);
		const guessTemp = [...guess, card];
		const [firstGuess, secondGuess] = guessTemp;
		if (secondGuess && secondGuess.number !== firstGuess.number) {
			setTimeout(() => {
				setGuessCount(guessCount + 1);
				return setGuess([]);
			}, 1000);
		}
		if (secondGuess && secondGuess.number === firstGuess.number) {
			setTimeout(() => {
				setNumbers(numbers.filter(n => n.number !== firstGuess.number));
			}, 1000);
		}

		setGuess(guessTemp);
		console.log(guessTemp);
	};

	const findActiveCard = id => {
		if (!guess.length) return false;
		const [firstGuess, secondGuess] = guess;
		if (firstGuess.id === id) return true;
		if (secondGuess && secondGuess.id === id) return true;
		return false;
	};

	const cards = numbers.map(card => {
		const { number, id } = card;
		return (
			<Card handleCardClick={handleCardClick} card={card} key={id} active={findActiveCard(id)} number={number} />
		);
	});

	return (
		<>
			<div className="card-game">{cards}</div>
			<p>{guessCount}</p>
		</>
	);
};

//find out if 2 different card number props match, return true or false
