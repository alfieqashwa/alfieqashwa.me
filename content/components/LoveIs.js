/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Fade from 'react-reveal/Fade'

const Heart = () => (
  <h4>
    <span role="img" aria-labelledby="heart">
      What is ❤️ ?
    </span>
  </h4>
)

const BrokenHeart = () => (
  <h4>
    <span role="img" aria-labelledby="heart">
      💔 ❤️ 💔
    </span>
  </h4>
)

export default function ToggleShowHide({ children }) {
  const [show, setShow] = React.useState(false)

  const handleClick = () => {
    setShow(s => (s = !s))
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 sx={{ color: 'accent', fontSize: '28px' }}>
        <Fade left opposite cascade collapse when={show}>
          Love is a sweet misery
          <strong style={{ color: 'red', fontSize: '42px' }}>
            <span role="img" aria-labelledby="broken-heart">
              💔
            </span>
          </strong>
        </Fade>
      </h1>
      <Button handleClick={handleClick}>
        {show ? <BrokenHeart /> : <Heart />}
      </Button>
    </div>
  )
}

const Button = ({ children, handleClick }) => (
  <button
    sx={{
      color: 'hotpink',
      background: 'papayawhip',
      fontSize: '18px',
      padding: '5px',
      border: '1px',
      borderRadius: '2px'
    }}
    type="button"
    onClick={handleClick}
  >
    {children}
  </button>
)
