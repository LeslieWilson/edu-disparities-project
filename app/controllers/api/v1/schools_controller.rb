class Api::V1::SchoolsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    schools = School.all
    object = schools.map do |school|
      courses = school.courses.map do |course|
        {
          id: course.id,
          name: course.name,
          description: course.description
        }
      end
      {
        id: school.id,
        name: school.name,
        district: school.district,
        school_type: school.school_type,
        students: school.students,
        location: school.location,
        lat: school.lat,
        lng: school.lng,
        dollars_per_student: school.dollars_per_student,
        number_of_ap_classes: school.number_of_ap_classes,
        school_courses: courses
      }
    end
  render json: object
  end
end
