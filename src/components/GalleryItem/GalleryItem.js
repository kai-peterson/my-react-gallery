import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    state = {
        toggle: true
    }

    toggleImage = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        return (
            <div className="image">
                {this.state.toggle === true ?
                    <><img onClick={this.toggleImage} src={this.props.image.path} /><br/></>:
                    <div onClick={this.toggleImage} className="toggleDescripton"><span className="descriptionText">{this.props.image.description}</span></div>
                }
                <button onClick={() => this.props.likeImage(this.props.image.id, this.props.image.likes)}>Like!</button>
                <br />
                <button onClick={this.props.handleDelete(this.props.image.id)} className="delete">Delete</button>
                <br />
                Likes: {this.props.image.likes}
            </div>
        );
    }
}

export default GalleryItem;