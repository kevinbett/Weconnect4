import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/index.js';
import RegisterForm from './components/RegistrationForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm'
import RegisterBusinessPage from './components/RegisterBusinessPage/RegisterBusinessPage.js';


const routes = () => {
    return (
        <div>
            <Route exact path='/' component={ LandingPage }/>
            <Route exact path='/register' component={ RegisterForm }/>
            <Route exact path='/login' component={ LoginForm }/>
            <Route exact path='/registerbusiness' component={ RegisterBusinessPage }/>
        </div>
    )
}

 export default routes;
