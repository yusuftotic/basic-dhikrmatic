import React, { Component } from "react";

export default class Increase extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div className="increaseContainer" >
                        <button className="btn" onClick={this.props.handleIncrease} >+</button>
                </div>
            </div>
        );
    }
}