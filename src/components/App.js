
import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {

  const [showGreased, setShowGreased] = useState(false)
  const [sortBy, setSortBy] = useState("all")

  function onShowGreased(isGreased){
    setShowGreased(isGreased)
  }

  function onSortBy(sortValue){
    setSortBy(sortValue)
  }

  const hogsList = hogs.sort((a, b) => {
    if (sortBy === "all"){
      return true
    }
    else if (sortBy === "name") {
      return a[sortBy] > b[sortBy] ? 1 : -1
    }
    else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })

  const greasedHogs = hogs.filter(hog => hog.greased)

  const hogsToDisplay = showGreased ? greasedHogs : hogsList

	return (
		<div className="App">
			<Nav />
      <HogList 
      hogs={hogsToDisplay} 
      showGreased={showGreased} 
      onShowGreased={onShowGreased} 
      sortBy={sortBy} 
      onSortBy={onSortBy}/>
		</div>
	);
}

export default App;
