import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import Canvas from './Canvas.js';
import Download from 'downloadjs';

import Instructions from './Instructions';
//import Konva from 'konva';

// eslint-disable-next-line
import { faDownload, faSpinner } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class OptionImage extends Component {
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
      <div>
        <div className="signature--container">
          <div className="row justify-content-center">
            <Canvas/>
          </div>
          <p className="text-center">

          </p>
          <div className="row">
            <div className="col">
              <h3>
                Step 1
              </h3>
              <p>Click the button below to download the signature image:</p>
              <a href={this.props.canvas.data} download={this.props.canvas.filename} className="btn btn-primary btn-lg download" role="button" onClick={this.handleDownload}>
                  { this.props.canvas.generating ?
                    <FontAwesomeIcon icon="spinner" spin />
                  :
                    <span>Download <FontAwesomeIcon icon="download"/></span>
                  }
              </a>
            </div>
            <div className="col">
              <h3>
                Step 2
              </h3>
              <p>Insert the downloaded image into your signature in Outlook, following the instructions below:</p>
            </div>
          </div>
        </div>
        <Instructions type="image" />
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

export default connect(mapStateToProps, mapDispatchToProps)(OptionImage);
