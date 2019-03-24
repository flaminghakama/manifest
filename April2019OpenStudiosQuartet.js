/*
 *  alt.musica repertoire for Open Studios, April 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Jazz Quartet', 

	selector: '#manifest-open-studios-april-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '04', '05', '06', '07' ],

	program: {
		'01': "Anne's Eyes", 
		'02': "Aphrodite's Girl Friday",
		'03': "Hot Swing", 
		'04': "Kickin' The Can", 
		'05': "Swampy", 
		'06': "Thick As A Nickle", 
		'07': "Wag That Tail"
	},

	bookOrder: [ ],
	books: { },

	partsInBooks: {
	},

	songs: {
	} 
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(pianoTrioSongs);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

