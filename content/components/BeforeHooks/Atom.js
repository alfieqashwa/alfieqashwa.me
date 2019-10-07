/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

import atom from './logo.svg'
import atom2 from './logo2.svg'

export default () => {
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
  const counterSpin = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

  return (
    <div>
      <div
        css={css`
          animation: ${spin} 7s infinite linear;
          color: 'teal';
        `}
      >
        <img src={atom} width="256px" height="256px" alt="React Logo" />
      </div>
      <div
        css={css`
          animation: ${counterSpin} 3s infinite linear;
          color: 'teal';
        `}
      >
        <img src={atom} width="128px" height="128px" alt="React Logo" />
      </div>
      <div
        css={css`
          animation: ${spin} 5s infinite linear;
          color: 'teal';
        `}
      >
        <img src={atom} width="96px" height="96px" alt="React Logo" />
      </div>
      <div
        css={css`
          animation: ${counterSpin} 1s infinite linear;
          color: 'teal';
        `}
      >
        <img src={atom2} width="128px" height="128px" alt="React Logo" />
      </div>
      <div
        css={css`
          animation: ${counterSpin} 7s infinite linear;
          color: 'teal';
        `}
      >
        <img src={atom2} width="256px" height="256px" alt="React Logo" />
      </div>
    </div>
  )
}
