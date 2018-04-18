import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePchcSecure } from '../../../actions/index.js';

class PchcSecure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pchcsecure: true
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      pchcsecure: e.target.checked
    }, () => {
      this.props.updatePchcSecure(this.state.pchcsecure);
    });
  }

  render() {
    return(
      <input
        type="checkbox"
        onChange={this.onInputChange}
        name={this.props.name}
        id={this.props.name}
        className={this.props.className}
        checked={this.state.pchcsecure}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePchcSecure }, dispatch);
}

export default connect(null, mapDispatchToProps)(PchcSecure);
