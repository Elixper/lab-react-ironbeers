import axios from 'axios';
import React, { Component } from 'react';
export default class ListBeers extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({
          beers : res.data,
      })
    });
  }
  render() {
    console.log(this.state.beers);
    return (this.state.beers.map((beer) => {
        return <div><img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>by {beer.contributed_by}</p>
        </div>
    })
    )
  }
}
