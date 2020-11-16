import React from "react";
import Countup from "react-countup";
import "./Card.css";

const Card = (props) => {
  return (
    <div class='card' style={props.style}>
      <div className='detail'>
        <h2>{props.name}</h2>
        <h2>
          <Countup end={props.value} duration={2} separator=',' />
        </h2>
        <h3>
          <Countup end={props.value2} duration={2} separator=',' />
        </h3>
        <h4>{props.updateTime}</h4>
      </div>
      <img src={props.img} alt='lineChart' />
    </div>
  );
};

export default Card;
