# Earthquakes Mapper 🗺
React App without backend persistence. Users can view earthquakes from around the world on a Google map and filter based on specific times and earthquake magnitude. Earthquake information is from the [USGS API](https://earthquake.usgs.gov/fdsnws/event/1/).

### Components
it is fairly simple React Web App. The components are `EarthquakesContainer`, which has all other components as children. The children are `EarthquakesForm` with `EarthquakesMap`. `EarthquakesMap` is a implementation of Google Map, with Markers and InfoWindow, which is the information that is displayed when a user clicks on the earthquake icon on the map.

`EarthquakesContainer` makes use of the [`google-maps-react`](https://www.npmjs.com/package/google-maps-react) component. For the map is utilized a terrain Google Map, Markers, PopUps and a Heatmap layer. Google Maps API documentation [here](https://developers.google.com/maps/documentation/javascript/).

Each earthquake data point the map receives is plotted on the map based on its coordinates, weighted (for Heatmap) based on its magnitude, and given a title (for popup).

### Services
Services holds the `fetch` requests to the USGS API. There `fetchQuakes` (which returns all earthquakes for last 30 days) and `searchQuakes` (which returns all earthquakes that meet user-specified criteria) functions. The results of the fetch requests are stored in the `quakes` state in the `EarthquakesContainer`. 

### Screenshots
![Default page](./screenshots/01-defaultView)
![Search Result](./screenshots/02-magnitude7)

### Original Autor
[Matthew Thorry](https://github.com/mthorry)