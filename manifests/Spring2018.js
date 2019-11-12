/*
 *  alt.musica repertoire, Spring 2018
 */

var springRepertoire = {

	title: 'alt.musica Repertoire for Spring, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-spring-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '05', '03', '06', '07', '08', '01', '02', '04', '09', '10', '11' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
		'06': "Windows",
		'07': "Don't Wait for Me",
		'08': "Stomping Ground",
		'09': "Señorita Jones",
		'10': "Take Five",
		'11': "Sweet Georgia Bright",
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: { }, 
	songs: { }
};

var partSelection = {
	"Bass Clarinet": {
        "We Declare alt.musica": [ "Bass Clarinet in Bb" ],
        "Don't Wait for Me": [ "Bass Clarinet in Bb" ], 
        "Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ], 
		"Windows": [ "Bass Clarinet in Bb" ],
		"Stomping Ground": [ "Bass Clarinet in Bb" ],
		"Smooch alt.musica": [ "Bass Clarinet in Bb" ],
		"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ],
		"Take Five": [ "Bass Clarinet in Bb" ],
		"Sweet Georgia Bright": [ "Bass Clarinet in Bb" ],
	}, 
	"Drums": { 
		"Self-Immolation alt.musica": [ "Drums" ]
	}
};

var manifest = new Manifest(springRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 
