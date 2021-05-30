import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

class NewBeer extends Component {
state={
name="",
tagline ="",
description ="",
first_brewed ="",
brewers_tips ="",
attenuation_level=null,
contributed_by ="",
isSubmitted:false,
}

handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const beerToPost = {
      name: this.state.name,
      type: this.state.tagline,
      jname: this.state.description,
      image: this.state.first_brewed,
      image: this.state.brewers_tips,
      image: this.state.attenuation_level,
      image: this.state.contributed_by,
    };
    axios
    .post("/new", beerToPost)
    .then((response) => {
      // console.log(response.data);
      // this.props.handleAddPokemon(response.data);
      // this.setState({
      //   isSubmitted: true,
      // });
      // this.props.history.push("/pokemons");
    })
    .catch((error) => {
      console.log(error);
    });

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Beer Form</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="jname">Jname</label>
            <input
              type="text"
              name="jname"
              id="jname"
              value={this.state.jname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}
export default withRouter(NewBeer);