/*
 *  alt.musica repertoire, April 2018 
 */

var aprilRepertoire = {

	title: 'alt.musica Repertoire for April, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-april-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '04', '12', '09', '08', '05', '01', '13', '02', '03', '07', '06', '10', '11' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
		'06': "Windows",
		'07': "Don't Wait for Me",
		'08': "Stomping Ground",
		'09': "Have You Met Miss Jones",
		'10': "Take Five",
		'11': "Sweet Georgia Bright",
		'12': "Beautiful Moons Ago",
		'13': "It Only Happens Once" 
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
};


var manifest = new Manifest(aprilRepertoire);
var container = manifest.setContainerVariableName('container');
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
manifest.selectPartsInBooks(partSelection);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 


