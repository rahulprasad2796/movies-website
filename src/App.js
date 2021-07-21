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

  handleSearch = (e) => { //remember arrow
    //filters from the api data and sets that value to products
    const filter = this.state.filterProducts.filter(v => v.Title.toLowerCase().includes(e.target.value));
    this.setState({products: filter});
  }

  render() { //loader is t/f while api call, if no data found on search shows no data found
    return (
      <div>
        {this.state.loader ? (<h1>Loading...</h1>) : (<div>
          <input type="text" placeholder="Search"  onChange={this.handleSearch}>
        </input>
        <h2>Movies</h2> <hr/>

        <div className="card-wrapper">
          {this.state.products.length ? this.state.products.map((v, i) => <Card {...v} key={i} />) : <h2>Data not found</h2>}
        </div>
        </div>) }
      </div>
    )
  }

  componentDidMount() { //api call
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res => {
      this.setState({products: res.data.Search, filterProducts: res.data.Search, loader:false});
    })
  }
}

export default App;