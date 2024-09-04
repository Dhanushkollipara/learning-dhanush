import React, { Component } from 'react';
import './Counter.css'; // Ensure you import the CSS file

class Counter extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div className="counter-container">
                <h2 className="counter-title">Counter</h2>
                <div className="counter-value">{this.state.count}</div>
                <div className="counter-controls">
                    <button className="counter-button increment" onClick={this.increment}>Increase</button>
                    <button className="counter-button decrement" onClick={this.decrement}>Decrease</button>
                </div>
            </div>
        );
    }
}

export default Counter;
