import React from 'react';
import './Content.scss';

function Content({ weather, setWeather }) {
    return (
        <section className='content'>
            {JSON.stringify(weather)}
            <div class="location">
                <div class="location__city">{weather.name}, Las Pinas</div>
                <div class="location__date">Monday 30 May</div>
            </div>
            <div class="current">
                <div class="current__temp">15<span>°C</span></div>
                <div class="current__weather">Sunny</div>
                <div class="current__hi-low">13°C / 16°C</div>
            </div>
        </section>
    )
}

export default Content
