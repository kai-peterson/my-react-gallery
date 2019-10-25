import React, { Component } from 'react';
import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  render() {
    return (
      <div className="GalleryList">
        {this.props.gallery.map( (image) => <GalleryItem image={image}/>)}
      </div>
    );
  }
}

export default GalleryList;
