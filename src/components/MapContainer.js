import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    initPos = {
        lat: 37.762391,
        lng: -122.439192
      }


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map 
                google={this.props.google} 
                zoom={12}
                initialCenter={ this.initPos }
                style={style}
                onClick={this.onMapClicked}
                >
                { /* Markers on Map */ }
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    onClick={this.onMarkerClick}
                    position={{lat: 37.778519, lng: -122.405640}} />
                <Marker
                    name={'Dolores park'}
                    onClick={this.onMarkerClick}
                    position={{lat: 37.759703, lng: -122.428093}} />
                <Marker />
                <Marker
                    name={'Your position'}
                    onClick={this.onMarkerClick}
                    position={ this.initPos }
                    />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

const LoadingContainer = (props) => (<div>Fancy loading container!</div>);

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAvJJznuu9FoFqDK9V8CeDVNw5fks7wIo0'),
    LoadingContainer: LoadingContainer
  })(MapContainer)