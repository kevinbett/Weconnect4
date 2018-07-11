import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
  const businesses = props.results.map(business => (
    <div className="card-deck row" key={business.id}>
    <div className="card">
      <div className="card-header bg-transparent">{business.name}</div>
      <div className="card-body">
        <p className="card-text">Category {business.category}</p>
        <p className="card-text">Description {business.type}</p>
        <p className="card-text">Location {business.location}</p>
      </div>
      <div className="card-footer">
        <Link to={`profile/${business.id}`} className="btn btn-primary btn-sm float-right">See more</Link>
      </div>
    </div>
  </div>

  ))

  return <div className="row"> <ul>{businesses}</ul></div>

}

export default SearchResults