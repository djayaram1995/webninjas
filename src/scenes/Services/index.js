import React, { Component } from 'react';
import logo from '../../assets/logo.svg'
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>sr/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stop Bitching
          </a>
        </header>
      </div>
    );
  }
}

export default ContactUs;
