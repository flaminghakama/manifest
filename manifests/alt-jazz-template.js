/*
 *  Alt Jazz Ark repertoire Template 
 */

var altJazzRepertoire = {

	title: 'Alt Jazz Ark Repertoire for April, 2018',

	description: 'Songs with winds, brass, voice, string quartet and rhythm section', 

	selector: '#alt-jazz-manifest',

	baseUrl: 'http://ali-cia.net/altjazz/scores/', 

	programOrder: [ '01', '02', '03' ],

	program: {
		'01': "Next Level Shit",
		'02': "You Don't Know What Love Is alt.musica",
		'04': "Self-Immolation alt.musica",
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
	partsInBooks: { },
	songs: { }
};

var manifest = new Manifest(altJazzRepertoire);
manifest.populate( altMusicaBooks, [ altJazzSongs["Next Level Shit"], arrangedSongs, originalSongs ] ); 




