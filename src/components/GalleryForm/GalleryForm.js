import React, { Component } from 'react';

class GalleryForm extends Component {
    render() {
        return (
            <>
                <input onChange={this.props.handleInput('url')} type="url" placeholder="Image URL" />
                <input onChange={this.props.handleInput('description')} type="text" placeholder="Description" />
                <button onClick={this.props.handleClick}>Add post</button>
            </>
        );
    }
}

export default GalleryForm;