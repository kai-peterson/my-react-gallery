import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header'

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
      .then((response) => {
        this.setState({
          gallery: response.data
        })
      })
      .catch((error) => {
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
      .then((response) => {
        console.log(response);
        this.getImages();
        this.setState({
          newImage: {
            url: '',
            description: '',
          }
        })
      })
      .catch((error) => {
        console.log('error in POST', error);
      })
  }

  likeImage = (id, likes) => {
    let incLikes = likes + 1;
    axios.put(`/gallery/like/${id}`, { likes: incLikes })
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        console.log('error in PUT', error);
      })
  }

  handleDelete = (id) => () => {
    axios.delete(`/gallery/${id}`)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        console.log('error in DELETE', error);
      })
  }

  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <Header />
          <GalleryForm
              handleInput={this.handleInput}
              handleClick={this.handleClick}
              newImage={this.state.newImage}
            />
          <GalleryList
            gallery={this.state.gallery}
            likeImage={this.likeImage}
            handleDelete={this.handleDelete}
          />
          <pre>{JSON.stringify(this.state.newImage, null, 2)}</pre>
        </div>
      </>
    );
  }
}

export default App;
