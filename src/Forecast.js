import React from 'react';
import './Forecast.css';
import Day from './Day';

function Forecast(props) {

    return (
        <div className="forecast-container">
            {
                props.data.map(
                    (day, index) => <Day key={index} day={day}></Day>
                )
            }
        </div>
    )

}

export default Forecast;