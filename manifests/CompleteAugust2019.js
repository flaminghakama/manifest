/*
 *  Complete alt.musica repertoire, August 2019 
 */

var completeRepertoire = {

	title: 'Complete alt.musica Repertoire, August 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-complete-august-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ 
		'01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', 
		'14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'
	],

	program: {
		'01': "As It Was alt.musica",
		'02': "Bechaini",
		'03': "Don't Wait for Me",
		'04': "Dreams",
		'05': "Listening", 
		'06': "Mossad",
		'07': "The Optimist",
        '08': "Rising",
		'09': "Self-Immolation alt.musica",
        '10': "Stomping Ground",
		'11': "Taken All My Life",
		'12': "We Declare alt.musica",
        '13': "Windows",

        '14': "Beautiful Moons Ago (Down M2)",
        '15': "Beautiful Moons Ago",
        '16': "Beautiful Moons Ago (Up M2)",
        '17': "Have You Met Miss Jones",
        '18': "It Only Happens Once",
        '19': "Nakamarra",
        '20': "Smooch alt.musica",
        '21': "Softly, As In A Morning Sunrise alt.musica",
        '22': "Sweet Georgia Bright",
        '23': "Take Five",
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

