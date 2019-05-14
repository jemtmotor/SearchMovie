import React from 'react';
import MovieFinder from './MovieFinder'
import MovieResults from './MovieResults'
import axios from 'axios'



class MovieSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText: '',
            movies:[]
        }
    }
    
    onChange = (event) => {
        //event.currentTarget.value
        this.setState({
            searchText:event.currentTarget.value
        })
    }

    onSearch = async () => {
        const url = `https://www.omdbapi.com/?apikey=606e4e56&s=${this.state.searchText}`;
       try{
        
        const response = await axios.get(url);
        console.log(response);
        this.setState({
            movies:response.data.Search
        })

       }catch (err){
           console.error(err);
       }
    }

    render(){
        return(<div>
            <MovieFinder searchText={this.state.searchText} 
                            onChange = {this.onChange}
                            onSearch={this.onSearch}/>
            <MovieResults movies = {this.state.movies}/>
        </div>)
    }
}

export default MovieSearch;