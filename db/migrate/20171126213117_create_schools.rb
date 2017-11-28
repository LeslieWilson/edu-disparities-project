class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.string :name, null: false
      t.string :district
      t.string :school_type
      t.integer :students
      t.string :location
      t.decimal :lat
      t.decimal :lng
      t.integer :dollars_per_student
      t.string :number_of_ap_classes

      t.timestamps
    end
  end
end
