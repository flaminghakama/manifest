/*
 *  alt.musica repertoire
 */

var januaryRepertoire = {

	title: 'alt.musica Repertoire for January, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-january-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '05', '03', '06', '07', '08', '01', '02', '04' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
		'06': "Windows",
		'07': "Don't Wait for Me",
		'08': "Stomping Ground"
	},

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ],
	books: {
		'01': "Flute, Alto Flute & Piccolo",
		'02': "English Horn",
		'03': "Bass Clarinet",
		'04': "Voice",
		'05': "Drums",
		'06': "Violin I",
		'07': "Violin II",
		'08': "Viola",
		'09': "'Cello",
		'10': "Bass",
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
        "We Declare alt.musica": [ "Bass Clarinet in Bb" ],
        "Don't Wait for Me": [ "Bass Clarinet in Bb" ], 
        "Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ],
        "Windows": [ "Bass Clarinet in Bb" ],
		"Stomping Ground": [ "Bass Clarinet in Bb" ],
        "Smooch alt.musica": [ "Bass Clarinet in Bb" ],
		"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ]
	}
};

var manifest = new Manifest(januaryRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ], partSelection ); 
