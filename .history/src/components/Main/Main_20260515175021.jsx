import React from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
  return (
    <section className='main'>
      <Search query={query} setQuery={setQuery} setWeather={setWeather}/>
      <Content weather={weather} setWeather={setWeather}/>
    </section>
  )
}

export default Main
