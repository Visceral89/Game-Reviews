import React from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <div className='side-header'>
        <Link to="/"><h1>Game Reviews</h1></Link>
    </div>
  )
}
