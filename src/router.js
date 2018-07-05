import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/index.js';
import RegisterBusinessPage from './components/RegisterBusinessPage/RegisterBusinessPage.js';
import RegistrationPage from './components/RegistrationPage/index.js';
import LoginPage from './components/LoginPage/index.js';
import BusinessPage from './components/BusinessPage/index.js';
import ResetPasswordPage from './components/ResetPasswordPage';
import NewPasswordPage from './components/NewPasswordPage/index.js';
import BusinessProfilePage from './components/BusinessProfilePage/index.js';
import EditBusinessForm from './components/EditBusinessBody/index.js';
import AddReviewForm from './components/AddReviewForm/index.js';
import LogoutPage from './components/LogoutPage/index.js';


const routes = () => {
    return (
        <div>
            <Route exact path='/' component={ LandingPage }/>
            <Route exact path='/register' component={ RegistrationPage }/>
            <Route exact path='/login' component={ LoginPage }/>
            <Route exact path='/registerbusiness' component={ RegisterBusinessPage }/>
            <Route exact path='/viewbusiness' component = { BusinessPage }/>
            <Route exact path='/resetpassword' component = { ResetPasswordPage }/>
            <Route exact path= '/newpassword' component = { NewPasswordPage } />
            <Route exact path= '/profile/:id' component = { BusinessProfilePage } />
            <Route exact path= '/editbusiness' component = { EditBusinessForm} />
            <Route exact path= '/addreview' component= { AddReviewForm } />
            <Route exact path= '/logout' component= { LogoutPage } />
        </div>
    )
}

 export default routes;
