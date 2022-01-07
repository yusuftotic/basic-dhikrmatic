import React, { Component } from "react";

export default class Reset extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div className="resetContainer" >
                    <button className="btn" onClick={this.props.handleReset} >Reset</button>
                </div>                
            </div>
        );
    }
}