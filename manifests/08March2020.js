/*
 *  alt.musica repertoire for rehearsal, December 2019 
 */

var rehearsalRepertoire = {

    title: 'alt.musica Repertoire for Rehearsal, 08 March 2020',

    description: 'Songs with Afro-Cuban or Funk Grooves', 

    selector: '#manifest-08-march-2020',

    baseUrl: 'http://davidelainealt.com/scores/', 

    programOrder: [ '01', '02', '03', '04', '05', '06' ],

    program: {
        '01': "Next Level Shit",
        '02': "Stomping Ground",
        '03': "Windows",
        '04': "We Declare alt.musica",
        '05': "Don't Wait for Me",
        '06': "As It Was alt.musica"
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

altMusicaBooks.books = {
    '02': "English Horn",
    '05': "Drums",
    '06': "Violin I",
    '07': "Violin II",
    '08': "Viola",
    '10': "Bass",
};

var manifest = new Manifest(rehearsalRepertoire);
manifest.populate( altMusicaBooks, [ altJazzSongs["Next Level Shit"], originalSongs, arrangedSongs ], partSelection ); 

