import React from "react";
import {InfoWindow, Marker} from "react-google-maps";

const City = ({name}) => <div><h1>{name}</h1></div>;

const CityMarker = ({airport}) => (
    <Marker position={{lat: airport.latitude, lng: airport.longitude}}>
        <InfoWindow>
            <City name={airport.city}/>
        </InfoWindow>
    </Marker>
);

export default CityMarker
