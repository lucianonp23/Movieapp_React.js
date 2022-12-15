import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import MovieList from './Components/MovieList';
import MoviesHeading from './Components/MoviesHeading';
import SearchBox from './Components/SearchBox';
import AddToList from './Components/AddToList';
import RemoveFromList from './Components/RemoveFromList';


function App() {
//UseStates used  
const [movies,setMovies]= useState([]);

const [SearchValue,setSearchValue]= useState('');

const [favorites,SetFavorites]= useState([]);

//Functions to add/remove item from lists
const addList = (movie)=> {
  const newFavoriteList=[...favorites,movie];
  SetFavorites(newFavoriteList);
  saveOnLocalStorage(newFavoriteList);
}

const removeFromList= (movie)=>{
  const newMovieArray= favorites.filter((item)=> item.imdbID !== movie.imdbID)
  
  SetFavorites(newMovieArray);
  saveOnLocalStorage(newMovieArray);
  }

  //Save to localStorage
const saveOnLocalStorage = (item)=>{
  localStorage.setItem("react-movieapp",JSON.stringify(item));
}  

//Render localstorage data on start
useEffect(()=> {
  const getFavorites = JSON.parse(localStorage.getItem("react-movieapp"))
  
  SetFavorites(getFavorites);
},[]);




//Fetch request on API
  const handleRequest = async (item)=> {
    const url=`https://www.omdbapi.com/?s=${item}&apikey=f2490978`;

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
        <MovieList movies={movies} favoriteComponent={<AddToList/>} manageItem={addList}/>
      </div>
      <div className="favorites">
      <MoviesHeading heading={"Favorites"}/>
      <MovieList movies={favorites} favoriteComponent={<RemoveFromList/>} manageItem={removeFromList} />
      </div>
    </div>
  );
}


export default App;
