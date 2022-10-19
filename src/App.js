import React, { useState, useEffect } from "react";
// import ReactDOM, { render } from "react-dom";
import "./App.css";
import TurtleList from "./TurtleList";
import SingleTurtle from "./SingleTurtle";
import Filter from "./Filter";

function App() {
  const [turtles, setTurtles] = useState([]);
  const [selectedTurtle, setSelectedTurtle] = useState({});
  const [filter, setFilter] = useState("all"); // //'all' is the default value for selected filter

  const getTurtles = async () => {
    const response = await fetch(
      "https://atoll.floridamarine.org/arcgis/rest/services/FWC_GIS/OpenData_FWSppLoc/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    );
    const turtleData = await response.json();
    const turtles = await turtleData.features;
    setTurtles(turtles);
  };

  useEffect(() => {
    getTurtles();
  }, []);

  const selectTurtle = async (turtleId) => {
    const response = await fetch(
      "https://atoll.floridamarine.org/arcgis/rest/services/FWC_GIS/OpenData_FWSppLoc/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    );
    const turtleData = await response.json();

    //all turtles
    const turtles = await turtleData.features;
    //turtle by object ID selected
    const filteredTurtle = turtles.filter(
      (turtle) => turtle.attributes.OBJECTID === turtleId
    );

    //need to convert array from filter to just object of one turtle
    const turtleObj = await Object.assign({}, ...filteredTurtle);
    console.log("turtle object:", turtleObj.attributes);
    setSelectedTurtle(turtleObj.attributes);
  };

  return (
    <div className="App">
      <h1>Turtle Decomposition</h1>
      <Filter filter={filter} setFilter={setFilter} />
      {selectedTurtle.OBJECTID ? (
        <SingleTurtle
          selectedTurtle={selectedTurtle}
          selectTurtle={selectTurtle}
        />
      ) : (
        <TurtleList turtles={turtles} selectTurtle={selectTurtle} />
      )}
    </div>
  );
}

export default App;
