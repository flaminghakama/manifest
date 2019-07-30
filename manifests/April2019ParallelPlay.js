/*
 *  alt.musica repertoire, January 2019 
 */

var aprilParallelPlayRepertoire = {

	title: 'alt.musica Repertoire for Parallel Play, 21 April 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-parallel-play-april-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '02', '09', '05', '03', '06', '11', 
	                '01', '08', '07', '04', '10' ],

	program: {
		'01': "Beautiful Moons Ago (Up M2)",
        '02': "It Only Happens Once",
		'03': "You Don't Know What Love Is alt.musica",
		'04': "Bechaini",
        '05': "Nakamarra",
		'06': "Don't Wait for Me",
		'07': "We Declare alt.musica",
		'08': "Self-Immolation alt.musica",
		'09': "Windows",
		'10': "Stomping Ground",
		'11': "As It Was alt.musica"
	},

	bookOrder: [ ],
	books: { },
 	partsInBooks: {}, 
 	songs: {}
};

var partSelection = {
	"Bass Clarinet": {
        "Beautiful Moons Ago (Up M2)": [ "Voice for A" ], 
        "It Only Happens Once": [ "Voice for A" ], 
        "Don't Wait for Me": [ "Solo Clarinet in A" ],
		"We Declare alt.musica": [ "Voice for Bb" ], 
		"Self-Immolation alt.musica": [ "Solo Soprano Saxophone in Bb" ], 
		"Windows": [ "Solo Clarinet in A" ], 
		"Stomping Ground": [ "Solo Tenor Saxophone in Bb" ], 
		"As It Was alt.musica": [ "Solo Tenor Saxophone in Bb" ], 
		"Bechaini": [ "Voice for A" ],
		"You Don't Know What Love Is alt.musica": [ "Voice for Bb" ]
	},
	"Drums": {
		"Self-Immolation alt.musica": [ "Drums" ], 
	}
};

var manifest = new Manifest(aprilParallelPlayRepertoire);
manifest.populate( altMusicaSaxophoneBooks, [ originalSongs, arrangedSongs ], partSelection ); 
