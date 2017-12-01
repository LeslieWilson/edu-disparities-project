
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

class TitlePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      showVideo: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.state.showVideo == false){
      this.setState({showVideo: true})
    }else {
      this.setState({showVideo: false})
    }
  }

  render(){
    let showButton = <button className="show-video" onClick={this.handleClick}>Show Video</button>
console.log(this.state.showVideo)

    let video;
    if(this.state.showVideo == true){
    video =   <div className="videoOverlay">


    <Iframe url="https://www.youtube.com/embed/u1JfUvEPWwY?modestbranding=1"

      width="100%"
      height="100%"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      />

    </div>
  } else {
    video = <div className="videoOverlay">
            </div>
  }
    return (


      <div className="title">
        <div className="title-text">

          <h2 className= "description-text2">For marginalized communities of color, however, science and technology must actually be liberated and taken back to those communities. We must remove the educational barriers that reproduce two worlds, apart and opposed - the science and technology haves, and have-nots.</h2>

          <h2 className= "description-text3">This Program addresses the front end of the systemic and pipeline problem, by acknowledging that every step in the process needs to be reinvented because change is not happening fast enough. Too many people are being left behind, and this hurts everybody.</h2>



        </div>
        <div className="video-button">
          <h2 className="description-text1">When it comes to technology and education, the United States isn't simply a tale of two cities- it's a tale of two completely different, segregated worlds. For privileged communities, science and technology are liberating forces with open-access that leads to upward social mobility and integration into society.</h2>
          {video}
          {showButton}
        </div>


      </div>
    )
  }
}

export default TitlePage
