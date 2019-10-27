import React, { Component } from 'react';
import './GalleryItem.css'
import Paper from '@material-ui/core/Paper';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

class GalleryItem extends Component {
    state = {
        toggle: true
    }

    toggleImage = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div className="image">
                <Paper className="paperOutline" elevation="12">
                    {this.state.toggle === true ?
                        <><img onClick={this.toggleImage} src={this.props.image.path} /></> :
                        <div onClick={this.toggleImage} className="toggleDescripton"><span className="descriptionText">{this.props.image.description}</span></div>
                    }
                    <div className="interactions">
                        <Fab size="small" onClick={this.props.handleDelete(this.props.image.id)} aria-label="delete" className="deleteIcon">
                            <DeleteIcon />
                        </Fab>
                        {this.props.image.likes === 0 && <div className="firstLikeText">Be the first to Like this image!</div>}
                        {this.props.image.likes === 1 && <div className="likeText">{this.props.image.likes} Person liked this!</div>}
                        {this.props.image.likes > 1 && <div className="likeText">{this.props.image.likes} People liked this!</div>}
                        <Fab size="small" onClick={() => this.props.likeImage(this.props.image.id, this.props.image.likes)} color="secondary" aria-label="edit" className="favoriteIcon">
                            <FavoriteRoundedIcon />
                        </Fab>
                    </div>
                    {/* <button onClick={this.props.handleDelete(this.props.image.id)} className="delete">Delete</button> */}
                </Paper>
            </div>
        );
    }
}

export default GalleryItem;