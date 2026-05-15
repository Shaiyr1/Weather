import axios from 'axios';
import React from 'react'
import './Search.scss'

function Search({ query, setQuery, setWeather }) {


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
