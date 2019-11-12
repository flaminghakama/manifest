/*
 *  alt.musica repertoire, July 2018 
 */

var aprilRepertoire = {

	title: 'alt.musica Repertoire for July, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-july-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '14', '04', '12', '09', '08', '05', '01', '13', '02', '03', '07', '06', '10', '11' ],

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
		'12': "Beautiful Moons Ago",
		'13': "It Only Happens Once",
		'14': "The Optimist" 
	},

	bookOrder: [],
	books: {},
	partsInBooks: {},
	songs: {} 
};

var partSelection = {
	"English Horn": {
        "It Only Happens Once": [ "English Horn in F" ],
	},
	"Bass Clarinet": {
		"Beautiful Moons Ago": [ "Bass Clarinet in Bb" ],
        "We Declare alt.musica": [ "Bass Clarinet in Bb" ],
        "Don't Wait for Me": [ "Bass Clarinet in Bb" ], 
		"It Only Happens Once": [ "Bass Clarinet in Bb" ],
		"The Optimist": [ "Bass Clarinet in Bb for Bassoon" ],
        "Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ],
        "Windows": [ "Bass Clarinet in Bb" ],
		"Stomping Ground": [ "Bass Clarinet in Bb" ],
        "Smooch alt.musica": [ "Bass Clarinet in Bb" ],
        "Sweet Georgia Bright": [ "Bass Clarinet in Bb" ],
        "Take Five": [ "Bass Clarinet in Bb" ],
		"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ]
	}
};

var manifest = new Manifest(aprilRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 
