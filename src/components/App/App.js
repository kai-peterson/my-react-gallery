import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

class App extends Component {
  state = {
    gallery: [
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
      {image: 'images/goat_small.jpg', description: 'A small goat', likes: 0},
    ],
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
