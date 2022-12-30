import React from 'react';
import './Year.css';

import Day from '../day/Day';

/** Renders 365 days */

const Year = (props) => {


    function day_name(index, type = null){
        if(type){
            if(index == 0) return 'M'
            if(index == 1) return 'T'
            if(index == 2) return 'W'
            if(index == 3) return 'T'
            if(index == 4) return 'F'
            if(index == 5) return 'S'
            if(index == 6) return 'S'
        }
        if(index == 0) return 'Monday'
        if(index == 1) return 'Tuesday'
        if(index == 2) return 'Wednesday'
        if(index == 3) return 'Thursday'
        if(index == 4) return 'Friday'
        if(index == 5) return 'Saturday'
        if(index == 6) return 'Sunday'
    }

    
    
    const now = new Date();
    const from = new Date('12/09/2022');
    const summer = new Date('06/21/2023');
    const dayDiff = ((summer.getTime() - from.getTime()) / (1000 * 3600 * 24)).toFixed();
    const left = ((summer.getTime() - now.getTime()) / (1000 * 3600 * 24)).toFixed();

    let els = [];
    let index = 0;
    for(let i = 0; i < dayDiff; i++){
        if(index === 7) index = 0;
        els.push(<div data-index={i} key={Math.random()} className="oneDayStack"><p key={Math.random()} >{day_name(index, true)}</p><Day color={dayDiff-left==i ? "lightblue" : ""} dispDayDiff={dayDiff-i} /></div>);
        index++;
    }
  return (
    <div className="sideDisp">
    <div className='year'>
        {els}
    </div>
        <div>
            Days left: {left}
            <hr></hr>
            Weeks left: {(left / 7).toFixed(1)}
            <hr></hr>
        </div>
    </div>
  )
}

export default Year;