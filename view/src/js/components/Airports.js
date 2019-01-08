import React from "react";

const Airports = ({airports}) =>
    <ul> {
        airports.map(({iata, city, country}) => (<li key={iata}> {iata} - {city} - {country} </li>))
    }
    </ul>;


export default Airports;
