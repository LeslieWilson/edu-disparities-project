import React from 'react'

const PostTile = props => {console.log(props.created_at)
  let deleteButton;
  if(props.deleteButton){
    deleteButton = <button onClick={props.handleClick}>Delete Post</button>
  }
  return(
    <div className="tile-container">

    <div className="username-date">
          <p>Posted by:  {props.username}</p>
          <h1>{props.title}</h1>

          <p>{props.created_at}</p>
        </div>
        <p>{props.body}</p>
    {deleteButton}
    </div>
  )
}
export default PostTile
