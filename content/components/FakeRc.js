import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// TODOS: just temporary
const pink = 'rgb(255, 167, 196)';
const darkPink = '#d23669';
const green = 'rgb(43, 131, 78)';

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
`;
const Box = styled.div`
  padding: 0.5rem;
  color: ${pink};
  text-align: center;
  background: #1e2227;
  border: solid 3px ${pink};
  border-radius: 4px;
`;
const Input = styled.input`
  width: 50%;
`;
const Submit = styled.input`
  color: ${green};
  background: ${pink};
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0.5rem;
`;
const Button = styled.button`
  color: ${green};
  background: ${pink};
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0.5rem;
`;
const H1 = styled.h1`
  text-align: center;
  padding: 0.5rem;
  color: ${darkPink};
  border: solid 3px ${pink};
  border-radius: 5px;
  background: #1e2227;
`;
const H3 = styled.h3`
  color: ${darkPink};
`;
const Total = styled(Box)``;
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      malih: '',
      bolot: '',
      sah: '',
      tidakSah: ''
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'number' && target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleClear = () => {
    this.setState({
      malih: '',
      bolot: '',
      sah: '',
      tidakSah: ''
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.malih === '' ||
      this.state.bolot === '' ||
      this.state.sah === '' ||
      parseInt(this.state.sah) === 0
    ) {
      return alert(`Boi!! Input dulu, jgn asal maen pencet Submit aje!!`);
    } else if (
      parseInt(this.state.malih) < 0 ||
      parseInt(this.state.bolot) < 0 ||
      parseInt(this.state.sah) < 0 ||
      parseInt(this.state.tidakSah) < 0
    ) {
      window.alert('Boi! Kaga boleh minus. Ane bilangin Om Budi lho!');
    } else if (
      parseInt(this.state.malih) + parseInt(this.state.bolot) !==
      parseInt(this.state.sah)
    ) {
      return alert('Boi! Ngupi dulu. Ente salah input tuh!!');
    } else if (
      parseInt(this.state.malih) + parseInt(this.state.bolot) > 300 ||
      parseInt(this.state.malih) +
        parseInt(this.state.bolot) +
        parseInt(this.state.tidakSah) >
        300
    ) {
      return alert(
        'Boi, Total Keseluruhan Suara gak boleh lebih dari 300 suara!'
      );
    } else {
      return alert(
        'Nah!! Inputnya dah bener tuh!! Press OK untuk confirm OR Cancel klo masih ragu.'
      );
    }
  };

  render() {
    let { malih, bolot, sah, tidakSah } = this.state;

    const total = parseInt(malih) + parseInt(bolot) + parseInt(tidakSah);

    const data = {
      labels: ['Bang Malih', 'Bang Bolot', 'Sah', 'Ga Sah'],
      datasets: [
        {
          data: [malih || 149, bolot || 140, sah || 189, tidakSah || 11],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'rgb(43, 131, 78)'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'rgb(43, 131, 78)'
          ]
        }
      ]
    };

    return (
      <>
        <H1>TPS KARDUS</H1>

        <form onSubmit={this.handleSubmit}>
          <Grid>
            <Box>
              <H3>Suara Bang Malih:</H3>
              <Input
                name="malih"
                type="number"
                placeholder="input angka..."
                value={malih}
                onChange={this.handleChange}
              />
            </Box>
            <Box>
              <H3>Suara Bang Bolot:</H3>
              <Input
                name="bolot"
                type="number"
                placeholder="input angka..."
                value={bolot}
                onChange={this.handleChange}
              />
            </Box>
            <Box>
              <h4>Suara Sah:</h4>
              <input
                name="sah"
                type="number"
                placeholder="input angka..."
                value={sah}
                onChange={this.handleChange}
              />
            </Box>
            <Box>
              <label>
                <h4>Suara Tidak Sah:</h4>

                <input
                  name="tidakSah"
                  type="number"
                  placeholder="input angka..."
                  value={tidakSah}
                  onChange={this.handleChange}
                />
              </label>
            </Box>
            <Submit type="submit" value="Submit [Fake Server]" />
            <Button type="button" onClick={this.handleClear}>
              Clear
            </Button>
          </Grid>
        </form>
        <br />
        <Doughnut data={data} />
        <Total>
          <h3>Total Keseluruhan Suara</h3>
          <h1
            css={css`
              color: '#d23669';
            `}
          >
            {total}
          </h1>
        </Total>
      </>
    );
  }
}
