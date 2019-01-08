import React from "react";
import {compose, withProps} from "recompose";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import CityMarker from "./CityMarker";

const MAP_PROPERTIES = {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `100%`}}/>,
    mapElement: <div style={{height: `100%`}}/>
};

const applyMapsConfig = compose(
    withProps(MAP_PROPERTIES),
    withScriptjs,
    withGoogleMap);

const map = (props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
        {tenBrAirports(props).map(toCityMarker)}
    </GoogleMap>
);

const tenBrAirports = (props) => props
    .airports
    .filter(airport => airport.country === "Brazil")
    .slice(0, 11);

const toCityMarker = (airport) => <CityMarker key={airport.iata} airport={airport}/>;

const Map = applyMapsConfig(map);

export default Map;
