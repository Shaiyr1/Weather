import React from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'

function Main({ query, setQuery, weather, setWeather }) {
  return (
    <section>
      <Search query={query} setQuery={setQuery}/>
      <Content weather={weather} setWeather={setWeather}/>
    </section>
  )
}

export default Main
