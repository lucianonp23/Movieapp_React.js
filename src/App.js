import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import MovieList from './Components/MovieList';
import MoviesHeading from './Components/MoviesHeading';
import SearchBox from './Components/SearchBox';
import AddToList from './Components/AddToList';


function App() {
  
const [movies,setMovies]= useState([]);

const [SearchValue,setSearchValue]= useState('');

const [favorites,SetFavorites]= useState([]);

const AddToList = (movie)=> {
 SetFavorites(movie);
}

  const handleRequest = async (item)=> {
    const url=`http://www.omdbapi.com/?s=${item}&apikey=f2490978`;

    const request= await fetch(url);
    const response= await request.json();
    
    if(response.Search)
    {setMovies(response.Search)}
    
  }

  

  useEffect(()=> {
   handleRequest(SearchValue) 
  },[SearchValue]);

  return (
    <div className="app_movie">
      <div className="heading">
        <MoviesHeading heading={"Movies"}/>
        <SearchBox  setSearchValue={setSearchValue}/>
      </div>
      <div className="movies_list">
        <MovieList movies={movies}  AddToList={AddToList}/>
      </div>
      <div className="favorites">
      <MovieList movies={favorites}/>
      </div>
    </div>
  );
}


export default App;
