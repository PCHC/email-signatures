import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import Canvas from './Canvas.js';
import Download from 'downloadjs';
//import Konva from 'konva';

// eslint-disable-next-line
import { faDownload, faSpinner, faEnvelope } from '@fortawesome/fontawesome-free-solid';
// eslint-disable-next-line
import brands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../styles/styles.css';

import Form from './form/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload(e) {
    e.preventDefault();
    Download(
      this.props.canvas.data,
      this.props.canvas.filename,
      'image/png'
    );
  }

  render() {

    return (
      <div className="container">
        <h1>PCHC 20th Anniversary Email Signature Generator</h1>
            <p>This tool is designed to help you quickly and easily design an email signature to use during our 20th anniversary. Our goal is to maintain a consistent, professional look.</p>
            <p>Fill our the form below to generate an email signature image, and click the download button when finished.</p>
            <p>If you have questions or trouble using this tool, email Chris at <a href="mailto:cviolette@pchc.com?subject=PCHC20%20Email%20Signature%20Generator%20Feedback">cviolette@pchc.com</a>.</p>
            <p className="text-muted font-italic">For best results, use this app with Google Chrome.</p>
        <div className="card">
          <div className="card-body">
            <Form />
          </div>
        </div>
        <div className="signature--container">
          <div className="row justify-content-center">
            <Canvas/>
          </div>
          <p className="text-center">
            <a href={this.props.canvas.data} download={this.props.canvas.filename} className="btn btn-primary btn-lg download" role="button" onClick={this.handleDownload}>
                { this.props.canvas.generating ?
                  <FontAwesomeIcon icon="spinner" spin />
                :
                  <span>Download <FontAwesomeIcon icon="download"/></span>
                }
            </a>
          </p>
          <p className="text-center">
            <a
              href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2#ID0EAACAAA=2016,_2013"
              className="btn btn-outline-secondary btn-sm"
              target="_blank"
              rel="noopener noreferrer">
                Click here to learn how to edit your email signature.
            </a>
          </p>
        </div>
        <hr />
        <footer className="row text-muted">
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
        </footer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCanvas }, dispatch);
}

function mapStateToProps({ signature, canvas }) {
  return { signature, canvas };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
