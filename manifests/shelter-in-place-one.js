/*
 *  alt.musica repertoire for rehearsal, December 2019 
 */

var rehearsalRepertoire = {

    title: 'Alt Jazz Shelter In Place Repertoire, One',

    description: 'Songs with Afro-Cuban or Funk Grooves', 

    selector: '#manifest-shelter-in-place-one',

    baseUrl: 'http://davidelainealt.com/scores/', 

    programOrder: [ '07', '06', '01', '03' ],

    program: {
        '01': "Next Level Shit",
        //'02': "Stomping Ground",
        '03': "Windows",
        //'04': "We Declare alt.musica",
        //'05': "Don't Wait for Me",
        '06': "As It Was alt.musica",
        '07': "Lament"
    },

    bookOrder: [ ],
    books: { },
    partsInBooks: {}, 
    songs: {}
};

var partSelection = {
    "Flute, Alto Flute & Piccolo": {
        "Don't Wait for Me": [ "Flute" ], 
        "The Nymph": [ "Piccolo" ], 
        "Stomping Ground": [ "Flute" ], 
        "We Declare alt.musica": [ "Piccolo" ], 
    },
    "English Horn": {
    },
    "Bass Clarinet": {
        "As It Was alt.musica": [ "Solo Clarinet in A" ], 
        "Don't Wait for Me": [ "Solo Clarinet in A" ],
        "Stomping Ground": [ "Solo Clarinet in A" ],
        "We Declare alt.musica": [ "Bass Clarinet in Bb" ], 
        "Windows": [ "Solo Clarinet in A" ], 
        "You Don't Know What Love Is alt.musica": [ "Voice for A" ]
    },
    "Drums": {
    }
};

originalSongs.songs.Windows.recordings.performance = undefined;
originalSongs.songs.Windows.recordings.track = undefined;
originalSongs.songs.Windows.recordings.debut = undefined;

var manifest = new Manifest(rehearsalRepertoire);
manifest.populate( altMusicaBooks, 
    [ 
        altJazzSongs["Lament"], 
        altJazzSongs["Next Level Shit"], 
        originalSongs, 
        arrangedSongs 
    ], partSelection ); 

