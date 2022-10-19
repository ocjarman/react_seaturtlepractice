import React from "react";
import PropTypes from "prop-types";

const TurtleRow = (props) => {
  const { turtle, selectTurtle } = props;

  return (
    <tr onClick={() => selectTurtle(turtle.attributes.OBJECTID)}>
    <td>{turtle.attributes.OBJECTID}</td>
    <td>{turtle.attributes.COMMONNAME}</td>
    <td>{turtle.attributes.CONDITION}</td>
    <td>{turtle.attributes.COUNTYNAME}, {turtle.attributes.STATE}</td>
    <td>{turtle.attributes.MONTH_}/{turtle.attributes.DAY_}/{turtle.attributes.YEAR_}</td>
</tr>
  );
};

export default TurtleRow;

TurtleRow.propTypes = {
  turtle: PropTypes.object,
  selectTurtle: PropTypes.func,
};
