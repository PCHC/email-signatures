import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import Canvas from './Canvas.js';
import Download from 'downloadjs';
//import Konva from 'konva';

// eslint-disable-next-line
import { faDownload, faSpinner } from '@fortawesome/fontawesome-free-solid';
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
        <Form />
        <div className="jumbotron">
          <div className="row justify-content-center">
            <Canvas/>
          </div>
          <div className="row justify-content-center">
            <a href={this.props.canvas.data} download={this.props.canvas.filename} className="btn btn-primary btn-lg download" role="button" onClick={this.handleDownload}>
              { this.props.canvas.generating ?
                <FontAwesomeIcon icon="spinner" spin />
              :
                <span>Download <FontAwesomeIcon icon="download"/></span>
              }
            </a>
          </div>
        </div>
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
