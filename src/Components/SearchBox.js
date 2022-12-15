const SearchBox = (props) => {
    return ( 
        <input   className="search_place" placeholder="Type your search ..." onChange={(e)=> props.setSearchValue(e.target.value)} />
                    
     );
}
 
export default SearchBox;