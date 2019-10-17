/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)

  const handleClick = () => setIsLoggedIn(!isLoggedIn)

  return (
    <center
      sx={{
        background: `papayawhip`,
        paddingTop: `3px`,
        paddingBottom: `10px`,
        mx: `100px`,
        borderRadius: `10px`
      }}
    >
      <h1 sx={{ color: `palevioletred`, fontSize: `32px` }}>
        You are Logged {isLoggedIn ? 'in' : 'out'}
      </h1>
      <button
        sx={{
          color: `teal`,
          border: `2px solid lightGreen`,
          py: `5px`,
          px: `8px`,
          borderRadius: `4px`,
          marginBottom: `10px`
        }}
        onClick={handleClick}
      >
        Log {!isLoggedIn ? 'in' : 'out'}
      </button>
    </center>
  )
}

export default LoggedIn
