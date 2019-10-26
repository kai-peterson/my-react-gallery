import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {
  state = {
    gallery: [],
    newImage: {
      url: '',
      description: '',
    }
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

  handleInput = (propertyName) => (event) => {
    this.setState({
      newImage: {
        ...this.state.newImage,
        [propertyName]: event.target.value,
      }
    })
  }

  handleClick = () => {
    axios.post('/gallery', this.state.newImage)
      .then( (response) => {
        console.log(response);
        this.getImages();
      })
      .catch( (error) => {
        console.log('error in POST', error);
      })
  } 

  likeImage = (id, likes) => {
    let incLikes = likes + 1;
    axios.put(`/gallery/like/${id}`, {likes: incLikes})
      .then( (response) => {
        this.getImages();
      })
      .catch( (error) => {
        console.log('error in PUT', error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
          <GalleryForm handleInput={this.handleInput} handleClick={this.handleClick}/>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery} likeImage={this.likeImage}/>
        <pre>{JSON.stringify(this.state.newImage, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
