import React from "react";
import PropTypes from "prop-types";

const SingleTurtle = (props) => {
    //selected is the contact object that we selected, selectContact is the fxn that gets our data for one user
    const { selectedTurtle, selectTurtle } = props;
//    console.log('single turtle logs', selectedTurtle)
    return (
        <div id="single-turtle">
            {/* <img src={imageUrl} /> */}
        <div id="turtle-info">
            <p><b>Turtle ID:</b> {selectedTurtle.OBJECTID} </p>
            <p><b>Common name:</b> {selectedTurtle.COMMONNAME} </p>
            <p><b>Condition:</b> {selectedTurtle.CONDITION}</p>
            <p><b>County & State:</b> {selectedTurtle.COUNTY} {selectedTurtle.STATE} </p>
        </div>
    </div>
    );
  };
  
  SingleTurtle.propTypes = {
    contacts: PropTypes.object,
    selectTurtle: PropTypes.func
  };
  
  export default SingleTurtle;

