import React, { Component } from 'react';
import Card from './components/cards';
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      loader: true,
      filterProducts: [],
    }
  }

  //this code works fine instead of handleSearch
  //inline code 
  // (e) => {
  //   const filter = this.state.filterProducts.filter(v => v.Title.toLowerCase().includes(e.target.value));
  //   this.setState({products: filter});
  // }

  handleSearch() {
    //shows error TypeError: Cannot read property 'state' of undefined
    //Why this.state is not accessible outside render, but in your code when you explained
    //it was accessible, am I doing something wrong?
    console.log(this.state.products);
  }


  render() {
    return (
      <div>
        {this.state.loader ? (<h1>Loading...</h1>) : (<div>
          <input type="text" placeholder="Search"  onChange={this.handleSearch}>
        </input>
        <div className="card-wrapper">
          {this.state.products.map((v, i) => <Card {...v} key={i} />)}
        </div>
        </div>) }
      </div>
    )
  }

  componentDidMount() {
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res => {
      this.setState({products: res.data.Search, filterProducts: res.data.Search, loader:false});
    })
  }
}

export default App;