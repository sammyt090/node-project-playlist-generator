import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import PostSongs from './components/PostSongs'
import CreateSong from './components/CreateSong'
import EditPlaylist from './components/EditPlaylist'

class App extends Component {
  constructor(){
    super()

    this.state={
      playlist: [{title: "", artist: '', album: ''}],
      input: ""
    }

    this.createSong = this.createSong.bind(this)
    // this.handleAddTask = this.handleAddTask.bind(this);
  
  
  }
  componentDidMount(){
    axios.get('/api/playlist').then((res) => {
      this.setState({
        playlist: res.data
      })
    })
  }

  createSong(title, artist, album){
    const body = {title, artist, album}
    axios.post('/api/playlist', body).then((res) => {
      this.setState({
        playlist: res.data
      })
    })
  }

  deleteSong(id){
    axios.delete(`/api/playlist/${id}`).then((res) => {
      this.setState({
        playlist: res.data
      })
    })
  }

  

  


  render(){
    // let list =this.state.playlist.map((element, index) => {
    //   return (<CreateSong key ={index} task ={element}
    //     playlist= {this.playlist}/>)
    // })
    console.log(this.state.playlist)
  return (<div className = "App">
    <div><Header/></div>
    {/* <div><CreateSong createSong= {this.state.CreateSong}
    playlist= {this.state.playlist}/></div> */}
    <div className = "first-box">
      <PostSongs playlist = {this.state.playlist}/>
      {/* <h1>{this.state.playlist[0].title}</h1> */}

    </div>
    {/* <CreateSong playlist = {this.state.playlist}
    createSong = {this.createSong}
    ></CreateSong> */}
     <div>
       <EditPlaylist deleteSong = {this.deleteSong}
       playlist = {this.state.playlist}/>
     </div>
      {/* <input value={this.state.input}
      placeholder = "title"
      onChange = {e => this.handleInputChange(e.target.value)}
      />

      <button onClick={this.handleAddTask}>Add</button> */}
    {/* </div> */}
    </div>)
}

}






export default App;





















// import React, { Component } from 'react';
// import Header from './components/Header'
// import './App.css';
// import CreateSong from './components/CreateSong'
// import axios from 'axios';

// class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       playlist: []
//     }
//     this.createSong = this.createSong.bind(this)
//     this.deleteSong = this.deleteSong.bind(this)
    
//   }
//     componentDidMount() {
//       axios.get('/api/playlist').then((res) =>{
//         this.setState({
          
//           playlist: res.data
//         })
//       })
//       console.log("I am mounted")
//     }
//     createSong(title, artist, album){
//       const body = {title, artist, album}
//       axios.get('/api/playlist', body).then((res) =>{
//         this.setState({
//           playlist: res.data
//         })
//       })
//     }
//     deleteSong(id){
//       const body = {id}
//         axios.get('/api/playlist/playlist_id', body).then((res)=>{
//           this.setState({
//             playlist: res.data
//           })
//         })
//     }
    
      
//   render(){
//   return (

// <div>
// <Header/>
// <div>
// <CreateSong createSong ={this.CreateSong}
//  playlist= {this.playlist}/>
// </div>
// <div>{this.playlist}</div>
// </div>

//   )
//   }
// }

// export default App;
// //