/*
 *  alt.musica repertoire, May 2019 
 */

var mayRecordingRepertoire = {

	title: 'alt.musica Repertoire for Parallel Play, 21 April 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-recording-may-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '04' ],

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

var manifest = new Manifest(mayRecordingRepertoire);
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

