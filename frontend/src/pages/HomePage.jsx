import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
//import useFetch from '../hooks/useFetch'


// Constructing the QUERY

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

export default function HomePage() {

const { loading, error, data } = useQuery(REVIEWS)

// Replace this later with real components
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      {data.reviews.data.map((review) => (
        <div key={review.attributes.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>console list</small>
          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
  /* OLD RETURN !!!
  return (
    <div>
      {data.data.map(review => (
        <div key={data.data.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          <small>consoles</small>

          <Link to={`/details/${review.id}`}>Read Moore</Link>
        </div>
      ))}
    </div>
  )
}

*/ 
