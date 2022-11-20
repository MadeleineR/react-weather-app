import React, { useEffect, useState } from "react";
import Forecast from "./Forecast";

function Weather() {

    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=48.5981908&lon=15.2031975&exclude=minutely,hourly&units=metric&lang=de&appid=089ec1a25f6d976372fb5e5fefb4d362")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setForecast(data.daily);
        });
    }, []);

    return (
        <div>
            <Forecast data={forecast} />
        </div>
    )

}

export default Weather;