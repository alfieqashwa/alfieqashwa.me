/** @jsx jsx */
import { Component } from 'react';
import { jsx } from 'theme-ui';

// Testing using Arrow Function & Destructuring
const Button = ({ handleDisabled, handleClick, children }) => {
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
      disabled={handleDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

class CounterAF extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleReset = () => {
    this.setState({
      count: this.state.count * 0
    });
  };

  render() {
    const { count } = this.state;

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
          {count}
        </h2>
        <Button handleClick={this.handleDecrement}>-</Button>
        {'  '}
        <Button handleDisabled={count === 0} handleClick={this.handleReset}>
          Reset
        </Button>
        {'  '}
        <Button handleClick={this.handleIncrement}>+</Button>
      </div>
    );
  }
}

export default CounterAF;
