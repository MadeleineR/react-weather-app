import React from 'react';
import './Forecast.css';

function Day(props) {

    const dayNames = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag'
    ];

    const windDegreeToDirectionString = (degree) => {
        if ((degree >= 0 && degree <= 23) || (degree >= 337 && degree <= 360)) return "N";
            else if (degree > 23 && degree < 69) return "NO";
            else if (degree > 68 && degree < 114) return "O";
            else if (degree > 113 && degree < 159) return "SO";
            else if (degree > 158 && degree < 204) return "S";
            else if (degree > 203 && degree < 249) return "SW";
            else if (degree > 248 && degree < 294) return "W";
            else if (degree > 293 && degree < 337) return "NW";
    }

    const uviToString = (uvi) => {
        if (uvi < 3) return "niedrig"
        else if (uvi >= 3 && uvi < 6) return "mäßig"
        else if (uvi >= 6 && uvi < 8) return "hoch"
        else if (uvi >= 8) return "sehr hoch"
    }

    const date = new Date(props.day.dt * 1000);

    return <div className="day-container" key={props.index}>
        <h4>{dayNames[date.getDay()]} {date.getDate()}.{date.getMonth()+1}.</h4>
        <div className="day-header">
            <div className="temp-and-icon-container">
                <img className="day-icon" 
                    width="50" 
                    height="50" 
                    src={"http://openweathermap.org/img/wn/" + props.day.weather[0].icon + "@2x.png"} 
                    alt="Wetterbild"/>
                <p className="temperature">{Math.round(props.day.temp.max)}</p>
            </div>
            <div className="day-desc">
                <p className="condition">{props.day.weather[0].description}</p>
            </div>
        </div>
        <div className="day-details">
            <p>
                <span>Bewölkung: {props.day.clouds}%</span>
                { props.day.rain && <span>Regen: {props.day.rain}l</span>}
                <span>Wind: {windDegreeToDirectionString(props.day.wind_deg)} {Math.round(props.day.wind_speed * 3.6)} km/h</span>
                <span>UV-Index: {uviToString(props.day.uvi)}</span>

            </p>
        </div>
    </div>;

}

export default Day;