import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../api'

const Navigation = () => (

  <div className="navbar navbar-expand-lg navbar-light bg-light">
  {
    api.logged_in ? (
      <Link className="navbar-brand" to="/viewbusiness">Home</Link>
    ):
    (<Link className="navbar-brand" to="/">Home</Link>)
  }
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">

        <li className="nav-item">
          <Link className="nav-link" to="/viewbusiness">View Businesses</Link>
        </li>
      </ul>
      {api.logged_in ? (
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link reg" to="/registerbusiness">Register Business <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-right" to="/Search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-right" to="/logout">LogOut</Link>
          </li>
          </ul>
        ): (<div>
          
        </div>)}
    </div>
  </div>

);

export default Navigation;