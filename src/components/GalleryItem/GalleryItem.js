import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <div className="image">
                <img src={this.props.image.path} />
                <br />
                Description: {this.props.image.description}
                <br /> 
                Likes: {this.props.image.likes}
            </div>
        );
    }
}

export default GalleryItem;