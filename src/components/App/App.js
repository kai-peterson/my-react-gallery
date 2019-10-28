import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header'
import Swal from 'sweetalert2'
import Footer from '../Footer/Footer'
import HeaderTabs from '../HeaderTabs/HeaderTabs'

class App extends Component {
  state = {
    gallery: [],
    newImage: {
      url: '',
      description: '',
    },
    sortingValue: '0',
    mode: 'add',
  }

  componentDidMount() {
    this.getImagesSorted(this.state.sortingValue);
  }

  getImagesSorted = (index) => {
    this.setState({
      sortingValue: index,
    })
    axios.get(`/gallery/${index}`)
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
        this.getImagesSorted(this.state.sortingValue);
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
        this.getImagesSorted(this.state.sortingValue);
      })
      .catch((error) => {
        console.log('error in PUT', error);
      })
  }

  handleDelete = (id) => () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        axios.delete(`/gallery/${id}`)
          .then((response) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getImagesSorted(this.state.sortingValue);
          })
          .catch((error) => {
            console.log('error in DELETE', error);
          })
      }
    })
  }

  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <Header />
          <HeaderTabs />
          <div className="body">
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
          </div>
          <Footer getImagesSorted={this.getImagesSorted} />
        </div>
      </>
    );
  }
}

export default App;
