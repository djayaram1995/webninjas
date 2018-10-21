import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Particles from 'react-particles-js'
import App from '../../scenes/HomePage/App';
import ContactUs from '../../scenes/ContactUs';
import Services from '../../scenes/Services';

class Router extends Component {
    componentDidMount() {
        this.unlisten = this.props.history.listen(() => {
          this.props.pathName();
        });
      }
      componentWillUnmount() {
          this.unlisten();
      }
    render() {
        return (
            <div style={{position: "relative", height: "100%"}}>
            <Particles
              style={{"zIndex": "-1", "position": "absolute"}}
              params={{
                "particles": {
                        "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
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
                            "distance": 200,
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
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/services' component={Services} />
                    <Route path='/contactus' component={ContactUs} />
                </Switch>
            </div>
        );
    }
    
}
export default withRouter(Router);