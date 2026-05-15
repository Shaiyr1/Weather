import React from 'react'

function Content({ weather, setWeather }) {
  return (
    <div>
      {JSON.stringify(weather)}
    </div>
  )
}

export default Content
