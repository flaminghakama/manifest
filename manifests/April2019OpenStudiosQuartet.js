/*
 *  alt.musica repertoire for Open Studios, April 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Jazz Quartet', 

	selector: '#manifest-open-studios-april-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '08', '05', '07', '09', '04', '02', '03', '06' ],

	program: {
		'01': "Anne's Eyes", 
		'02': "Aphrodite's Girl Friday",
		'03': "Big Seven",
		'04': "Hot Swing", 
		'05': "Kickin' The Can", 
		'06': "Linsanity",
		'07': "Swampy", 
		'08': "Thick As A Nickle", 
		'09': "Wag That Tail"
	},

	bookOrder: [ ],
	books: { },

	partsInBooks: {
	},

	songs: {
	} 
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.populate( jazzCombustionBooks, [ pianoTrioSongs ] ); 
