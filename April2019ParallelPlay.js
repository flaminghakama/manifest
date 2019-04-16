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

	partsInBooks: {
	},

	songs: {
	} 
};

var manifest = new Manifest(aprilParallelPlayRepertoire);
manifest.addBooks(altMusicaSaxophoneBooks);
console.log('added books', manifest);
manifest.addSongsAndPartsInBooks(originalSongs);
manifest.addSongsAndPartsInBooks(arrangedSongs);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 



