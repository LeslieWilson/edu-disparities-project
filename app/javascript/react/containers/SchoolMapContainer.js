import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from '../components/GoogleMap';
import Marker from '../components/Marker';
import SchoolInfo from '../components/SchoolInfo'

class SchoolMapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      allSchools: [],
      renderredSchools: [],
      selectedSchools: ""
    }
    this.handleSchoolSelect = this.handleSchoolSelect.bind(this)
    // this.changeRenderredSchools = this.changeRenderredSchools.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/schools`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {}
    })
    .then (response => {
      if (response.ok) {
        return response;
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        allSchools: body,
        renderredSchools: body,
      })
    })
    .catch(error => console.error('Error in fetch: ${error.message}'));
  }

  // changeRenderredSchools(){
  //   let selectedSchool;
  //   if (this.state.selectedSchools !== "") {
  //     selectedSchool = this.state.allSchools.filter(school => school.name == this.state.selectedSchools
  //     )
  //     this.setState({
  //       renderredSchools: selectedSchool
  //     })
  //   }
  //   console.log(this.state.renderredSchools)
  //   console.log(selectedSchool)
  // }

  handleSchoolSelect(event){console.log(this.state.selectedSchools)
    let value = event.target.value
    this.setState({
      selectedSchools: value
    })
    // this.changeRenderredSchools()
  }

  render(){console.log(this.state)
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    let selectedSchool = "";
    let schoolInfo;
    if (this.state.selectedSchools !== "") {
      selectedSchool = this.state.allSchools.filter(school => school.name == this.state.selectedSchools
      )}
    if (selectedSchool !== ""){
      schoolInfo = selectedSchool.map(school => {
        return(
        <SchoolInfo
          key = {school.id}
          name = {school.name}
          district = {school.district}
          school_type = {school.school_type}
          students = {school.students}
          location = {school.location}
          dollars_per_student = {school.dollars_per_student}
          number_of_ap_classes = {school.number_of_ap_classes}
          school_course_info = {school.school_courses}
        />
      )
      })
    }
    console.log(selectedSchool)


    let selectSchool =  <select value={this.state.selectedSchool} onChange={this.handleSchoolSelect}>
    <option disabled selected value> -- Select a School -- </option>
    {this.state.renderredSchools.map(school => <option key={school.id} value={school.name}>{school.name}</option>
    )};
    </select>

  let markers = this.state.allSchools.map(school => {
    let pos = {lat: school.lat, lng: school.lng}
    return(
      <Marker
        key = {school.id}
        position = {pos}
        name = {school.name}
      />
    )
  })

    return(
      <div>
        <div className='empty-space'>
        </div>
        <div className='map-content'>
          <h1 className="map-title"> Science Curricula Search-Engine</h1>
          <p>This will be a dynamic database where parents can search and compare science classes and curricula being offered to their children, especially computer science, to compare what schools in other (perhaps wealthier) neighborhoods are offering children.</p>
        </div>
        <div className='map-container'>
          <div className='school-info-container'>
            {selectSchool}
            {schoolInfo}
          </div>
          <GoogleMap google={this.props.google}>
            {markers}
          </GoogleMap>
        </div>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCe7WjZWkloO3oaep__iTbZ4xc0Cd7iymc')
})(SchoolMapContainer)
