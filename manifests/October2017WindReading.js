/*
 *  Example manifest definition
 */

var windReading = {

	title: 'alt.musica winds reading 27 October, 2017',

	description: 'Rehearsal for the winds and rhythm section' + 
		' to introduce arrangements of Jazz standards and originals,' +
		' for which string quartet arrangements already exist.',

	selector: '#manifest-wind-reading',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '05', '04', '02', '03' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
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
        "Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ], 
		"Smooch alt.musica": [ "Bass Clarinet in Bb" ], 
        "We Declare alt.musica": [ "Bass Clarinet in Bb" ],
		"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ]
	}
};

var manifest = new Manifest(windReading);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 
