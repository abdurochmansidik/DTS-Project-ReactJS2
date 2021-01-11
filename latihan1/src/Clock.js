import React, { Component } from 'react';

export class Clock extends Component {
    constructor() {
        super()

        this.state = {
            datetime: new Date()
        }
    }

    render() {
        return (
            <div>
                {this.state.datetime.toLocaleTimeString()}
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    
    componentWillUnmoiunt() {
        clearInterval(this.timerID)
    }
    
    tick() {
        this.setState({
            datetime: new Date()
        });
    }
    
}

export default Clock