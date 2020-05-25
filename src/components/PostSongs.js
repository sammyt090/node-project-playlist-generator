import React from "react"


export default function PostSongs(props){
    let startPlaylist = props.playlist.map((element, index)=> <div>{element.artist} {element.title} {element.album}</div>)
    // console.log(startPlaylist[0].artist)
    // return  <h1>{props.playlist[0].title}</h1>

    return startPlaylist
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
