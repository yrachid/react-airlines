import React from "react";

class Airports extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            airports: []
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            airports: nextProps.airports
        };
    }

    render() {
        const airportItems = this.state.airports.map(airportData => (
            <li key={airportData.iata}>
                {airportData.iata} - {airportData.nome}
            </li>
        ));

        return (
            <ul>
                {airportItems}
            </ul>
        );
    }
}

export default Airports;
