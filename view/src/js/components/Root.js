import React, {Fragment} from "react";
import Map from "./Map";

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
