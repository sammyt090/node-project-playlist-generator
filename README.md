# Playlist Generator

## Application Concept

### Application Concept

- This website creates playlists
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
- If random is chosen a song will be chosen from the array of music and added to the playlist
- If song by input is chosen the option to enter title, artist, and album will appear

### Endpoints

- GET: give list of songs available
- POST: songs will be added to playlist
- PUT: can change name of song and artist
- Delete: take off certain song from playlist

### Component Architecture

- App.js (stateful: holds the playlist this.state.playlist )
    - Header.js (functional)
    - Random.js (stateful: axios request to get a random song from data)
    - EditPlaylist.js (this.state.title this.state.artist this.state.album)


        







