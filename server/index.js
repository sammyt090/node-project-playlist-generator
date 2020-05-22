const express = require('express')
const app = express()
const SERVER_PORT = 4321;
const ctr1 = require('./controllers/playlistEditor')
app.use(express.json())


app.get("/api/playlist", ctr1.showPlaylist)
app.post("/api/playlist/", ctr1.createPlaylist)
app.delete("/api/playlist/:playlist_id", ctr1.deletePlaylist)
app.put('/api/playlist/:playlist_id', ctr1.updatePlaylist)






app.listen(SERVER_PORT, () => console.log(`Jammin it out on port ${SERVER_PORT}`))
