import React from 'react';
import './App.css';
import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="Container">
      <CalcDisplay text="0"/>
      <ActionButton buttonStyle="action-btn" text="clear" />
      <NumberButton buttonStyle="operator" text="&divide;" />
      <NumberButton buttonStyle="num-btn" text="7" />
      <NumberButton buttonStyle="num-btn" text="8" />
      <NumberButton buttonStyle="num-btn" text="9" />
      <NumberButton buttonStyle="operator" text="&times;" />
      <NumberButton buttonStyle="num-btn" text="4" />
      <NumberButton buttonStyle="num-btn" text="5" />
      <NumberButton buttonStyle="num-btn" text="6" />
      <NumberButton buttonStyle="operator" text="&minus;" />
      <NumberButton buttonStyle="num-btn" text="1" />
      <NumberButton buttonStyle="num-btn" text="2" />
      <NumberButton buttonStyle="num-btn" text="3" />
      <NumberButton buttonStyle="operator" text="+" />
      <ActionButton buttonStyle="action-btn" text="0" />
      <NumberButton buttonStyle="operator" text="=" />
    </div>
    );
  };

export default App;
