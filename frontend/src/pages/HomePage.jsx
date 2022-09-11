import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'


// Constructing the QUERY

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id, attributes {
          title,
          rating,
          body,
        }
      }
    }
  }
`

export default function HomePage() {

const { loading, error, data } = useQuery(REVIEWS)

// Replace this later with real components
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)

  return (
    <div>
      {data.reviews.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          <small>consoles</small>

          <Link to={`/details/${review.id}`}>Read Moore</Link>
        </div>
      ))}
    </div>
  )
}
