import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AllLaunches.scss'; 

const AllLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v5/launches');
        setLaunches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch launches');
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  if (loading) return <div className="loading">Loading launches...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="all-launches">
      <h1>SpaceX Launches</h1>
      <div className="launches-grid">
        {launches.map((launch) => (
          <div key={launch.id} className="launch-card">
            <img 
              src={launch.links.patch.small} 
              alt={`${launch.name} patch`} 
              className="launch-patch"
            />
            <h2>{launch.name}</h2>
            <p className="launch-date">
              {new Date(launch.date_utc).toLocaleDateString()}
            </p>
            <p className={`launch-success ${launch.success ? 'success' : 'failure'}`}>
              {launch.success ? 'Successful' : 'Failed'}
            </p>
            <p className="launch-details">{launch.details}</p>
            {launch.links.webcast && (
              <a 
                href={launch.links.webcast} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="webcast-button"
              >
                Watch Webcast
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLaunches;