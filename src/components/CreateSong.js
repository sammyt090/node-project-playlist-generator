
// import React from "react"

// export default function CreateSong(props){
//      console.log(props)

// // let startPlaylist = props.playlist.map((e => <div>{e.artist} </div>))
     
// //      return(createSong({props.playlist.title}))

// return {props.playlist}}







// handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAddTask() {
//     this.setState({
//       playlist: [...this.state.playlist, this.state.playlist.input],
//       input: ""
//     });
//   }




















// import React, { Component } from 'react'

// class CreateSong extends Component {
//     constructor() {
//       super();
  
//       this.state = {
//         input : ""
//       };
  
//       this.handleAddTask = this.handleAddTask.bind(this);
//     }
  
//     handleInputChange(value) {
//       this.setState({ playlist: value });
//     }
  
//     handleAddTask(props) {
//       this.setState({
//         list: [...props.playlist, props.playlist],
//         input: ""
//       });
//     }
  
//     render(props) {
//       let list = props.playlist.map((element, index) => {
//         return <p>{this.state.task}</p>;;
//       });
  
//       return (
//         <div className="App">
//           <h1>My to-do list:</h1>
  
//           <div>
//             <input
//               value={this.state.input}
//               placeholder="Enter new task"
//               onChange={e => this.handleInputChange(e.target.value)}
//             />
  
//             <button onClick={this.handleAddTask}>Add</button>
//           </div>
  
//           <br />
  
//           {list}
//         </div>
//       );
//     }
//   }
  
//   export default CreateSong;
















// export default class CreateSong extends Component{
//     constructor(){
//         super()


//         this.state= ({
//             title: '',
//             artist: '',
//             album: ''
//         })
//     }

//     handleChange(e){
//         const {data} = this.props
//         this.setState({
//             title: e.target.value,
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <input onChange = {(e) => this.handleChange(e)} />
//             </div>
//         )
//     }
// }
