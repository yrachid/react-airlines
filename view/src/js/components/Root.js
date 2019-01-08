import React from "react";
import Title from "./Title";
import Airports from "./Airports";

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
            <div>
                <Title content={this.state.title}/>
                <Airports airports={this.state.airports}/>
            </div>
        );
    }
}

export default Root;
