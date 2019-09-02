import React, { Component } from 'react';
import { css } from '@emotion/core';
import Fade from 'react-reveal/Fade';

class CelloLovesReact extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'lightGreen', fontSize: '28px' }}>
          <Fade left opposite cascade collapse when={show}>
            Cello
            <strong style={{ color: 'pink', fontSize: '42px' }}>
              <span role="img" aria-labelledby="heart">
                ❤️
              </span>
            </strong>
            React
          </Fade>
        </h1>
        <button
          css={css`
            color: hotpink;
            background: papayawhip;
            border: 1px;
            border-radius: 3px;
          `}
          type="button"
          onClick={this.handleClick}
        >
          {this.state.show ? 'Hide' : 'Show'} Message
        </button>
      </div>
    );
  }
}
export default CelloLovesReact;
