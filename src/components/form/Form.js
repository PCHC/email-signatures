import React, {Component} from 'react';
import { connect } from 'react-redux';
import Text from './fields/Text';
import Fax from './fields/Fax';
import PchcSecure from './fields/PchcSecure';
import Locations from './fields/Locations';

class SignatureForm extends Component {
  render() {
    return (
      <div className="form">
        <div className="form-row">
          <div className="form-group col-9">
            <label htmlFor="name" className="">Your Name <span className="text-danger">*</span></label>
            <Text name="name" placeholder="Your Name" className="form-control" value={this.props.signature.name} notBlank={true} />
              <div className="invalid-tooltip">
                Name cannot be blank.
              </div>
          </div>
          <div className="form-group col-3">
            <label htmlFor="name" className="">Your Credentials</label>
            <Text name="credentials" placeholder="Your Credentials" className="form-control" value={this.props.signature.credentials} />
            <small className="form-text text-muted">Optional</small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="">Job Title <span className="text-danger">*</span></label>
          <Text name="title" placeholder="Job Title" className="form-control" value={this.props.signature.title} notBlank={true} />
          <div className="invalid-tooltip">
            Job title cannot be blank.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="">Location</label>
          <Locations className="form-control" value={this.props.signature.location.key} />
          <small className="form-text text-muted">Optional</small>
        </div>
        <div className="form-row">
          <div className="form-group col-4">
            <label htmlFor="phone" className="">Work Phone <span className="text-danger">*</span></label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">207-</div>
              </div>
              <Text name="phone" placeholder="Work Phone" className="form-control" value={this.props.signature.phone} notBlank={true} />
              <div className="invalid-tooltip">
                Work phone cannot be blank.
              </div>
            </div>
          </div>
          <div className="form-group col-4">
            <label htmlFor="ext" className="">Work Phone Extension</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">ext.</div>
              </div>
              <Text name="ext" placeholder="Work Phone Extension" className="form-control" value={this.props.signature.ext} />
            </div>
            <small className="form-text text-muted">Optional</small>
          </div>
          <div className="form-group col-4">
            <label htmlFor="fax" className="">Fax</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">207-</div>
              </div>
              <Text name="fax" placeholder="Fax" className="form-control" value={this.props.signature.fax} />
            </div>
            <small className="form-text text-muted">Optional</small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cell" className="">Cell Phone</label>
          <Text name="cell" placeholder="Cell Phone" className="form-control" value={this.props.signature.cell} />
          <small className="form-text text-muted">Optional</small>
        </div>
        <div className="form-group">
          <div className="form-check">
            <PchcSecure name="pchcsecure" className="form-check-input" />
            <label htmlFor="pchcsecure" className="form-check-label">Include PCHCSECURE?</label>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ signature }) {
  return { signature };
}

export default connect(mapStateToProps)(SignatureForm);
