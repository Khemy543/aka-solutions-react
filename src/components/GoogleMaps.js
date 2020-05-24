import React, { Component } from 'react';
import { Map, GoogleApiWrapper , InfoWindow, Marker} from 'google-maps-react';

/* const mapStyles = {
  width: '100%',
  height: '295px',
  position:"relative"
   
}; */

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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
      <Map
      google={this.props.google}
        zoom={17}
        style={{
          width:"100%",
          height:"300px",
          position:"static"
        }}
        initialCenter={{ lat: 51.566727, lng: 0.084008 }}
      >
      <Marker
        onClick={this.onMarkerClick}
        name={'374 Ley St '}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
          <a 
          href="https://www.google.com/maps/place/374+Ley+St,+Ilford+IG1+4AE,+UK/@51.5665238,0.0818409,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a6853edb38cf:0x8b8ee4ba5d21a53f!8m2!3d51.5665205!4d0.0840296"
          target="_blank"
          rel="noopener noreferrer"
          >
           View larger map
          </a>
          <br/>
          <a 
          href="https://www.google.com/maps/dir//374+Ley+St,+Ilford+IG1+4AE,+UK/@51.5665205,0.0818409,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8a6853edb38cf:0x8b8ee4ba5d21a53f!2m2!1d0.0840296!2d51.5665205"
          title="Get directions on google maps"
          target="_blank"
          rel="noopener noreferrer"
          >
           Directions
          </a>
        </div>
      </InfoWindow>
      
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDk9Uo4aZ6QosR8NsGqWR1YxTy7bkxgIqE'
})(MapContainer);