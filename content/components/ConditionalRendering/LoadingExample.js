/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'

function LoadingExample() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(isLoading)
    const id = setInterval(() => {
      setIsLoading(i => !i)
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      sx={{
        background: `papayawhip`,
        paddingTop: `3px`,
        paddingBottom: `10px`,
        borderRadius: `10px`
      }}
    >
      <center>
        {isLoading ? (
          <Loading />
        ) : (
          <h4
            sx={{
              color: `teal`,
              fontSize: `26px`
            }}
          >
            Dummy API!
          </h4>
        )}
      </center>
    </div>
  )
}

const Loading = () => (
  <h4
    sx={{
      color: `tomato`,
      fontSize: `26px`
    }}
  >
    Loading...
  </h4>
)

export default LoadingExample
