import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../scenes/HomePage/App';
import ContactUs from '../scenes/ContactUs';
import Services from '../scenes/Services'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/services' component={Services} />
                <Route path='/contactus' component={ContactUs} />
            </Switch>
        </BrowserRouter>
    );
}
export default Router;