import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import App from '../../scenes/HomePage/App';
import ContactUs from '../../scenes/ContactUs';
import Services from '../../scenes/Services';

export default class Router extends Component {
    render() {
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
    
}