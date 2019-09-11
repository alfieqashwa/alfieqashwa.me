/** @jsx jsx */
import { Component } from 'react';
import { jsx } from 'theme-ui';

function Button(props) {
  return (
    <button
      sx={{
        color: 'hotpink',
        background: 'papayawhip',
        fontSize: '28px',
        padding: '2px 12px',
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

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleReset() {
    this.setState({
      count: this.state.count * 0
    });
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
        <Button handleClick={this.handleDecrement}>-</Button>
        {'  '}
        <Button
          handleDisabled={this.state.count === 0}
          handleClick={this.handleReset}
        >
          Reset
        </Button>
        {'  '}
        <Button handleClick={this.handleIncrement}>+</Button>
      </div>
    );
  }
}

export default Counter;
