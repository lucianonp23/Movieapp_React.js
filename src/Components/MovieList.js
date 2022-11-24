

const MovieList = (props) => {
    
    
    return ( 
        <div className="row_posters">
           {props.movies.map((item, index)=> {
            return(
                     
                <img src={item.Poster} alt="Image Poster" className="row_poster"/>
                
            )}
           )} 
            
        </div>
     );
}
 
export default MovieList;