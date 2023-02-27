import React from "react";
import HogItem from "./HogItem";
import FilterHog from "./FilterHog";

function HogList({ hogs, showGreased, onShowGreased, sortBy, onSortBy}) {
	return (
		<div className="ui grid container">
      <FilterHog 
      showGreased={showGreased} 
      onShowGreased={onShowGreased} 
      sortBy={sortBy} 
      onSortBy={onSortBy}/>
			<div className="ui link cards">
				{hogs.map((hog) => (
					<HogItem key={hog.name} hog={hog} />
				))}
			</div>
		</div>
	);
}

export default HogList;
