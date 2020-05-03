/*
 *  alt.musica repertoire for shelter in place 
 */

var rehearsalRepertoire = {

    title: 'Alt Jazz Shelter In Place Repertoire, Two',

    description: 'Readings of New Arrangements', 

    selector: '#manifest-shelter-in-place-two',

    baseUrl: 'http://davidelainealt.com/scores/', 

    programOrder: [ '05', '03', '01', '04', '02', '06' ],

    program: {
        '01': "Next Level Shit",
        '02': "Stomping Ground",
        '03': "Octagon Warrior",
        '04': "As It Was alt.musica",
        '05': "Lament",
        '06': "Cantina Ploy"
    },

    bookOrder: [ ],
    books: { },
    partsInBooks: {}, 
    songs: {}
};

var partSelection = {
    "Flute, Alto Flute & Piccolo": {
        "Stomping Ground": [ "Flute" ], 
    },
    "English Horn": {
    },
    "Bass Clarinet": {
        "As It Was alt.musica": [ "Solo Clarinet in A" ], 
        "Stomping Ground": [ "Solo Clarinet in A" ],
    },
    "Drums": {
    }
};

originalSongs.songs["As It Was alt.musica"].recordings.saxophone = undefined;
originalSongs.songs["As It Was alt.musica"].recordings.original = undefined;
originalSongs.songs["As It Was alt.musica"].recordings.quartet = undefined;
originalSongs.songs["Stomping Ground"].recordings.debut = undefined;
originalSongs.songs["Stomping Ground"].recordings.track = undefined;

var manifest = new Manifest(rehearsalRepertoire);
manifest.populate( altMusicaBooks, 
    [ 
        altJazzSongs["Lament"], 
        altJazzSongs["Next Level Shit"], 
        altJazzSongs["Cantina Ploy"], 
        altJazzSongs["Octagon Warrior"], 
        originalSongs, 
        arrangedSongs 
    ], partSelection ); 

