/*
 *  alt.musica repertoire for rehearsal, December 2019 
 */

var rehearsalRepertoire = {

    title: 'alt.musica Repertoire for Rehearsal, December 2019',

    description: 'Songs with Afro-Cuban or Funk Grooves', 

    selector: '#manifest-december-2019',

    baseUrl: 'http://davidelainealt.com/scores/', 

    programOrder: [ '02', '05', '08', '07', '01', '09', '06', '03', '04' ],

    program: {
        '01': "As It Was alt.musica",
        '02': "Don't Wait for Me",
        '03': "Mossad",
        '04': "The Nymph",
        '05': "Stomping Ground",
        '06': "Señorita Jones",
        '07': "We Declare alt.musica",
        '08': "Windows",
        '09': "You Don't Know What Love Is alt.musica"
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


var manifest = new Manifest(rehearsalRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 

