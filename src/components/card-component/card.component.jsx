import React, { useState } from "react";
import "./card.styles.css";

const Card = ({ number, handleCardClick, testProp }) => {
	const [active, setActive] = useState(false);

	testProp();
	return (
		<div
			onClick={() => {
				setActive(true);
				handleCardClick(number);
			}}
			className={`${active ? "active" : null} flip-card`}
		>
			<div className="flip-card-inner">
				<div className="flip-card-front"></div>
				<div className="flip-card-back">
					<p>{number}</p>
				</div>
			</div>
		</div>
	);
};

export { Card };
