import { useState } from 'react';
import Search from './components/Search';

const API_BASE_URL = 'https://api.themovidb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {

    } catch (error) {
      console.error(`Error fetching moveis: ${error}`)
    }
  }

  useEffect(() => {

  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner"/>
            <h1>  
            Find <span className="text-gradient">Movies</span> You'll Love Without the Hassle
            </h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  )
}

export default App
