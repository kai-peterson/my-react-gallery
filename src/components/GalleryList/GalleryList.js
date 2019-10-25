import React, { Component } from 'react';
import './GalleryList.css'

class GalleryList extends Component {
  render() {
    return (
      <div className="GalleryList">
        {this.props.gallery.map( (image) => <div className="image"><img src={image.image} /><br/>Description: {image.description}<br/> Likes: {image.likes}</div>)}
        {/* map gallery here */}
      </div>
    );
  }
}

export default GalleryList;
