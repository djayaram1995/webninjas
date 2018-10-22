import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Particles from 'react-particles-js'
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
                <div style={{position: "relative", height: "100%"}}>
                <Particles
              style={{"zIndex": "-1", "position": "absolute"}}
              params={{
                "particles": {
                        "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 2000
                        }
                        },
                        "color": {
                        "value": "#E198C1"
                        },
                        "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#E198C1"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "width": 100,
                            "height": 100
                        }
                        },
                        "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                        },
                        "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                        },
                        "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#E198C1",
                        "opacity": 0.4,
                        "width": 1
                        },
                        "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                        },
                        "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                            "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                        }
                    },
                    retina_detect: true
                }}
            />
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
