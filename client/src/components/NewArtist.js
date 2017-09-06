import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class NewArtist extends Component {
 constructor(){
   super();
   this.state = {
       name: '',
       picture_url: '',
       nationality: '',

       redirect: false
   }
 }
 _submitArtist = async (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      nationality: this.state.nationality,
    }
    const response = await axios.post('/api/artists');
    this.setState({redirect: true})
  }
 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <form onSubmit={this._signIn}>
         <div>
           <label htmlFor="artist">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
         </div>
         <div>
           <label htmlFor="picture_url">Picture URL: </label>
           <input onChange={this._handleChange} type="text" name="picture_url" value={this.state.picture_url} />
         </div>
         <div>
           <label htmlFor="nationality">Password: </label>
           <input onChange={this._handleChange} type="text" name="nationality" value={this.state.nationality} />
         </div>
         <button onClick={this._submitArtist}>Create New Artist</button>
         <Link to="/">Home</Link>
       </form>
     </div>
   );
 }
}

export default NewArtist;