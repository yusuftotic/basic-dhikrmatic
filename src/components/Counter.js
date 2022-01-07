import React, { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <h1 className="counter" >{this.props.counter === '' ? 0 : this.props.counter}</h1>
            </div>
        );
    }
}