import React from 'react';
import './Footer.css';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
    super(props);
        this.state = {
            clicks1: 0,
            clicks2: 0,
            clicks3: 0,
            clicks4: 0,
            show: true
        };
    }

    IncrementItem = () => {
    this.setState({ clicks1: this.state.clicks1 + 1 });
    }

    IncrementItem2 = () => {
        this.setState({ clicks2: this.state.clicks2 + 1 });
    }
    
    IncrementItem3 = () => {
        this.setState({ clicks3: this.state.clicks3 + 1 });
    }
    
    IncrementItem4 = () => {
        this.setState({ clicks4: this.state.clicks4 + 1 });
    }
    

    render() {
    return(
        <div className='Footer'>
            <button onClick={this.IncrementItem}><img src='https://image.flaticon.com/icons/svg/1246/1246332.svg' className='icon A'></img>{this.state.clicks1}</button>
            <button onClick={this.IncrementItem2}><img src='https://image.flaticon.com/icons/svg/1246/1246245.svg' className='icon B'></img>{this.state.clicks2}</button>
            <button onClick={this.IncrementItem3}><img src='https://image.flaticon.com/icons/svg/149/149217.svg' className='icon C'></img>{this.state.clicks3}</button>
            <button onClick={this.IncrementItem4}><img src='https://image.flaticon.com/icons/svg/784/784677.svg' className='icon D'></img>{this.state.clicks4}</button>
        </div>
        );
        }
    }

    export default App;