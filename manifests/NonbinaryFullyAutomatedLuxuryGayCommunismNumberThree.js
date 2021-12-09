/*
 *  Alt Jazz Ark setlist for 
 *  Nonbinary Fully-Automated Luxury Gay Communism #3 
 */

var lyricalCompositionsRepertoire = {

	title: 'Alt Jazz Ark Repertoire for December, 2021',

	description: 'Lyrical compositions from Alt Tal songbook', 

	selector: '#alt-jazz-ark-quartet',

	baseUrl: 'http://altjazz.org/scores/', 

	programOrder: [ '02', '07', '01', '03', '05', '04', '06' ],

	program: {
		'01': "Force of Nature",
		'02': "Frivolity",
		'03': "Jasmine",
		'04': "Just a Cup of Coffee",
		'05': "Mark Time",
		'06': "Seven O'Clock Tune",
		'07': "Three Out of Four Nights",
	},

	bookOrder: [ '01' ],
	books: {
		'01': "Concert Lead Sheets",
	},
	partsInBooks: { },
	songs: { }
};

var manifest = new Manifest(lyricalCompositionsRepertoire);
manifest.populate( lyricalCompositionsBooks, [ lyricalCompositionsSongs ] ); 




