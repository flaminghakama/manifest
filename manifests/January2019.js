/*
 *  alt.musica repertoire, January 2019 
 */

var januaryRepertoire = {

	title: 'alt.musica Repertoire for January, 2019',

	description: 'Songs with saxophone, string quartet and rhythm section', 

	selector: '#manifest-january-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '08', '05', '03', '02', '09', '04', '01', '06', '11', '07' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "Self-Immolation alt.musica",
		'03': "We Declare alt.musica",
		'04': "Windows",
		'05': "Don't Wait for Me",
		'06': "Stomping Ground",
		'07': "Take Five",
		'08': "Beautiful Moons Ago",
		'09': "The Optimist", 
		'10': "Bechaini",
		'11': "As It Was alt.musica"
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
        "Beautiful Moons Ago": [ "Clarinet in A" ], 
        "Don't Wait for Me": [ "Solo Clarinet in A" ],
		"We Declare alt.musica": [ "Voice for A" ], 
		"Self-Immolation alt.musica": [ "Solo Soprano Saxophone in Bb" ], 
		"The Optimist": [ "Voice" ], 
		"Windows": [ "Solo Alto Saxophone in Eb" ], 
		"Smooch alt.musica": [ "Solo Alto Saxophone in Eb" ], 
		"Stomping Ground": [ "Solo Tenor Saxophone in Bb" ], 
		"As It Was alt.musica": [ "Solo Tenor Saxophone in Bb" ], 
		"Take Five": [ "Alto Saxophone in Eb" ]
	}
};

var manifest = new Manifest(januaryRepertoire);
manifest.populate( altMusicaSaxophoneBooks, [ originalSongs, arrangedSongs ], partSelection ); 
