/*
 *  alt.musica repertoire, Autumn 2018 
 */

var autumnRepertoire = {

	title: 'alt.musica Repertoire for Autumn, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-autumn-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '06', '05', '04' ],

	program: {
		'01': "The Optimist",
		'02': "Rising",
		'03': "Listening",
		'04': "Dreams",
		'05': "Wee", 
		'06': "Bechaini" 
	},

	bookOrder: [],
	books: {},
	partsInBooks: {},
	songs: {}
};

var manifest = new Manifest(autumnRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ] ); 
