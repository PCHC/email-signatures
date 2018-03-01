import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import Download from 'downloadjs';
import Clipboard from 'clipboard';
import Logo from '../images/pchc20-logo.png';
//import Konva from 'konva';

// eslint-disable-next-line
import { faDownload, faSpinner, faCopy } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class OptionText extends Component {
  constructor(props) {
    super(props);

    this.textStyle = {
      fontWeight: 'normal',
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      lineHeight: 1.1,
      marginBottom: 0
    };

    const clipboard = new Clipboard('.copy-btn');

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
            <div className="signature--text__image">
              <img src={Logo} alt="PCHC20 Logo" />
            </div>
            <div className="signature--text__text" id="sigtext">
              <p style={{
                  ...this.textStyle,
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  {this.props.signature.name}
                  {this.props.signature.credentials
                    ? `, ${this.props.signature.credentials}`
                    : ''
                  }
              </p>
              <p style={{
                  ...this.textStyle
                }}>
                  {this.props.signature.title}
              </p>
              { this.props.signature.location.key &&
                <p style={{
                    ...this.textStyle
                  }}>
                    {this.props.signature.location.name}<br/>
                    {this.props.signature.location.address}
                </p>
              }
              <p style={{
                  ...this.textStyle
                }}>
                  {this.props.signature.phone}
                  {this.props.signature.ext
                    ? ` ext. ${this.props.signature.ext}`
                    : ''
                  }
                  {this.props.signature.fax
                    ? ' | Fax: 207-907-7078'
                    : ''
                  }
              </p>
              <p style={{
                  ...this.textStyle
                }}>
                  {this.props.signature.cell
                    ? `${this.props.signature.cell} | `
                    : ''
                  }
                  <a href="https://pchc20.com">pchc20.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card-deck">
            <div className="card">
              <div className="card-header">
                Step 1
              </div>
              <div className="card-body">
                <p>Download a copy of the PCHC20 logo:</p>
                <p><a href={Logo} download className="btn btn-primary" ref="dl">Download <FontAwesomeIcon icon="download" /></a>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                Step 2
              </div>
              <div className="card-body">
                <p>Copy the signature text to paste into your email application:</p>
                <a className="btn btn-primary copy-btn" ref="copy" data-clipboard-target="#sigtext">Copy <FontAwesomeIcon icon="copy" /></a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                Step 3
              </div>
              <div className="card-body">
                <p>Add the image and copied text to your signature in your email application.</p>
              </div>
            </div>
          </div>
        </div>
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCanvas }, dispatch);
}

function mapStateToProps({ signature }) {
  return { signature };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionText);
