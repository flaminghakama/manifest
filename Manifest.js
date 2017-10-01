/*
 *  Manifest - organize a program of songs for an ensemble
 */
 
function Manifest(manifest) {

	var manifest = manifest ; 

	var __Manifest = function(that) {
		that.manifest = this.manifest ; 
		console.log('Creating manifest ', that.manifest) ;  
	}(this) ; 

	this.getBaseUrl = function(song) { 

		if ( song.hasOwnProperty('baseUrl') && song.baseUrl !== '' ) {
			return song.baseUrl ; 
		} 
		if ( this.manifest.hasOwnProperty('baseUrl') && this.manifest.baseUrl !== '' ) {
			return this.manifest.baseUrl ;
		}
		return '' ;
	} ;

    this.displaySong = function(song) {
    	
		var html = '' ; 

		if ( song.hasOwnProperty('metadata') ) {
			html += this.displaySongMetadata(song) ; 
		}

		if ( song.hasOwnProperty('scores') ) {
			html += this.displaySongScores(song) ; 
		}

		if ( song.hasOwnProperty('parts') ) {
			html += this.displaySongParts(song) ; 
		}

		if ( song.hasOwnProperty('recordings') ) {
			html += this.displaySongRecordings(song) ; 
		}

		return html ; 
	} ; 

	this.displaySongMetadata = function(song) { 

		var html = '<a name="' + song.metadata.title + '"></a>\n' + 
			'<h2>' + song.metadata.title + "</h2>\n" +
			"<p>Composed by " + song.metadata.composer ; 

		if ( song.metadata.hasOwnProperty('arranger') && 
			 song.metadata.arranger !== '' && 
			 song.metadata.composer !== song.metadata.arranger ) {  
			html += ', Arranged by ' + song.metadata.arranger ;
		}
		
		html += "</p>\n" ; 

		return html ; 
	} ; 
		
	this.displaySongRecordings = function(song) { 

		var name, 
			recording, 
			href, 
			html = "<h3>Recordings</h3>\n<ul>\n",
			howManyRecordings ; 

		for ( name in song.recordings ) { 
	 		recording = song.recordings[name] ; 
			href = song.recordings[name] ; 
			if ( href !== '' ) { 
				html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
				howManyRecordings += 1 ; 
			}
		};

		if ( howManyRecordings == 0 ) { 
			html = '' ; 
		} else {
			html += "</ul>\n" ; 
		}

		return html ; 
	} ; 

	this.displaySongScores = function(song) { 

		var name, 
			score, 
			href, 
			html = "<h3>Scores</h3>\n<ul>\n" ; 

		for ( name in song.scores ) { 
	 		score = song.scores[name] ; 
			href = this.getBaseUrl(song) + 
				song.fileLocation + '/pdf/' + 
				song.filePrefix + score.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		}

		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displaySongParts = function(song) { 

		var name,  
			href, 
			html = "<h3>Parts</h3>\n<ul>\n" ; 

		for ( name in song.parts ) { 
			part = song.parts[name] ; 
			href = this.getBaseUrl(song) + 
				song.fileLocation + '/pdf/' + 
				song.filePrefix + part.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		};
		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displayProgramSummary = function() { 

		var programIndex, number, songIndex, song, baseUrl, 
			html = "<h1>Program</h1>\n<ul>\n",
			songHtml = ''  ;

		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songIndex = this.manifest.program[number] ; 
			song = this.manifest.songs[songIndex] ; 
			html += '<li><a href="#' + song.metadata.title + '">' + song.metadata.title + "</a></li>\n";
		}
		html += "</ul>\n" ; 

		return html ; 
	} ; 

	this.displayProgram = function() { 

		var programIndex, number, songIndex, song, baseUrl, 
			html = "<ul>\n",
			songHtml = ''  ;

		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songIndex = this.manifest.program[number] ; 
			song = this.manifest.songs[songIndex] ; 
			html += this.displaySong(song) ; 
		}
		html += "</ul>\n" ; 

		return html ; 
	} ; 

	this.displayPartsInBook = function(manifest, chair, partsLists) { 

		var songId, 
			song, 
			partsList,
			partIndex, 
			part, 
			href, 
			html = '<h3>' + chair + '</h3>' +
				"\n\n<ul>\n" ; 

		Object.keys(partsLists).forEach(function(songId) {

	    	song = this.manifest.songs[songId] ; 
			partsList = partsLists[songId] ; 
			html += '<li>' + song.metadata.title ;
			for ( partIndex = 0 ; partIndex < partsList.length ; partIndex++ ) { 
				part = partsList[partIndex] ; 
				href = manifest.getBaseUrl(song) + song.filePrefix + song.parts[part].fileSuffix + '.pdf' ;
				html += ' <a target="_blank" href="' + href + '">' + part + '</a>' ; 
				if ( partIndex+1 < partsList.length ) { 
					html += ',' ; 
				}
			}
			html += "</li>\n" ; 
		});

		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displayBookSummary= function() { 

		var html, key,
			books = this.manifest.partsInBooks ; 

		for ( key in books ) {

			if ( books.hasOwnProperty(key) ) {

				html += books[key] ;

			}
		}


	books: {
		"01": "Flute",
		"02": "English Horn",
		"03": "Bass Clarinet",


		return html ; 
	} ; 

	this.displayPartsInBooks = function() { 

		var html, key,
			books = this.manifest.partsInBooks ; 

		for ( key in books ) {

			if ( books.hasOwnProperty(key) ) {

				html += this.displayPartsInBook( this, key, books[key] ) ; 

			}
		}

		return html ; 
	} ; 

	this.displayManifest = function() { 

		var html = '' ; 
		html += this.displayProgramSummary() ; 
		html += this.displayBookSummary() ; 
		html += this.displayProgram() ; 
		html += this.displayPartsInBooks() ; 

		return html ; 
	}

	this.placeManifestOnReady = function(content) {

		document.addEventListener(
		
			'DOMContentLoaded', 

				function(){
					var content = content || this.manifest.displayManifest() ;
					var container = document.getElementById(this.manifest.selector) ; 
					if ( container !== undefined  &&  typeof container === 'object' ) { 
						container.innerHTML = content ;
						return ; 
					} 
					console.log('Could not find elmement with id ' + this.manifest.selector + 'so addding child.') ;
					document.getElementsByTagName('BODY')[0].innerHTML = content ;
				}, 

			false
		);
	}

} ; 



}


