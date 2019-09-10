/*
 *  alt.musica repertoire for Open Studios, October 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-open-studios-october-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13' ],

	program: {
		'01': "Listening", 
        '02': "It Only Happens Once",
        '03': "Rising",
		'04': "We Declare alt.musica",
		'05': "Bechaini",
		'06': "As It Was alt.musica",
		'07': "Self-Immolation alt.musica",
		'08': "Don't Wait for Me",
		'09': "Mossad",
		'10': "Taken All My Life",
		'11': "The Optimist",
		'12': "The Nymph",
		'13': "Tension Cue",
	},

	bookOrder: [ ],
	books: { },
	partsInBooks: {}, 
	songs: {}
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.populate( altMusicaBooks, [ originalSongs, arrangedSongs ] ); 

