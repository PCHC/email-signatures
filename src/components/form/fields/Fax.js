import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFax } from '../../../actions/index.js';

class Fax extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fax: true
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      fax: e.target.checked
    }, () => {
      this.props.updateFax(this.state.fax);
    });
  }

  render() {
    return(
      <input
        type="checkbox"
        onChange={this.onInputChange}
        name={this.props.name}
        className={this.props.className}
        checked={this.state.fax}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFax }, dispatch);
}

export default connect(null, mapDispatchToProps)(Fax);
