import React, { Component } from "react"
import DeleteSong from './DeleteSong'
import Rename from './Rename'

export default class PostSongs extends Component{
    constructor(){
        super()


        this.state={
           
            
        }
    }
    
    
      

      render(){
        let startPlaylist = this.props.playlist.map((element, index)=> <Rename element = {element} saveChange = {this.props.saveChange} deleteSong = {this.props.deleteSong} />)
          
          return (
              <div className = "trynum3">
       {/* {!this.state.isEditing ? (
          <button onClick={() =>this.toggleEdit()}>edit</button>
      ) : ( 
      <div>
      <input onChange={(element) => this.handleChange(event)} placeholder =" New Title" name = "newTitle" />
      <input onChange={(element) => this.handleChange(event)} placeholder =" New Artist" name = "newArtist" />
      <input onChange={(element) => this.handleChange(event)} placeholder =" New Album" name = "newAlbum" />
      <button onClick={() => this.handleSaveName()}>Save</button>
      <button onClick={() => this.toggleEdit()}>Cancel</button>
    </div>)}
     */}
     
     
    
    {/* return  <h1>{this.props.playlist[0].title}</h1> */}

    {startPlaylist}
    </div>
    )
}
}































// import Button from "./Button"


//  class CreateSong extends Component{
//     constructor(){
//         super()

//         this.state ={
//             playlist : [{title: "", artist: '', album: ''}]
//         }

       
        
//     }
//         render(){
            
            
//             // let displayPlaylist = this.props.playlist.map((e, i) => {
//             // return <h2>key = {i}>{e}</h2>
//             // })
//             //  return(
//             //     <div>{displayPlaylist}</div>
//             // )   
//             return(<div>

//             </div>)
// }
// }
