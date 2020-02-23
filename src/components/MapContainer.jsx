import React from 'react'
import logo from '../images/TSUNAMI-LOGO-SMALL.png';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{ lat: 30.5, lng: -91 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            position={{ lat: 30.242321, lng: -90.916589 }}
            name={'Gonzales'}
            icon={logo}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </React.Fragment>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAx_lQOJ_Q1Eglz4hEBMJ9N3AeJ9i9eICU'
})(MapContainer);