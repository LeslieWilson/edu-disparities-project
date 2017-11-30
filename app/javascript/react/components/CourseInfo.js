import React from 'react'

const CourseInfo = props => {
  return(
    <div className="course-info">
      <h4>{props.name}</h4>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default CourseInfo
