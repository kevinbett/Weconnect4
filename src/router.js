import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/index.js';
import RegistrationForm from './components/RegistrationForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm'

const routes = () => {
    return (
        <div>
            <Route exact path='/' component={ LandingPage }/>
            <Route exact path='/register' component={ RegistrationForm }/>
            <Route exact path='/login' component={ LoginForm }/>
        </div>
    )
}

 export default routes;
