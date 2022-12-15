import AddToList from "./AddToList";


const MovieList = (props) => {
    
    
    return (
      <div className="row_posters">
        {props.movies.map((item, index) => {
          return (
            <div className="row_poster_container">
              <img src={item.Poster} alt="Poster" className="row_poster"></img>
              <div className="image_overlay">
                <h2>{item.Title}</h2>
                <p>
                  {" "}
                  <button
                    className="manageButton"
                    onClick={() => props.manageItem(item)}
                  >
                    {props.favoriteComponent}{" "}
                  </button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
}
 
export default MovieList;