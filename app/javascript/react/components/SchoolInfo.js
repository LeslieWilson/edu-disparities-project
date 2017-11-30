import React from 'react';
import CourseInfo from './CourseInfo'

const SchoolInfo = props => {
  let courseInfo = props.school_course_info.map(course => {
    return(
      <CourseInfo
        key={course.id}
        name={course.name}
        description={course.description}
      />
    )
  })
  return(
    <div className="school-info">

      <h2>{props.name} {props.school_type}</h2>
      <p>{props.location}</p>
      <p>{props.district} School District</p>
      <h3>Total Students:</h3>
      <p>{props.students}</p>
      <h3>Total amount spent per student:</h3>
      <p>${props.dollars_per_student}</p>
      <h3>Number of AP classes:</h3>
      <p>{props.number_of_ap_classes}</p>
      <h2>Computer Science Classes available:</h2>
      {courseInfo}
    </div>
  )
}

export default SchoolInfo
