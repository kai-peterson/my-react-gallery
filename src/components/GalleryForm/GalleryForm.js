import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import TextField from '@material-ui/core/TextField';
import './GalleryForm.css'

class GalleryForm extends Component {
    render() {
        return (
            <div className="inputs">
                <TextField
                    onChange={this.props.handleInput('url')}
                    className="outlined-full-width"
                    label="Image URL"
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={this.props.newImage.url}
                />
                <TextField
                    onChange={this.props.handleInput('description')}
                    className="outlined-dense-multiline"
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rowsMax="2"
                    value={this.props.newImage.description}
                />
                {/* <input onChange={this.props.handleInput('url')} type="url" placeholder="Image URL" value={this.props.newImage.url} /> */}
                {/* <input onChange={this.props.handleInput('description')} type="text" placeholder="Description" value={this.props.newImage.description} /> */}
                <Fab className="addPicButton" onClick={this.props.handleClick} color="primary" aria-label="add" size="large">
                    <AddAPhotoRoundedIcon />
                </Fab>
                {/* <button onClick={this.props.handleClick}>Add post</button> */}
            </div>
        );
    }
}

export default GalleryForm;