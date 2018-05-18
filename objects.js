<<<<<<< HEAD
var playlist = {
  'My Bloody Valentine': 'Slowdive'
  
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
=======
var playlist = { Slowdive: 'My Bloody Valentine" };

function updatePlaylist (playlist, artistName, songTitle) {
  var playlist = { [artistName]: songTitle };
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
   var songTitle = "song";
   var playlist = { [artistName]: songTitle };
  delete playlist[artistName];
    return playlist;
}
>>>>>>> 102be49f2939d21663ea12935733f6e0da99b333
