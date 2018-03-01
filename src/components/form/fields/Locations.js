import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLocation } from '../../../actions/index.js';

class LocationSelect extends Component {
  constructor(props) {
    super(props);

    let location = this.props.locations[this.props.value];

    this.state = {
      key: location.key,
      name: location.name,
      address: location.address,
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    let location = {};

    if(e.target.value === '') {
      location = {
        key: e.target.value,
        name: null,
        address: null,
      }
    } else {
      location = this.props.locations[e.target.value];
    }
    this.setState({
      key: e.target.value,
      name: location.name,
      address: location.address,
    }, () => {
      this.props.updateLocation(this.state)
    })
  }

  render() {
    return(
      <select value={this.state.key} onChange={this.onInputChange} className={this.props.className}>
        <option value=''>No Location</option>
          {Object.keys(this.props.locations).map((key) => {
            const location = this.props.locations[key];
            return(
              <option value={key} key={key}>{location.name}</option>
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
