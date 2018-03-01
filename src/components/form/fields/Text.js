import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateText } from '../../../actions/index.js';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.value,
      class: this.props.className,
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    if(this.props.notBlank) {
      if(e.target.value === '') {
        this.setState({
          class: `${this.props.className} is-invalid`
        });
      } else {
        this.setState({
          class: this.props.className
        });
      }
    }

    this.setState({
      text: e.target.value
    }, () => {
      this.props.updateText({
        text: this.state.text,
        name: this.refs.field.name
      });
    });
  }

  render() {
    return(
      <input
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.onInputChange}
        name={this.props.name}
        ref="field"
        className={this.state.class}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateText }, dispatch);
}

export default connect(null, mapDispatchToProps)(Text);
