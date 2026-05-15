import React from 'react';
import './Content.scss';

function Content({ weather, setWeather }) {
    const date = new Date();

    const formatted = date.toLocaleDateString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    return (
        <section className='content'>
            {weather.length === 0 ? ("Погода появится здесь") :
                <>
                    <div className="location">
                        <div className="location__city">{weather.name}, {weather?.sys?.country}</div>
                        <div className="location__date">{formatted}</div>
                    </div>
                    <div class="current">
                        <div className="current__temp">{(weather.main?.temp - 273.15).toFixed(0.1)}<span>°C</span></div>
                        <div className="current__weather">{weather?.weather?.[0].description}</div>
                        <div className="current__hi-low">{(weather.main?.temp_min - 273.15).toFixed(0.1)}°C / {(weather.main?.temp_max - 273.15).toFixed(0.1)}°C</div>
                    </div>
                </>

            }

        </section>
    )
}

export default Content
