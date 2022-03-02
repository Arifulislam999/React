import React, { Component } from "react";

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1);
    }
    componentDidUpdate() {
        if (this.state.count === 1409) {
            clearInterval(this.timer);
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
