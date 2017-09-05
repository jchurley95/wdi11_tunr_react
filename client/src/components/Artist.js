import React, { Component } from 'react'
import axios from 'axios'

class Artist extends Component{
  constructor(){
    super();
    this.state = {
      artist: {},
      songs: []
    }
  }

  componentWillMount(){
    this._fetchArtistAndSongs();
  }

  _fetchArtistAndSongs = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    const res = await axios.get(`/api/artists/${id}`)
    this.setState({
      artist: res.data.artist,
      songs: res.data.songs
    })
  }

  render(){
    return (
      <div>
        <h1>Hello from Artist</h1>
      </div>
    )
  }
}

export default Artist