import React, { Component } from 'react'

class NewArtist extends Component {
    constructor(){
        super()
        this.state = {
        newArtist: {
            name: "",
            nationality: "",
            photo_url: ""
        }
        }
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        this.props.createArtist(this.state.newArtist)
    }
    _handleChange = (e) => {
        const attributeValue = e.target.value
        const attributeName = e.target.name
        const newState = {...this.state}
        newState.newArtist[attributeName] = attributeValue
        this.setState(newState)
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <label>Artist Name:</label>
                    <input type="text" name="name" placeholder="Artist Name" onChange={this._handleChange}/>
                <label>Artist Nationality:</label>
                    <input type="text" name="nationality" placeholder="Nationality" onChange={this._handleChange}/>
                <label>Artist Banner Photo URL:</label>
                    <input type="text" name="photo_url" placeholder="Artist Banner Photo URL" onChange={this._handleChange}/>
                <input type="submit" value="Create Artist"/>
            </form>
        )
    }
}

export default NewArtist;