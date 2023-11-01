import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'


export class StateExample extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }
    increment=()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count -1
        })
    }
    render() {
        const {count}=this.state
        return (
            <div>
                <span className='countDiv'>{count}</span>
                <br/>
                <Button className='butn' onClick={this.increment} >+</Button>
                <Button className='butn' onClick={this.decrement} disabled={count===0} >-</Button>
            </div>
        )
    }
}


export default StateExample