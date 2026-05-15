import React from 'react'
import './Content.scss';

function Content({ weather, setWeather }) {
    return (
        <section>
            {JSON.stringify(weather)}
            <div class="location">
                <div class="city">Manila, Las Pinas</div>
                <div class="date">Monday 30 May</div>
            </div>
            <div class="current">
                <div class="temp">15<span>°C</span></div>
                <div class="weather">Sunny</div>
                <div class="hi-low">13°C / 16°C</div>
            </div>
        </section>
    )
}

export default Content
