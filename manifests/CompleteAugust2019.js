/*
 *  Complete alt.musica repertoire, August 2019 
 */

var completeRepertoire = {

	title: 'Complete alt.musica Repertoire, August 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-complete-august-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ 
		'01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 
		'13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'
	],

	program: {
		'01': "As It Was alt.musica",
		'02': "Don't Wait for Me",
		'03': "Dreams",
		'04': "Listening", 
		'05': "Mossad",
		'06': "The Optimist",
        '07': "Rising",
		'08': "Self-Immolation alt.musica",
        '09': "Stomping Ground",
		'10': "We Declare alt.musica",
        '11': "Windows",

		'12': "Bechaini",
        '13': "Beautiful Moons Ago (Down M2)",
        '14': "Beautiful Moons Ago",
        '15': "Beautiful Moons Ago (Up M2)",
        '16': "Señorita Jones",
        '17': "It Only Happens Once",
        '18': "Nakamarra",
        '19': "Smooch alt.musica",
        '20': "Softly, As In A Morning Sunrise alt.musica",
        '21': "Sweet Georgia Bright",
        '22': "Take Five",
		'23': "Taken All My Life",
        '24': "Wee",
        '25': "You Don't Know What Love Is alt.musica"
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {}, 
	songs: {}
};

var manifest = new Manifest(completeRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ] ); 

