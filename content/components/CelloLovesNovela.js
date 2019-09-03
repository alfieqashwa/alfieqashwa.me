import React, { Component } from 'react';
import { css } from '@emotion/core';
import Fade from 'react-reveal/Fade';

class CelloLovesGatsbyThemeNovela extends Component {
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
            Gatsby Theme Novela
          </Fade>
        </h1>
        <button
          css={css`
            color: hotpink;
            background: papayawhip;
            font-size: 16px;
            padding: 5px;
            border: 1px;
            border-radius: 2px;
          `}
          type="button"
          onClick={this.handleClick}
        >
          {this.state.show ? 'Thank You Again' : 'Thank You'}
        </button>
        <br />
        <h2 style={{ color: '#AA771C', marginTop: '1rem' }}>
          Dennis Brotzky, Thiago Costa, Brad Tiller, Mack Mansouri from{' '}
          <a
            css={css`
              color: hotpink;
            `}
            href="https://www.narative.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Narative.co
          </a>
        </h2>
        <h1 style={{ color: '#AA771C', marginTop: '1rem' }}>
          Thank You{' '}
          <a
            css={css`
              color: #663399;
            `}
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
        </h1>
      </div>
    );
  }
}
export default CelloLovesGatsbyThemeNovela;
