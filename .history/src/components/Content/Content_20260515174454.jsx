import React from 'react'

function Content({ weather, setWeather }) {
    return (
        <div>
            {JSON.stringify(weather)}
            <section class="location">
                <div class="city">Manila, Las Pinas</div>
                <div class="date">Monday 30 May</div>
            </section>
            <div class="current">
                <div class="temp">15<span>°C</span></div>
                <div class="weather">Sunny</div>
                <div class="hi-low">13°C / 16°C</div>
            </div>
        </div>
    )
}

export default Content
