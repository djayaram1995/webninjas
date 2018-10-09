import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css';
import logo from './assets/logo.svg';
import Router from './services/Router';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

export const RouterContainer = () => (
    <BrowserRouter>
        <div>
            <div className="titleWebay">
                <Link to="/" className="d-inline">
                    <img src={logo} alt="logo" style={{height: '50px', width: '50px'}} />
                    <div className="d-inline spanWeb">Webay</div>
                </Link>
                <div className="float-right">
                    <Link to="/services" className="d-inline tab">Services</Link>
                    <Link to="/contactus" className="d-inline tab">Contact Us</Link>
                </div>
            </div>
            <Router />
        </div>
        
    </BrowserRouter>
                    
)
ReactDOM.render(<RouterContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
