// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    // Make a copy of the record with the given id
    const recordToUpdate = records[id];
  
    // If value is an empty string, delete the given prop property from the album
    if (value === "") {
      delete recordToUpdate[prop];
    } else if (prop !== "tracks") {
      // If prop isn't "tracks" and value isn't an empty string, assign the value to that album's prop
      recordToUpdate[prop] = value;
    } else {
      // If prop is "tracks" and value isn't an empty string
      if (!recordToUpdate.hasOwnProperty("tracks")) {
        // If the album doesn't have a "tracks" property, create an empty array and add value to it
        recordToUpdate.tracks = [];
      }
      // Add value to the end of the album's existing "tracks" array
      recordToUpdate.tracks.push(value);
    }
  
    // Return the updated records object
    console.log (records);
    
  }
  
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');