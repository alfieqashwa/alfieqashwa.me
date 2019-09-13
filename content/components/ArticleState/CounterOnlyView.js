/** @jsx jsx */
import { Component } from 'react';
import { jsx } from 'theme-ui';

function Button(props) {
  return (
    <button
      sx={{
        color: 'hotpink',
        background: 'papayawhip',
        fontSize: '36px',
        padding: '2px 18px',
        border: '1px 9px',
        borderRadius: '4px',
        ':disabled': {
          color: 'primary',
          background: 'grey',
          opacity: '0.65',
          cursor: 'not-allowed'
        }
      }}
      type="button"
      disabled={props.handleDisabled}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

class CounterOnlyView extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div sx={{ textAlign: 'center' }}>
        <h1
          sx={{
            color: 'hotpink',
            fontSize: '48px'
          }}
        >
          Counter
        </h1>
        <h2
          sx={{
            color: 'hotpink',
            fontSize: '64px'
          }}
        >
          {this.state.count}
        </h2>
        <Button>-</Button>
        {'  '}
        <Button>Reset</Button>
        {'  '}
        <Button>+</Button>
      </div>
    );
  }
}

export default CounterOnlyView;
