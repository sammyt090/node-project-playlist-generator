const arrayPlaylist = [{id: 0, title: "Sweet Caroline", artist: "Neil Diamond", album: "photo"}];
let id = 1;


module.exports ={

showPlaylist: (req,res) => {
    res.status(202).send(arrayPlaylist)
},

createSong: (req, res) => {
    const {title, artist, album} = req.body
    const newSong = {id, title, artist, album}

    arrayPlaylist.push(newSong)
    id++;
    res.status(202).send(arrayPlaylist)

},

updateSong: (req, res) => {
    const {playlist_id} = req.params
    const {newTitle, newArtist, newAlbum} =req.body

    const index = arrayPlaylist.findIndex(e=> e.id === +playlist_id)
    if(index === -1){
        return res.status(404).send("Song id not found")
    }
    const updatedPlaylist = {
        id: +playlist_id,
        title: newTitle || arrayPlaylist[index].title,
        artist: newArtist || arrayPlaylist[index].artist,
        album: newAlbum || arrayPlaylist[index].album
    }

    arrayPlaylist[index] = updatedPlaylist

    res.status(202).send(arrayPlaylist)


},

deleteSong: (req, res) => {
    const {playlist_id} = req.params

    const index = arrayPlaylist.findIndex(e=> e.id === +playlist_id)

    if(index === -1){
        return res.status(404).send("song not found")
    }

    arrayPlaylist.splice(index, 1)

    res.status(202).send(arrayPlaylist)
    
}



}