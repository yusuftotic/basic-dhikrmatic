import React, { Component } from "react";
import './App.css';
import Counter from "./components/Counter";
import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import Reset from "./components/Reset";
import Limit from "./components/Limit";
import LimitInput from "./components/LimitInput";
import ValidLimit from "./components/ValidLimit";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: Number(),
            isAddLimitToggled: false,
            limit: Number(),
            isLimitOver: Boolean()
        };
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleAddLimitToggled = this.handleAddLimitToggled.bind(this);
        this.handleLimit = this.handleLimit.bind(this);
    }

    handleIncrease(){
        this.setState({
            counter: this.state.counter + 1
        },
        this.handleLimitOver);

        // this.setState((state) => ({
        //     counter: state.counter + 1
        // }));
        
        // this.setState({
        //     counter: this.state.counter + 1
        // });
    }

    handleDecrease(){
        this.state.counter === 0 
        ? this.setState({
            counter: 0
        }) 
        : this.setState({
            counter: this.state.counter - 1
        });
    }

    handleReset(){
        this.setState({
            counter: 0,
            limit: ''
        });
    }

    handleAddLimitToggled(){
        this.setState({
            isAddLimitToggled: !this.state.isAddLimitToggled
        });
    }

    handleLimit(e){
        if(e.target.value < 0){
            this.setState({
                limit: 0
            });
            e.target.value = '';
        } else{
            this.setState({
                limit: Number(e.target.value),
                isLimitOver: false
            });
        }
    }

    handleLimitOver(){
        if(this.state.counter !== 0 && this.state.limit !== 0){
            if(this.state.counter === this.state.limit){
                this.setState({
                    limit: 0,
                    isLimitOver: true
                });
                if(this.state.isAddLimitToggled === false){
                    this.setState({
                        isAddLimitToggled: true
                    });
                }
            }
        }
    }

    render(){
        return(
            <div className="container" >
                <div className="counterContainer" >
                    <Counter counter={this.state.counter} />
                </div>
                <div className="operationsContainer" >
                    <Increase handleIncrease={this.handleIncrease} />
                    <Decrease handleDecrease={this.handleDecrease} />
                    <Reset handleReset={this.handleReset} />
                    <Limit handleAddLimitToggled={this.handleAddLimitToggled} />
                </div>
                <div className="limitContainer" >
                    <ValidLimit limit={this.state.limit} isLimitOver={this.state.isLimitOver} isAddLimitToggled={this.state.isAddLimitToggled} />
                    <LimitInput isAddLimitToggled={this.state.isAddLimitToggled} handleLimit={this.handleLimit} />
                </div>
            </div>
        );
    }
}