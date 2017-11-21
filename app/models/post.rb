class Post < ApplicationRecord
  belongs_to :user
  
  validates :title, null: false
end
