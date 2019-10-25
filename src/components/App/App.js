import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    gallery: [],
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios.get('/gallery')
      .then( (response) => {
        this.setState({
          gallery: response.data
        })
      })
      .catch( (error) => {
        console.log('error in GET', error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;
