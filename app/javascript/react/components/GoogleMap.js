import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocation: {
      lat: '',
      lng: ''
      }
    }
    this.recenterMap = this.recenterMap.bind(this)
    this.loadMap = this.loadMap.bind(this)
  }

  componentDidMount() {
  this.setState({
      currentLocation: {
          lat: 42.3600825,
          lng: -71.05888010000001
      }
    })
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }



loadMap() {
  if (this.props && this.props.google) {
    // google is available
    const {google} = this.props;
    const maps = google.maps;

    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);

    let {initialCenter, zoom} = this.props;
    const {lat, lng} = this.state.currentLocation;
    const center = new maps.LatLng(lat, lng);
    const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
    this.map = new maps.Map(node, mapConfig);
  }
}

renderChildren() {
  const {children} = this.props;

  if (!children) return;

  return React.Children.map(children, c => {
    return React.cloneElement(c, {
      map: this.map,
      google: this.props.google,
      mapCenter: this.state.currentLocation
    });
  })
}

  render(){
    return(
      <div className="google-map" ref='map'>
          Loading map...
          {this.renderChildren()}
      </div>
    )
  }
}

GoogleMap.defaultProps = {
  zoom: 8,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  centerAroundCurrentLocation: true
}

// GoogleMap.propTypes = {
// google: React.PropTypes.object,
// zoom: React.PropTypes.number,
// initialCenter: React.PropTypes.object
// }



export default GoogleMap
