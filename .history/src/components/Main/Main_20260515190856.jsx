import axios from 'axios';
import React from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
    const KEY = "8de95bd9553e4e2b259970b49fd99741";

    // const getWeather = () => {
    //   axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`)
    //   .then(({ data }) => setWeather(data));
    // }
    const getWeather = () => {
        if (!query) return;
      
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: query,
              appid: KEY,
            },
          }
        )
        .then(({ data }) => setWeather(data))
        .catch((err) => console.log(err.response?.data));
      };

    const date = new Date();

    const formatted = date.toLocaleDateString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

  return (
    <section className='main'>
      <Search onSearch={getWeather}/>
      <Content weather={weather} formatted={formatted}/>
    </section>
  )
}

export default Main
