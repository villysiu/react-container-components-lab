// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({ reviews }) => (
  <div className="review-list">
     
    { reviews.map((movie, idx) => <li key={idx} className="review">{ movie.display_title }: { movie.summary_short } </li>) }
  </div>
)

export default MovieReviews; 