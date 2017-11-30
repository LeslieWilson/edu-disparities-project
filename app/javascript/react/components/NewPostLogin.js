import React from 'react'

const NewPostLogin = (props) => {
  return(
    <div className="log-in">
      <p>You must log in with google to post on our forum</p>
      <div className="log-in-button">
      <a href="/auth/google_oauth2">Log in</a>
    </div>
    </div>
  )
}

export default NewPostLogin
