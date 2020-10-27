import React from 'react';
import Countup from 'react-countup';
import "./Card.css";

const Card = (props) => {
    return (
        <div class="card">
            <h1>{props.name}</h1>
            <div class="innercontainer">
            <h2><Countup end={props.value} duration={2} separator=','/></h2>
            <h3><Countup end = {props.value2}  duration={2} separator=','/></h3>
            <h4>{props.updateTime}</h4>
            </div>
        </div>
    )
}

export default Card
