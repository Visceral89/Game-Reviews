import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'


const REVIEW = gql`
  query GetReview($id:ID!) {
    review(id:$id) {
      data {
        id
        attributes {
          title,
          rating,
          body,
          picture {
            data {
            attributes {
              formats:url
            }
            }
          }
        }
      }
    }
  }
`;

export default function ReviewPage() {

  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id }
  })
  

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>

      <small>console list</small>
      <img src={data.review.data.attributes.picture.data.attributes} alt="" />
      <p>{data.review.data.attributes.body}</p>
    </div>
  )
}

