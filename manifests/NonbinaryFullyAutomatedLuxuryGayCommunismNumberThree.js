/*
 *  Alt Jazz Ark setlist for 
 *  Nonbinary Fully-Automated Luxury Gay Communism #3 
 */

var lyricalCompositionsRepertoire = {

	title: 'Alt Jazz Ark Repertoire for December, 2021',

	description: 'Lyrical compositions from Alt Tal songbook', 

	selector: '#alt-jazz-ark-quartet',

	baseUrl: 'http://altjazz.org/scores/', 

	programOrder: [ '01', '02', '03', '04', '05', '06', '07' ],

	program: {
		'01': "Frivolity",
		'02': "Three Out of Four Nights",
		'03': "Force of Nature",
		'04': "Jasmine",
		'05': "Mark Time",
		'06': "Just a Cup of Coffee",
		'07': "Seven O'Clock Tune",
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




