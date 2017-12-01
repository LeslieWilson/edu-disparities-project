import React from 'react'

const SergeTile = props => {
  return(
    <div className="serge-tile">
      <h1 className="tile-name">Serge Estany</h1>
      <img className="serge-photo"src="https://i.imgur.com/ieHU8Kom.png" />
      <p className = "tile-content">Growing up in working immigrant household, it was hard to gain access to technology education. In school, there was not much offered as far as computer sciences and technology- maybe a typing course or two but nothing more. Now that technology is being integrated into everyday life, it’s important that schools implement a curriculum that adheres to the blossoming tech industry. Elementary to collegiate-level institutions can offer the appropriate course curriculum that helps students gain the skills required to thrive in the tech oriented industry. Let’s make it happen with the voice of our community.
      </p>

      <a className = "github-link" href = "https://github.com/SergeEstany"> View Serge's Github </a>

    </div>
  )
}

export default SergeTile
