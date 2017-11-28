import React from 'react'

const CourseInfo = props => {
  return(
    <div className="course-info">
      <h1>{props.name}</h1>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default CourseInfo
