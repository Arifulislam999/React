import React, { Component } from "react";

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count_1: 0,
        };
    }
    componentDidMount() {
        this.timer_1 = setInterval(() => {
            this.setState({ count_1: this.state.count_1 + 1 });
        }, 50);
    }
    componentDidUpdate() {
        if (this.state.count_1 === 155) {
            clearInterval(this.timer_1);
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.count_1}</h3>
            </div>
        );
    }
}
