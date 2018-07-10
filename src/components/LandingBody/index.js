import React from "react";
import {Link} from 'react-router-dom';
import "./index.css";

const Home = () => (
    <div className="jumbotron">
      <h1 class="display-4">Welcome to WeConnect!</h1>
      <p class="lead">Your business needs are now one click away...</p>
      <hr class="my-4"></hr>
      <p class="lead">
        <Link class="btn btn-primary btn-lg" to="/register" role="button">SignUp</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
        <Link class="btn btn-primary btn-lg" to="/login" role="button">&nbsp;&nbsp;Login&nbsp;&nbsp;</Link>
      </p>
    </div>
); 
export default Home;