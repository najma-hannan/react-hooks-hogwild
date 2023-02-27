import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	return (
		<div className="navWrapper" style={{"marginBottom": "40px"}}>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
