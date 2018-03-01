import React, {Component} from 'react';
import { connect } from 'react-redux';
import Text from './fields/Text';
import Fax from './fields/Fax';
import Locations from './fields/Locations';

class SignatureForm extends Component {
  render() {
    return (
      <div className="form">
        <div className="form-row">
          <div className="form-group col-9">
            <label htmlFor="name" className="">Your Name</label>
            <Text name="name" placeholder="Your Name" className="form-control" value={this.props.signature.name} />
          </div>
          <div className="form-group col-3">
            <label htmlFor="name" className="">Your Credentials (optional)</label>
            <Text name="credentials" placeholder="Your Credentials" className="form-control" value={this.props.signature.credentials} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="">Job Title</label>
          <Text name="title" placeholder="Job Title" className="form-control" value={this.props.signature.title} />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="">Location</label>
          <Locations className="form-control" value={this.props.signature.address} />
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="phone" className="">Work Phone</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">207-</div>
              </div>
              <Text name="phone" placeholder="Work Phone" className="form-control" value={this.props.signature.phone} />
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
          </div>
          <div className="form-group col-2">
            <label htmlFor="fax" className="">Include Fax?</label>
            <Fax name="fax" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cell" className="">Cell Phone</label>
          <Text name="cell" placeholder="Cell Phone" className="form-control" value={this.props.signature.cell} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ signature }) {
  return { signature };
}

export default connect(mapStateToProps)(SignatureForm);
