import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateForm } from '../../../actions/index.js';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      checked: e.target.checked
    }, () => {
      this.props.updateForm({
        payload: this.state.checked,
        name: this.refs.field.name
      });
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
        checked={this.state.checked}
        ref="field"
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateForm }, dispatch);
}

export default connect(null, mapDispatchToProps)(Checkbox);
