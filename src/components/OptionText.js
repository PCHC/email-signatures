import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../actions/index.js';
import Download from 'downloadjs';
import Clipboard from 'clipboard';
import Logo from '../images/pchc20-logo.png';

import Instructions from './Instructions';
//import Konva from 'konva';

// eslint-disable-next-line
import { faDownload, faSpinner, faCopy } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class OptionText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    }

    this.textStyle = {
      fontWeight: 'normal',
      fontSize: '14px',
      fontFamily: 'Calibri, Helvetica, Arial, sans-serif',
      lineHeight: 1.1,
      marginBottom: 0
    };

    const clipboard = new Clipboard('.copy-btn');

    clipboard.on('success', (e) => {
      this.setState({
        copied: true
      });

      e.clearSelection();

      setTimeout(() => {
        this.setState({
          copied: false
        });
      }, 3000);
    });

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
          <div className="row justify-content-center" id="fullsig">
            <div className="signature--text__text" id="sigtext">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={Logo} alt="PCHC20 Logo" />
                    </td>
                    <td>
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
                          207-{this.props.signature.phone}
                          {this.props.signature.ext
                            ? ` ext. ${this.props.signature.ext}`
                            : ''
                          }
                          {this.props.signature.fax
                            ? ` | Fax: 207-${this.props.signature.fax}`
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
                      {this.props.signature.pchcsecure ?
                        <p style={{
                            ...this.textStyle,
                            fontSize: '12px'
                          }}>
                            PCHCSECURE
                        </p>
                      : null }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>
              Step 1
            </h3>
            <p>Click the button below to copy the signature image and text:</p>
            <p className="text-muted"><small>Note: if prompted to allow this webpage to access your clipboard, select <strong>Allow access</strong>.</small></p>
            <a className="btn btn-primary copy-btn mr-2" ref="copy" data-clipboard-target="#sigtext">Copy <FontAwesomeIcon icon="copy" /></a>
            { this.state.copied
              ? <span className="badge badge-success">Copied!</span>
              : null }
          </div>
          <div className="col">
            <h3>
              Step 2
            </h3>
            <p>Paste the copied text and image into your signature in Outlook, following the instructions below:</p>
          </div>
        </div>
        <Instructions type="text" />
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
