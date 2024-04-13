import React from 'react'

// This function can be utilised to create a loading screen for any page

function Loading() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <img src='assets/gifs/Loading.gif' alt="loading..." style={{"scale": "50%"}} />
    </div>
  )
}

export default Loading
