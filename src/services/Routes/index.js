import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
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
export default withRouter(Router);