import React from 'react'
import DeleteSong from './DeleteSong'

// export default props => {}
// export default function(props){}

function EditPlaylist(props) {
  const mapPlaylist = props.playlist.map((e) => (
    <DeleteSong
      key={e.id}
     
      deleteSong={props.deleteSong}
      data={e}
    />
  ))
  return (
    <div>
      
      <div
        // style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {mapPlaylist}
      </div>
    </div>
  )
}

export default EditPlaylist