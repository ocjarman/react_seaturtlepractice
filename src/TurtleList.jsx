import React, { useState } from "react";
import PropTypes from "prop-types";
import TurtleRow from "./TurtleRow";

const rowStyle = {
    border: '5px solid black',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#7dc8ca'
}

const TurtleList = (props) => {
  const { turtles, selectTurtle } = props;
  return (
    <table style={rowStyle}>
      <tbody>
        <tr>
          <th>Turtle Id</th>
          <th>Common Name</th>
          <th>Condition</th>
          <th>County & State</th>
          <th>Date Found</th>
        </tr>
        {turtles.map((turtle) => {
          return (
            <TurtleRow key={turtle.attributes.OBJECTID} turtle={turtle} selectTurtle={selectTurtle}/>
          );
        })}
      </tbody>
    </table>
  );
};

export default TurtleList;

TurtleList.propTypes = {
  turtles: PropTypes.arrayOf(PropTypes.object),
};
