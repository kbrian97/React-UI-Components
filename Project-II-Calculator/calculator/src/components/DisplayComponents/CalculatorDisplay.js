import React from 'react';
import './Display.css';

const CalcDisplay = props => {
    return <div className="calc">{props.text}</div>;
};

export default CalcDisplay;