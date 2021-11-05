import React, { Component } from 'react'
import Clock from './Clock'

export default class ClockS extends Component {
    render() {
        const {loopArray} = this.props;
        return (
            <div>
                {loopArray.map((key)=>
                <Clock key={key} />
                )}
            </div>
        )
    }
}
