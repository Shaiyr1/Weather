import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);

  return (
    <div className="App">
      <Main query={query} setQuery={setQuery} weather={}/>
    </div>
  );
}

export default App;
