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
      <p>{props.name}</p>
      <p>{props.district}</p>
      <p>{props.school_type}</p>
      <p>{props.students}</p>
      <p>{props.location}</p>
      <p>{props.dollars_per_student}</p>
      <p>{props.number_of_ap_classes}</p>
      <p>{props.school_course_names}</p>
      <p>{props.school_course_descriptions}</p>
      {courseInfo}
    </div>
  )
}

export default SchoolInfo
