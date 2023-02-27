import React from "react";

export default function FilterHog({ showGreased, onShowGreased, sortBy, onSortBy }) {
	function handleClick(e) {
		onShowGreased(e.target.checked);
	}

  function handleChange(e){
    onSortBy(e.target.value)
  }

	return (
		<div style={{ marginBottom: "10px" }}>
			<div className="ui checkbox">
				<input type="checkbox" name="public" onClick={handleClick} value={showGreased} />
				<label>Show greased hogs only</label>
			</div>
			<br />
			<p>
				Sort hogs by...
				<span>
					<select name="gender" className="ui dropdown" id="select" onChange={handleChange} value={sortBy}>
						<option value="all">All</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</span>
			</p>
		</div>
	);
}