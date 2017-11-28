import React from 'react'

const PostTile = props => {
  let deleteButton;
  if(props.deleteButton){
    deleteButton = <button onClick={props.handleClick}>Delete Post</button>
  }
  return(
    <div className="tile-container">
    <p>{props.username}</p>
    <p>{props.title}</p>
    <p>{props.body}</p>
    {deleteButton}
    </div>
  )
}
export default PostTile
