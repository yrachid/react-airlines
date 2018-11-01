import React from "react";
import Title from "./Title";

class Airports extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            airports: []
        };
    }

    static getDerivedStateFromProps(nextProps, previousState) {
        return {
            airports: nextProps.airports
        };
    }

    render() {
       const airportItems = this.state.airports.map(airportData => (
           <li key={airportData.iata}>{airportData.iata} - {airportData.nome}</li>
       ));

       return (
           <ul>
               {airportItems}
           </ul>
       );
    }

}

class Root extends React.Component {

    constructor() {
        super();
        this.state = {
            airports: [],
            title: 'React Airlines'
        };
    }

    componentDidMount() {
        fetch('/airline/busca', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
            <div>
                <Title/>
                <Airports airports={this.state.airports}/>
            </div>
        );
    }
}

export default Root;