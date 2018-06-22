import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/index.js';

const routes = () => {
    return (
        <div>
            <Route exact path='/' component={ LandingPage }/>
        </div>
    )
}

 export default routes;
