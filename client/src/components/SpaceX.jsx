import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/spacex.scss'
export default function SpaceX() {
  const [latestLaunch, setLatestLaunch] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v5/launches/latest')
      .then(response => {
        setLatestLaunch(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching SpaceX data:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!latestLaunch) {
    return <div>Failed to load launch data</div>
  }

  return (
    <div className="spacex-container">
      <h1>SpaceX Latest Launch</h1>
      <div className="launch-card">
        <img 
          src={latestLaunch.links.patch.small} 
          alt="Mission Patch" 
          className="mission-patch"
        />
        <h2>{latestLaunch.name}</h2>
        <p>Date: {new Date(latestLaunch.date_utc).toLocaleDateString()}</p>
        <p>Rocket: {latestLaunch.rocket}</p>
        <p>Success: {latestLaunch.success ? '✅' : '❌'}</p>
        <p>{latestLaunch.details}</p>
        {latestLaunch.links.webcast && (
          <a 
            href={latestLaunch.links.webcast} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="webcast-link"
          >
            Watch Webcast
          </a>
        )}
      </div>
    </div>
  )
}