import React, { Component } from 'react';
import DateClass from './DateClass'
import DateFunction from './DateFunction'

export class Clock extends Component {
    constructor() {
        super()

        this.state = {
            datetime: new Date(),
            dateIsFunction: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            dateIsFunction: !state.dateIsFunction
        }));
    }

    render() {

        var dateComponent;
        if (this.state.dateIsFunction) {
            dateComponent = <DateFunction />
        } else {
            dateComponent = <DateClass date={this.state.datetime} />
        }

        return (
            <div>
                {dateComponent}

                {this.state.datetime.toLocaleTimeString()}

                <br></br>
                <p>Change date component to </p>
                <button onClick={this.handleClick} style={{ padding: '5px 10px', fontSize: '1rem' }}>
                    {this.state.dateIsFunction ? 'CLASS' : 'FUNCTION'}
                </button>
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