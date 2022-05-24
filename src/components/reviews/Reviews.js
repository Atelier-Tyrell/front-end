import React from 'react';
import Ratings from './Ratings';
import ReviewList from './ReviewList';

function Reviews(props) {
  function getReviews(id) {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews?product_id=${id}`, {
      headers: {
        Authorization: process.env.GITTOKEN,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(`review:: ${result}`));
  }

  function postReview(data) {
    fetch('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews', {
      method: 'POST',
      headers: {
        Authorization: process.env.GITTOKEN,
      },
      data: {
        product_id: data.product_id,
        rating: data.rating,
        summary: data.summary,
        body: data.body,
        recommend: data.recommend,
        name: data.name,
        email: data.email,
        photos: data.photos,
        characteristics: data.characteristics,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(`created review:: ${result}`));
  }

  function markReviewAsHelpful(reviewId) {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${reviewId}/helpful`, {
      method: 'PUT',
      headers: {
        Authorization: process.env.GITTOKEN,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(`incremented helpful count of ${reviewId} to ${result}`));
  }

  function reportReview(reviewId) {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${reviewId}/report`, {
      method: 'PUT',
      headers: {
        Authorization: process.env.GITTOKEN,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(`reported review:: ${result}`));
  }

  return (
    <>
      <div>Hello World!</div>
      <div>Here live the reviews!</div>
      <Ratings props={props} />
      <ReviewList props={props}/>
      <button type="submit">More Reviews</button>
      <button type="submit">Add Review</button>
    </>
  );
}

export default Reviews;
