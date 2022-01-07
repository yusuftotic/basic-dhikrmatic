import React, { Component } from 'react';

export default class ValidLimit extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    limitValueControl(){
        if(this.props.isLimitOver){
            return 'Limit is over.'
        } else if(this.props.limit > 0){
            return `Limit: ${this.props.limit}`
        } else if(this.props.limit <= 0 || this.props.limit === ''){
            return "There isn't limit yet"
        }
        // this.props.limit > 0 ? `Limit: ${this.props.limit}` : "There isn't limit yet"
    }

    render(){
        if(this.props.isAddLimitToggled){
            return (
                <div className="validLimitContainer" >
                    <h2 className="validLimit" >{this.limitValueControl()}</h2>
                </div>
            );
        } else{
            return '';
        }
    }
}