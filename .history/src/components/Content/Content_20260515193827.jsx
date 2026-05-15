import React from 'react';
import './Content.scss';

function Content({ weather, formatted, console.error(); }) {
    if (error)

    return (
        <section className='content'>
            {weather.length === 0 ? (<p className='content__text'>Погода появится здесь</p>) :
                <>
                    <div className="location">
                        <div className="location__city">{weather.name}, {weather?.sys?.country}</div>
                        <div className="location__date">{formatted}</div>
                    </div>
                    <div className="current">
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
