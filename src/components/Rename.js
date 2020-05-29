import React, { Component } from 'react'

export default class Rename extends Component {
    constructor(){
        super()
        
        this.state = {
            isEditing: false,
            newTitle: '',
            newArtist: '',
            newAlbum: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSaveName = this.handleSaveName.bind(this)
    }
        handleChange(event) {
            this.setState({
              [event.target.name]:event.target.value
            })
          }
        
          handleSaveName(id) {
           
            this.props.saveChange(id, this.state.newAlbum, this.state.newArtist, this.state.newTitle)
            this.setState({
                isEditing: false
            })
          }


        


render(){
    return(
        <div className= 'trynum4'>{!this.state.isEditing ? <><div>{this.props.element.artist} {this.props.element.title} {this.props.element.album}</div>
        <button className='button1' onClick={() => this.props.deleteSong(this.props.element.id)}>Delete</button>
        <button className='button1' className='button2' onClick={()=>this.setState({isEditing: true})}>Edit</button></>:
        <>
     <div>
        <input onChange={(event) => this.handleChange(event)} placeholder =" New Artist" name = "newArtist" />
      <input onChange={(event) => this.handleChange(event)} placeholder =" New Album" name = "newAlbum" />
      
      <input onChange={(event) => this.handleChange(event)} placeholder =" New Title" name = "newTitle" />
      <button onClick = {() => this.handleSaveName(this.props.element.id)} >Save</button>
      </div>
       </> }
        </div>
       
    )
}
}