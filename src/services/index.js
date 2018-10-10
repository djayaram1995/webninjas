import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css';
import logo from '../assets/logo.svg';
import Router from '../services/Routes'

import 'bootstrap/dist/css/bootstrap.css'

class RouterContainer extends Component {
    constructor() {
        super();
        this.state = {
            contactUsStyle: '',
            servicesStyle: ''
        }
    }
    
    pathSet() {
        const pathname = window.location.pathname
        if (pathname === '/') {
            this.setState({
                contactUsStyle: '',
                servicesStyle: ''
            })
        } else if (pathname === '/services') {
            this.setState({
                contactUsStyle: '',
                servicesStyle: 'selected'
            })
        } else if (pathname === '/contactus') {
            this.setState({
                contactUsStyle: 'selected',
                servicesStyle: ''
            })
        }
    }
    render () {
        const { contactUsStyle, servicesStyle } = this.state;
        return (
            <BrowserRouter>
                <div>
                    <div className="titleWebay">
                        <Link to="/" className="d-inline-block">
                            <img src={logo} alt="logo" style={{height: '50px', width: '50px'}} />
                            <div className="d-inline-block spanWeb">Webay</div>
                        </Link>
                        <div className="float-right">
                            <Link to="/services" className={`d-inline-block tab ${servicesStyle}`}>Services</Link>
                            <Link to="/contactus" className={`d-inline-block tab ${contactUsStyle}`}>Contact Us</Link>
                        </div>
                    </div>
                    <Router pathName={() => this.pathSet()}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouterContainer;