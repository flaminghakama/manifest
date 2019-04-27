/*
 *  alt.musica repertoire, May 2019 
 */

var mayRecordingRepertoire = {

	title: 'alt.musica Repertoire for recording, 19 May 2019',

	description: 'Backing tracks with winds, string quartet and rhythm section', 

	selector: '#manifest-recording-may-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '04', '03' ],

	program: {
        '01': "Listening",
		'02': "Rising",
		'03': "Bechaini",
		'04': "It Only Happens Once"
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {
	},
	songs: {
	} 
};

var partSelection = {
	"English Horn": {
        "It Only Happens Once": [ "English Horn in F" ],
	},
	"Bass Clarinet": {
        "It Only Happens Once": [ "Clarinet in A" ],
        "Listening": [ "Bass Clarinet in Bb for Bassoon" ],
		"Bechaini": [ "Bass Clarinet in Bb", "Voice" ], 
        "Rising": [ "Bass Clarinet in Bb for Clarinet", "Bass Clarinet in Bb for Bassoon" ],
	},
	"Bass": {
        "It Only Happens Once": [ "Bass" ]
    }
};

var manifest = new Manifest(mayRecordingRepertoire);
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
console.log('partSelection', partSelection);
manifest.selectPartsInBooks(partSelection);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

