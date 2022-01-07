import React, { Component } from "react";
import './App.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: Number()
        }
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrease(){
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleDecrease(){
        this.state.counter === 0 
        ? this.state.counter = 0 
        : this.setState({
            counter: this.state.counter - 1
        });
    }

    handleReset(){
        this.setState({
            counter: 0
        });
    }

    render(){
        return(
            <div className="container" >
                <div className="counterContainer" >
                    <h1 className="counter" >{this.state.counter === '' ? 0 : this.state.counter}</h1>
                </div>
                <div className="operationsContainer" >
                    <div className="increaseContainer" >
                        <button className="btn" onClick={this.handleIncrease} >+</button>
                    </div>
                    <div className="decreaseContainer" >
                        <button className="btn" onClick={this.handleDecrease} >-</button>
                    </div>
                    <div className="resetContainer" >
                        <button className="btn" onClick={this.handleReset} >Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}