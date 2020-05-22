# Playlist Generator

## Application Concept

### Application Concept

- This website will create a playlist
- I will be taking the data from a hardcoded data array.
- Full CRUD
    - GET: give list of songs available
    - POST: songs will be added to playlist
    - PUT: can change name of song and artist
    - Delete: take off certain song from playlist

### Functionality

- Header at top of page as name of playlist
- When site loads will show option to add song by input or add song by random.
- Also will show current playlist
- If create song is chosen the option to enter title, artist, and album will appear
- Also will have the option to delete and edit songs
- If random is chosen a song will be chosen from the array of music and added to the playlist
 

### Endpoints

- GET: give list of songs available
- POST: songs will be added to playlist
- PUT: can change name of song and artist
- Delete: take off certain song from playlist

### Component Architecture

- App.js (stateful: holds the playlist this.state.playlist )
    - Header.js (functional)
    - Random.js (stateful: axios request to get a random song from data (this.state.suggestions)    )
    - CreateSong.js (this.state.title this.state.artist this.state.album)
    - EditPlaylist.js (functional) (this.props.Playlist)

<img src="./wireframe/Annotation 2020-05-22 092856.png">
<img src="./wireframe/Annotation 2020-05-22 095354.png">
<img src="./wireframe/Annotation 2020-05-22 113701.png">

 







<!-- # CODE GUIDE

### Endpoints

- Get - Get your current playlist from hard code
    -Request will be placed on the server
- Get - Get a couple of song suggestions from hard coded data. Will be placed in the Random.js
- Post - add a new song to the playlist by clicking the add new. 
- Put - allow you to edit the song title, artist, and album. Will be located in the EditPlaylist.js
- Delete - will remove song from the playlist. Will be located in the EditPlaylist.js  -->







