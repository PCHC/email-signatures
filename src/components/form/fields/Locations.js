import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLocation } from '../../../actions/index.js';

class LocationSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.value
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      address: e.target.value
    }, () => {
      this.props.updateLocation(this.state.address)
    })
  }

  render() {
    return(
      <select value={this.state.address} onChange={this.onInputChange} className={this.props.className}>
        <option value=''>Select Location:</option>
        {this.props.locations.map((location) => {
          return(
            <option value={location.address} key={location.key}>{location.name}</option>
          )
        })}
      </select>
    )
  }
}

function mapStateToProps({ locations }) {
  return { locations };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelect);
