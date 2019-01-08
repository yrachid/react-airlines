import React from "react";

const Airports = ({airports}) =>
    <ul> {
        airports.map(({iata, nome}) => (<li key={iata}> {iata} - {nome} </li>))
    }
    </ul>


export default Airports;
