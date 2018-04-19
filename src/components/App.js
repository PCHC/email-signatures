import React, { Component } from 'react';

import Form from './form/Form';

// eslint-disable-next-line
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
// eslint-disable-next-line
import brands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../styles/styles.css';

export default class App extends Component {
  render() {

    return (
      <div className="container">
        <h1>PCHC 20th Anniversary Email Signature Generator</h1>
        <p>This tool is designed to help you quickly and easily design an email signature to use during our 20th anniversary. Our goal is to maintain a consistent, professional look.</p>
        <p>Fill out the form below to generate an email signature, then follow the instructions at the bottom of this page.</p>
        <p>If you have questions or trouble using this tool, email Chris at <a href="mailto:cviolette@pchc.com?subject=PCHC20%20Email%20Signature%20Generator%20Feedback">cviolette@pchc.com</a>.</p>
        <div className="card">
          <div className="card-body">
            <Form />
          </div>
        </div>
        {this.props.children}
        <hr />
        <footer className="text-muted">
          <div className="row">
            <div className="col">
              <a
                className="btn btn-link text-muted"
                href="https://github.com/PCHC/email-signatures/">
                  <FontAwesomeIcon icon={['fab', 'github']} /> See how this was built
              </a>
            </div>
            <div className="col text-right">
              <a
                className="btn btn-link text-muted"
                href="mailto:cviolette@pchc.com?subject=PCHC20%20Email%20Signature%20Generator%20Feedback">
                  <FontAwesomeIcon icon="envelope" /> Feedback
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p>Version 2.8.3</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
