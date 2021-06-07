import React from "react";
import "./card.styles.css";

const Card = ({ number, active, card, handleCardClick }) => {
	return (
		<div className={`${active ? "active" : null} flip-card`}>
			<div className="flip-card-inner">
				<div onClick={() => handleCardClick(card)} className="flip-card-front">
					Guess
				</div>
				<div className="flip-card-back">
					<p>{number}</p>
				</div>
			</div>
		</div>
	);
};

export { Card };
