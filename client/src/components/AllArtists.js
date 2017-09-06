import React, { Component } from 'react';
import axios from 'axios';
import ArtistCard from './ArtistCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const ArtistListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`;

class AllArtists extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      artists: []
    }
  }

  componentWillMount(){
    this._fetchArtists();
  }

  _fetchArtists = async () => {
    try {
      const response = await axios.get('/api/artists');
      const artists = response.data;
      this.setState({artists});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    if (this.state.error){
      return <h1>{this.state.error.message}</h1>
    }
    return (
      <div>
        <ArtistListStyles>
          {this.state.artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ArtistListStyles>
        <Link to="/artist/new">Create A New Artist</Link>
      </div>
    )
  }
}

export default AllArtists;