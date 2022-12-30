import React from 'react';
import './Day.css';

const Day = (props) => {

  const clickHanler = (event) => {
    console.log(event.target.textContent);
  }

    let style = {
        backgroundColor: props.color
    }

  return (
    <div>
        <button onClick={clickHanler} className="day" style={style}>{props.dispDayDiff}</button>
    </div>
  )
}

export default Day;