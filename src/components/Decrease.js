import React, { Component } from "react";

export default class Decrease extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div className="decreaseContainer" >
                        <button className="btn" onClick={this.props.handleDecrease} >-</button>
                </div>
            </div>
        );
    }
}