import React, { Component } from 'react'

export class CardClass extends Component {
    render() {
        return (
                <div className='card'>
                    <div className='cardHead'>{this.props.name}</div>
                    <div className='cardDesc'>{this.props.desc}</div>
                </div>
        )
    }
}

export default CardClass