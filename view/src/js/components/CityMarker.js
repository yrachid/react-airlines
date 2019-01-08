import React from "react";
import {InfoWindow, Marker} from "react-google-maps";

const CityMarker = ({airport}) => <Marker
        key={airport.latitude}
        position={{lat: airport.latitude, lng: airport.longitude}}>

        <InfoWindow>
            <div><h1>{airport.city}</h1></div>
        </InfoWindow>
    </Marker>;

export default CityMarker
