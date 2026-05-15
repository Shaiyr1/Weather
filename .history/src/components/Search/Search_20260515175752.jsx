import axios from 'axios';
import React from 'react'
import ''

function Search({ query, setQuery, setWeather }) {
  const KEY = "8de95bd9553e4e2b259970b49fd99741";

  const getWeather = () => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}`)
    .then(({ data }) => setWeather(data));
  }

  return (
    <section className='wrapper'>
      <input 
        className='search-box' 
        onChange={(e) => setQuery(e.target.value)} 
        type="text"
        placeholder='Поиск города'
      />
      <button onClick={getWeather}>search</button>
    </section>
  )
}

export default Search
