import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LStiARxu1p6f7Z0tyxlYRh5uYdhZYT8j';
const URI = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchTerm: "",  
            reviews: []
        };
    }
    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
      
        let query = this.state.searchTerm
        fetch(URI + query + `&api-key=${NYT_API_KEY}`)
          .then(response => response.json())
          .then(movieData => this.setState({ reviews: movieData.results }))
    }
          
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                <input type="submit" value="Find movies" />
            </form>
        
          <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
        </div>
        )
      }
    }
    
    export default SearchableMovieReviewsContainer; 