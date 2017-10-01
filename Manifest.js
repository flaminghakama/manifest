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

    this.displaySong = function(manifest, song) {
    	
		var html = '' ; 

		if ( song.hasOwnProperty('metadata') ) {
			html += this.displayMetadata(song) ; 
		}

		if ( song.hasOwnProperty('scores') ) {
			html += this.displayScores(song) ; 
		}

		if ( song.hasOwnProperty('parts') ) {
			html += this.displayParts(song) ; 
		}

		if ( song.hasOwnProperty('recordings') ) {
			html += this.displayRecordings(song) ; 
		}

		return html ; 
	} ; 

	this.displayMetadata = function(song) { 

		var html = '<h3>' + song.title + "</h3>\n" +
			"<p>Composed by " + song.composer ; 

		if ( song.hasOwnProperty('arranger') && 
			 song.arranger !== '' && 
			 song.composer !== song.arranger ) {  
			html += ', Arranged by ' + song.arranger ;
		}
		
		html += "</p>\n" ; 

		return html ; 
	} ; 
		
	this.displayRecordings = function(song) { 

		var name, 
			recording, 
			href, 
			html = "<h3>Recordings</h3>\n<ul>\n" ; 

		for ( name in song.recordings ) { 
	 		recording = song.recordings[name] ; 
			href = song.recordings[name] ; 
			if ( href !== '' ) { 
				html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
			}
		};

		html += "</ul>\n" ; 

		return html ; 
	} ; 

	this.displayScores = function(song) { 

		var name, 
			score, 
			href, 
			html = "<h3>Scores</h3>\n<ul>\n" ; 

		for ( name in song.scores ) { 
	 		score = song.scores[name] ; 
			href = this.getBaseUrl(song) + song.filePrefix + score.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		}

		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displayParts = function(song) { 

		var name,  
			href, 
			html = "<h3>Parts</h3>\n<ul>\n" ; 

		for ( name in song.parts ) { 
			part = song.parts[name] ; 
			href = this.getBaseUrl(song) + song.filePrefix + part.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		};
		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displayProgram = function() { 

		var programIndex, number, songIndex, song, baseUrl, html ; 
		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songIndex = this.manifest.program[number] ; 
			song = this.manifest.songs[songIndex] ; 
			html += this.displaySong(this, song) ; 
		}

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
			html += '<li>' + song.title ;
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

		// html += this.displayProgram() ; 

		// html += this.displayPartsInBooks() ; 

		return html ; 
	}
}


