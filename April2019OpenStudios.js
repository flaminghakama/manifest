/*
 *  alt.musica repertoire for Open Studios, April 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-open-studios-april-2019',

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

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ],
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

	partsInBooks: {
	},

	songs: {
	} 
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

