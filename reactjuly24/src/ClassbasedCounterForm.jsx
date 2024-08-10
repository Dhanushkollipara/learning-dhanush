import { Component } from "react";

class ClassbasedCounterForm extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return(
            <div>
                <button onClick={this.props.increase}>Increse</button>
                <button onClick={this.props.decrease}>decrese</button>
            </div>
        )
    }
}
export default ClassbasedCounterForm;