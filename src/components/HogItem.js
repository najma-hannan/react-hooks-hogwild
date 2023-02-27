import React, { useState } from "react";

function HogItem({ hog }) {
	const [showHogDetails, setShowHogDetails] = useState(false);

	function handleClick(e) {
		setShowHogDetails((showHogDetails) => !showHogDetails);
	}

	const showDetails = () => {
		return (
			<>
				<div className="meta">
					<div className="description">Specialty: {hog.specialty}</div>
					<div className="description">Weight: {hog.weight}</div>
					<div className="description">Greased: {hog.greased ? "Yes" : "No"}</div>
				</div>
				<div className="description">Highest medal achieved: {hog["highest medal achieved"]}</div>
			</>
		);
	};

	return (
		<div className="card ui eight wide column" onClick={handleClick}>
			<div className="image">
				<img src={hog.image} alt={hog.name} />
			</div>
			<div className="content">
				<div className="header">{hog.name}</div>
				{showHogDetails	? showDetails() : null}
			</div>
		</div>
	);
}

export default HogItem;
