import React from 'react'

const PostTile = props => {
  return(
    <div className="tile-container">
    <p>{props.username}</p>
    <p>{props.title}</p>
    <p>{props.body}</p>
    </div>
  )
}
export default PostTile
