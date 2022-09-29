import React, { Component } from "react";
import Random from "./randomnumber";

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
      }

      handleClick() {
        // const min = 10;
        // const max = 1;
        // const rand = Math.floor(Math.random() * (10 - 1)) + 1;
        this.setState({ random: Math.floor(Math.random() * (10 - 1)) + 1 });
      }
      
    render() {
        // let number;
        // const getNumber = () => {
        //      number = Math.floor(Math.random());
        // }
        let win;
        if (this.state.random === 7) {
            win = <h1>Winner!</h1>
        } else {
            
        }
        
        return (
            <div>
                <h1>Number is {this.state.random}</h1>
                <button onClick={this.handleClick.bind(this)}>Random number</button>    
                {win}            
            </div>
        )
    }
}

export default Clicker;