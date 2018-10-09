import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../scenes/HomePage/App';
import ContactUs from '../scenes/ContactUs';
import Services from '../scenes/Services';
import logo from '../assets/logo.svg';
import './Router.css'

const Router = () => {
    return (
        <div>
            <div>
                <div className="titleWebay">
                    <div className="d-inline"><img src={logo} alt="logo" style={{height: '50px', width: '50px'}} /></div>
                    <div className="d-inline spanWeb">Webay</div>
                    
                </div>
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/services' component={Services} />
                    <Route path='/contactus' component={ContactUs} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default Router;