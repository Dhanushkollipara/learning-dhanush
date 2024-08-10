import { Component } from "react";
import ClassbasedCounterForm from "./ClassbasedCounterForm";
class ClassbasedCounter extends Component{
    constructor() {
        super();
        this.state = {count :0, title:"Some title"};
    }

    increase = () => {
        this.setState((prevState,props) => {
            return{
                count:prevState.count+1
            }
        })
    };

    decrease = () => {
        this.setState((prevState,props) => {
            return{
                count:prevState.count-1
            }
        })
    };

    render() {
        return(
            <div>
                Counter = {this.state.count}
                <br/>
                <ClassbasedCounterForm
                increase={this.increase}
                decrease={this.decrease}
                />
                title = {this.state.title}
            </div>
        )
    }
}

export default ClassbasedCounter;