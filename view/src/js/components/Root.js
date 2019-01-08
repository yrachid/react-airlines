import React, {Fragment} from "react";
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {compose, withProps} from 'recompose';

const Whatever = ({airport}) => (<div>
    <h1>{airport.name}</h1>
    <p>{airport.city}</p>
    <p>{airport.country}</p>
</div>);

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)(({airports}) => {

        const airportMarkers = airports
            .filter(({country}) => country === "Brazil")
            .map(airport =>
                <Marker key={airport.latitude} position={{lat: airport.latitude, lng: airport.longitude}}>
                    <InfoWindow>
                        <Whatever airport={airport}/>
                    </InfoWindow>
                </Marker>
            );

        return <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}>

            {airportMarkers}
        </GoogleMap>
    }
);

class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            airports: [],
            title: 'React Airlines'
        };
    }

    componentDidMount() {
        fetch('/airline/search')
            .then(stuff => stuff.json())
            .then(body =>
                this.setState({
                    airports: body
                })
            )
            .catch(erro => console.log("Error " + erro));
    }

    render() {
        return (
            <Fragment>
                <Map airports={this.state.airports}/>
            </Fragment>
        );
    }
}

export default Root;
