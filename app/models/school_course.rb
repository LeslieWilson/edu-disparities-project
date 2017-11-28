class SchoolCourse < ApplicationRecord
  belongs_to :school
  belongs_to :course

  validates :school_id, null: false
  validates :course_id, null: false
end
