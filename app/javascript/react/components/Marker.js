import React, {Component} from 'react';

class Marker extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    this.renderMarker()
  }

  componentDidUpdate(prevProps) {
     if ((this.props.map !== prevProps.map) ||
       (this.props.position !== prevProps.position)) {
         this.renderMarker();
     }
   }

 renderMarker() {
    let {
      map, google, position, mapCenter, name
    } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position,
      title: name
    };
    this.marker = new google.maps.Marker(pref);


    this.marker.addListener('click', function(){
      console.log('click')
    })

  }

  render() {
    return null;
  }
}

// let evtNames = ['click', 'mouseover'];
//
// const camelize = function(str) {
//   return str.split(' ').map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join('');
// }

// Marker.propTypes = {
//   position: React.PropTypes.object,
//   map: React.PropTypes.object
// }
export default Marker
