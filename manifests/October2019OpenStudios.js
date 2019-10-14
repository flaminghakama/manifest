/*
 *  alt.musica repertoire for Open Studios, October 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-open-studios-october-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '03', '04', '05', '06', '07', '08', '09', '10', '12', '13' ],

	program: {
		'01': "Listening", 
        '03': "Rising",
		'04': "We Declare alt.musica",
		'05': "It Only Happens Once",
		'06': "As It Was alt.musica",
		'07': "Self-Immolation alt.musica",
		'08': "Don't Wait for Me",
		'09': "Mossad",
		'10': "Taken All My Life",
		'12': "The Nymph",
		'13': "Tension Cue",
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {}, 
	songs: {}
};

var partSelection = {
	"Flute, Alto Flute & Piccolo": {
		"The Nymph": [ "Piccolo" ], 
		"We Declare alt.musica": [ "Piccolo" ], 
	},
	"English Horn": {
        "It Only Happens Once": [ "English Horn in F" ]
	},
	"Bass Clarinet": {
        "It Only Happens Once": [ "Clarinet in A" ], 
        "Don't Wait for Me": [ "Clarinet in A" ],
		"Listening": [ "Bass Clarinet in Bb for Bassoon" ], 
		"Rising": [ "Bass Clarinet in Bb for Bassoon" ], 
		"Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ], 
		"As It Was alt.musica": [ "Bass Clarinet in Bb" ], 
		"We Declare alt.musica": [ "Bass Clarinet in Bb" ]
	},
	"Drums": {
		"Self-Immolation alt.musica": [ "Drums" ], 
	}
};


var manifest = new Manifest(openStudiosRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 

