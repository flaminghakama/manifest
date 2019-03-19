/*
 *  alt.musica repertoire for Open Studios, April 2019 
 */

var openStudiosRepertoire = {

	title: 'alt.musica Repertoire for Open Studios, April 2019',

	description: 'Songs with winds, string quartet, voice and rhythm section', 

	selector: '#manifest-open-studios-april-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '14', '15', '02', '03', '04', '13', '06', '05', '07', '08', '09', '10', '11', '12' ],

	program: {
		'01': "Beautiful Moons Ago (Down M2)",
		'14': "Beautiful Moons Ago",
		'15': "Beautiful Moons Ago (Up M2)",
        '02': "It Only Happens Once",
		'03': "You Don't Know What Love Is alt.musica",
		'04': "The Optimist", 
		'05': "We Declare alt.musica",
		'06': "Bechaini",
		'07': "As It Was alt.musica",
		'08': "Self-Immolation alt.musica",
		'09': "Don't Wait for Me",
		'10': "Stomping Ground",
		'11': "Take Five",
        '12': "Wee", 
        '13': "Nakamarra"
	},

	bookOrder: [ ],
	books: { },

	partsInBooks: {
	},

	songs: {
	} 
};

var manifest = new Manifest(openStudiosRepertoire);
manifest.addBooks(altMusicaBooks);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

