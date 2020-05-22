const playlist = [{id: 0, title: "Sweet Caroline", artist: "Neil Diamond", album: "photo"}];
let id = 1;


module.exports ={

showPlaylist: (req,res) => {
    res.status(202).send(playlist)
},

createPlaylist: (req, res) => {
    const {title, artist, album} = req.body
    const newSong = {id, title, artist, album}

    playlist.push(newSong)
    id++;
    res.status(202).send(playlist)

},

updatePlaylist: (req, res) => {
    const {playlist_id} = req.params
    const {title, artist, album} =req.body

    const index = playlist.findIndex(e=> e.id === +playlist_id)
    if(index === -1){
        return res.status(404).send("Song id not found")
    }
    const updatedPlaylist = {
        id: +playlist_id,
        title: title || playlist[index].title,
        artist: artist || playlist[index].artist,
        album: album || playlist[index].album
    }

    playlist[index] = updatedPlaylist

    res.status(202).send(playlist)


},

deletePlaylist: (req, res) => {
    const {playlist_id} = req.params

    const index = playlist.findIndex(e=> e.id === +playlist_id)

    if(index === -1){
        return res.status(404).send("song not found")
    }

    playlist.splice(index, 1)

    res.status(202).send(playlist)
    
}



}