import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);


  return (
    <div className="App">
      <Main 
        query={query} 
        setQuery={setQuery} 
        weather={weather} 
        setWeather={setWeather}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default App;
