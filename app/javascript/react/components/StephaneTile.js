import React from 'react'

const StephaneTile = props => {
  return(
    <div className="stephane-tile">
      <h1 className="tile-name">Stephane Etienne</h1>
      <img className="stephane-photo"src="https://i.imgur.com/hR4EvZTm.jpg" />
      <p className = "tile-content">I am a 24 year old Haitian man living in America. I’m dealing with the ups and downs of life as I head back to school for myself, for a better future. Many people of color come from a background of struggle. But school uplifts us, and takes us a step closer to closer to a better, happier future. Many schools in my neighborhood are not privileged enough to get the computer science classes others have- but comp sci is a great field to participate in. I’ve been lucky to learn programming at Resilient Coders- now I want others to have that same access.

      </p>

      <a className = "github-link" href = "https://github.com/stephaneetienne"> View Stephane's Github </a>

    </div>
  )
}

export default StephaneTile
