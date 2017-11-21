import React from 'react'

const NewPostLogin = (props) => {
  return(
    <div>
      You must log in with google to post on our forum
      <a href="/auth/google_oauth2">Log in</a>
    </div>
  )
}

export default NewPostLogin
