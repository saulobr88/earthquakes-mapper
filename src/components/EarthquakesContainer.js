import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import EarthquakesForm from './EarthquakesForm';
import EarthquakesMap from './EarthquakesMap';
import { fetchQuakes } from '../services/earthquakes';
import { searchQuakes } from '../services/earthquakes';
import { GoogleApiWrapper } from 'google-maps-react';

class EarthquakesContainer extends Component {

    state = {
        quakes: []
    }

    componentDidMount = () => {
        fetchQuakes()
          .then((json) => {
            this.setState({ quakes: json.features }, )
        })
    }

    onFilter = (event) => {
        searchQuakes(event)
          .then((json) => {
            this.setState({ quakes: json.features })
        })
    }

    render() {
        return (
          <div className="EarthquakesContainer">
            <h1><span role="img" aria-label="Globe">🌐</span> Earthquake Mapper</h1> 
            <div className="wrapper">
              <EarthquakesForm onFilter={this.onFilter}/>
              <Route path="/" 
              render={
                  (props) => 
                    <EarthquakesMap google={this.props.google} quakes={this.state.quakes} {...props}/>
                }
              />
            </div>
            <br/>
            <p>
                <strong>This app was created based on Matthew Thorry work.</strong> 
                {' '} Checkout {' '}
                <a href="https://github.com/saulobr88/earthquakes-mapper" 
                target="_blank" rel="noopener noreferrer">My GitHub repo
                </a> for more information about it.
                Feel free to contact me using {' '}
                <a href="https://www.linkedin.com/in/saulo-gomes-61175125" target="_blank" rel="noopener noreferrer">
                LinkedIn</a>.
                </p>
          </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAvJJznuu9FoFqDK9V8CeDVNw5fks7wIo0',
    libraries: ['visualization']
})(EarthquakesContainer);

