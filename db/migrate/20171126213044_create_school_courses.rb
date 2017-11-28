class CreateSchoolCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :school_courses do |t|
      t.belongs_to :school, null: false
      t.belongs_to :course, null: false

      t.timestamps
    end
  end
end
