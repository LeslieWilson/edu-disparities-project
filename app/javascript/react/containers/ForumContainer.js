import React, {Component} from 'react';
import PostTile from '../components/PostTile'
import NewPost from '../components/NewPost'
import { Route, Switch, Link } from 'react-router-dom'
import NewPostLogin from '../components/NewPostLogin'

class ForumContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      current_user: {}
    }
    this.addNewPost = this.addNewPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/forums', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        posts: body.posts,
        current_user: body.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewPost(formPayload){
    fetch('/api/v1/forums', {
      credentials: 'same-origin',
      headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({ post: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ posts: body})
    })
  }

  deletePost(post_id){
    fetch(`/api/v1/forums/${post_id}`, {
      credentials: 'same-origin',
      headers: {},
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ posts: body})
    })
  }

  render(){

    let deletePost = false;
    let postDisplay;
    if(this.state.current_user != null){
      postDisplay = <NewPost addNewPost={this.addNewPost}/>
    }else {
      postDisplay = <NewPostLogin />
    }

    if(this.state.current_user != null){
      if (this.state.current_user.admin){
        deletePost=true
      }
    }

    let posts = this.state.posts.map(post => {
      let handleDeletePost = () => {
        this.deletePost(post.id)
      }
      return (
        <PostTile
          key = {post.id}
          id = {post.id}
          body = {post.body}
          title = {post.title}
          username = {post.username}
          created_at = {post.created_at}
          deleteButton={deletePost}
          handleClick={handleDeletePost}
        />
      )
    })
    console.log(posts)
    return(
      <div>
        <div className="empty-space">
        </div>
        {postDisplay}
        {posts}

      </div>
    )
  }
}

export default ForumContainer
