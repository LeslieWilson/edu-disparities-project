class School < ApplicationRecord
  has_many :school_courses
  has_many :courses, through: :school_courses

  validates :name, null: false
end
