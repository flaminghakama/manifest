/*
 *  alt.musica repertoire, May 2019 
 */

var mayRecordingRepertoire = {

	title: 'alt.musica Repertoire for concert at the Center for New Music, 17 Auguste 2019',

	description: 'Voice, winds, string quartet and rhythm section', 

	selector: '#manifest-cnm-august-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '02', '05', '06', '07', '04', '01', '03', '08' ],

	program: {
        '01': "Listening",
		'02': "Rising",
		'03': "Bechaini",
		'04': "Mossad", 
		'05': "We Declare alt.musica",
		'06': "Don't Wait for Me",
		'07': "The Optimist",
		'08': "Self-Immolation alt.musica"
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {
	},
	songs: {
	} 
};

var partSelection = {
	"Bass Clarinet": {
        "Listening": [ "Bass Clarinet in Bb for Bassoon" ],
		"Bechaini": [ "Bass Clarinet in Bb", "Voice" ], 
        "Rising": [ "Bass Clarinet in Bb for Bassoon" ],
	}
};

var manifest = new Manifest(mayRecordingRepertoire);
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
manifest.selectPartsInBooks(partSelection);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

