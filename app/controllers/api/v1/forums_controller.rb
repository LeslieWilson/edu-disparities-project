class Api::V1::ForumsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    posts = Post.all.reverse
    object = posts.map do |post|
      user = post.user
      {
        id: post.id,
        title: post.title,
        body: post.body,
        username: user.name,
        created_at: post.created_at.strftime("Posted on %m/%d/%Y at %I:%M%p")
      }
    end

    render json: {posts: object, current_user: current_user}
  end

  def create
    user_id = current_user.id
    post = Post.new
    post.body = params["post"]["body"]
    post.title = params["post"]["title"]
    post.user_id = user_id
    post.save
    posts = Post.all.reverse

    object = posts.map do |post|
      user = post.user
      {
        id: post.id,
        title: post.title,
        body: post.body,
        username: user.name
      }
    end
    render json: object
  end

  def destroy
    post_id = params[:id]

    post_to_delete = Post.find_by(id: post_id)
    post_to_delete.delete

    posts = Post.all.reverse

    object = posts.map do |post|
      user = post.user
      {
        id: post.id,
        title: post.title,
        body: post.body,
        username: user.name
      }
    end
    render json: object

  end

end
