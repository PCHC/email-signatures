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
                Click here to learn how to edit your email signature in Outlook.
            </a>
          </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(OptionImage);
