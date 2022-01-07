import React, { Component } from "react";

export default class LimitInput extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        if(this.props.isAddLimitToggled){
            return(
                <div>
                    <input 
                    className="limitInput" 
                    type="number" 
                    placeholder="Enter limit." 
                    onChange={this.props.handleLimit} 
                    />
                </div>
            );
        }else{
            return '';
        }
        
    }
}