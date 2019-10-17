/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'

function LoadingExample() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setIsLoading(!isLoading)
    }, 1500)
    return () => clearInterval(id)
  })

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
      {isLoading ? (
        <Loading />
      ) : (
        <h1
          sx={{
            color: `teal`,
            fontSize: `32px`
          }}
        >
          Welcome to Dummy API !
        </h1>
      )}
    </center>
  )
}

const Loading = () => (
  <h4
    sx={{
      color: `tomato`,
      fontSize: `32px`,
      py: `21px`
    }}
  >
    Loading...
  </h4>
)

export default LoadingExample
