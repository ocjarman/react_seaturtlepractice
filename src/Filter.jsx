import React from "react";

//the filter component has buttons that change the state 'filter' of the main component in App.js.
const Filter = (props) => {
    const {filter, setFilter} = props
    //to make obvious which is selected
    const currentFilter = {boxShadow: '2px 2px'}
    const changeValue = (event) => setFilter(event.target.value)
    
    //setFilter function in line 13 of App.js can be used here to change the 'filter' state
    //when a button is pressed, its value is set as the 'filter' through the setFilter func inherited by the main componet in app
    return (
    <div>
    <button style={filter==='all' ? currentFilter : null } value="all" onClick={changeValue}>All</button>
    <button style={filter==='greenturtle' ? currentFilter : null }value="greenturtle" onClick={changeValue}>Green turtle</button>
    <button style={filter==='loggerhead' ? currentFilter : null }value="loggerhead" onClick={changeValue}>Loggerhead</button>
    <button style={filter==='Hawksbill' ? currentFilter : null }value="Hawksbill" onClick={changeValue}>Hawksbill</button>
    <button style={filter==='Leatherback' ? currentFilter : null }value="Leatherback" onClick={changeValue}>Leatherback</button>
    <button style={filter==='Kemp\'sridley' ? currentFilter : null }value="Kemp's ridley" onClick={changeValue}>Kemp's ridley</button>
    <button style={filter==='unknown' ? currentFilter : null }value="Unknown" onClick={changeValue}>Unknown</button>
    </div> 
    )
}

export default Filter;