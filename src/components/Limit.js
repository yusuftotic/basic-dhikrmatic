import React, { Component } from 'react';

export default class Limit extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div className="addLimitContainer" >
                    <button className="btn" onClick={this.props.handleAddLimitToggled} >Add Limit</button>
                </div> 
            </div>  
        );
    }
}