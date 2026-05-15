import React from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
    const KEY = "8de95bd9553e4e2b259970b49fd99741";

    const getWeather = () => {
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`)
      .then(({ data }) => setWeather(data));
    }

  return (
    <section className='main'>
      <Search />
      <Content weather={weather} setWeather={setWeather}/>
    </section>
  )
}

export default Main
