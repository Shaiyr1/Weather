import React from 'react';
import './Content.scss';

function Content({ weather, setWeather }) {
    return (
        <section className='content'>
            {JSON.stringify(weather)}
            <div classN="location">
                <div classN="location__city">{weather.name}, {weather?.sys?.country}</div>
                <div classN="location__date">Monday 30 May</div>
            </div>
            <div class="current">
                <div classN="current__temp">{(weather.main?.temp -273.15).toFixed(0.1)}<span>°C</span></div>
                <div classN="current__weather">{weather.weather[0].description}</div>
                <div classN="current__hi-low">{(weather.main?.temp_min -273.15).toFixed(0.1)}°C / {(weather.main?.temp_max -273.15).toFixed(0.1)}°C</div>
            </div>
        </section>
    )
}

export default Content
