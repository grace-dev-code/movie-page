import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';


// API - Application Programming Interface
//       a set of rules that allows one software application to talk to another 


// Debounce - 
      // when we type something, we send a request to search for every
      // letter that we type in, which this will create server exaust and possibly 
      // crash API
//  So debounce can be used in the app to restrict the request to a few letters per time
//  Debouncing is delying the request until the user has stopped typing for a set amount of time
//  This will decrease the frequency of API calls


const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}



const App = () => {
  const [searchTerm, setsearchTerm] = useState('');

  const [errorMessage , setErrorMessage] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');




  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try{
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      // encodeURIComponent is helping to convert a string into website links that can be used as URI
      
      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      setMovieList(data.results || []);
    
    } catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }

    finally{
      setIsLoading(false);
    }
  }
  // Use effect runs after component renders
  // Dependency arrary controls WHEN it runs
  // No dep arrary -> run every render
  // Empty arrary -> run only once after first render
  // arrary with specific value -> ex: [searchTerm] runs whenever search Term changes
  

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);


  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]); 

  return (
    <main>
      <div className='wrapper'>

        <header className= "text-black p-4">
          {/* Put folder in Public because react has to import img from src*/}
          <img src='/assets/hero.png' alt='hero banner' className='max-w-40 mx-auto'></img>
          <div className="mx-auto flex max-w-md justify-center items-center">
            <h1 className="text-4xl text-center font-bold">
              <span className='text-gradient text-5xl'>CSO</span> Player's Page
            </h1>
          </div>
        </header>


        <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>

        <section className='all-movies'>
          <h2 className='mt-10'> All Movies</h2>
          
          {isLoading ? (
            <Spinner />
          ): errorMessage ? (
            <p className='text-red-500'> {errorMessage} </p>
          ) : (
            <ul>
              <div className='movie-grid'>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}

              </div>
            </ul>
          )}
        </section>


      </div>
    </main>
  )
}

export default App