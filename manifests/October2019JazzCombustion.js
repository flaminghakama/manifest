/*
 *  alt.musica repertoire for Open Studios, October 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, October 2019',

	description: 'Jazz Quintet', 

	selector: '#manifest-open-studios-october-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ 
		'02', '03', '04', '05', '06', 
		'10', '07', '08', '01', '09'  
	],

	program: {
		'01': "Jasmine", 
		'02': "Oxtail Soup",
		'03': "Bike Lanes", 
		'04': "44 Magnum",
		'05': "Series of Adjustments", 
		'06': "A Classic Base", 
		'07': "Aphrodite's Girl Friday",
		'08': "Hot Swing", 
		'09': "Kickin' The Can", 
		'10': "Wag That Tail"
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {}, 
	songs: {}
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.populate( jazzCombustionBooks, [ pianoTrioSongs, selfImmolationSongs, openTheGatesSongs ] ); 
