import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../scenes/HomePage/App';
import ContactUs from '../scenes/ContactUs';
import Services from '../scenes/Services';
import './Router.css'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/services' component={Services} />
                <Route path='/contactus' component={ContactUs} />
            </Switch>
        </div>
    );
}
export default Router;