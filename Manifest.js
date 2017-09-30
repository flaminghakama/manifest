/*
 *  Manifest - organize a program of songs for an ensemble
 */
 
function Manifest(manifest) {

	var manifest = manifest ; 

	var __Manifest = function(that) {
		that.manifest = this.manifest ; 
		console.log('Creating manifest ', that.manifest) ;  
	}(this) ; 

    this.displaySong = function(song) {
    	
		var scoreIndex, 
		    songIndex, 
		    score, 
		    part,
		    href, 
			webDir = getBaseUrl(song) + song.fileLocation + '/pdf/',
		    html = '<h3>' + song.title + '</h3>' +
				"<p>Composed by " + song.composer ; 

		if ( song.hasOwnProperty('arranger') && 
			 song.arranger !== '' && 
			 song.composer !== song.arranger ) {  
			html += ', Arranged by ' + song.arranger ;
		}

		html += "</p>\n" ; 

		if ( song.hasOwnProperty('recordings') ) {
			html += this.displayRecordings(song) ; 
		}

		html += this.displayScoresAndParts(song) ; 

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
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		};

		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.getBaseUrl = function(song) { 

		if ( song.hasOwnProperty('baseUrl') && song.baseUrl !== '' ) {
			return song.baseUrl ; 
		} 
		if ( this.manifest.hasOwnProperty('baseUrl') && this.manifest.baseUrl !== '' ) {
			return this.manifest.baseUrl ;
		}
		return '' ;
	} ;

	this.displayScoresAndParts = function(song) { 

		var name, 
			score, 
			href, 
			html = "<h3>Scores<ul>\n<ul>\n" ; 

		for ( name in song.scores ) { 
	 		score = song.scores[name] ; 
			href = this.getBaseUrl(song) + song.filePrefix + score.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		}

		html += "</ul>\n<h3>Parts<ul>\n" ; 

		for ( name in song.parts ) { 
			part = song.parts[name] ; 
			href = this.getBaseUrl(song) + song.filePrefix + part.fileSuffix + '.pdf' ;
			html += '<li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		};
		html += "</ul>\n" ; 

		return html ; 
	} ;

	this.displayProgram = function() { 

		console.log('in displayProgram with this.manifest', this.manifest,
		    "\n    and this.manifest.songs ", this.manifest.songs, 
		    "\n    and this.manifest.programOrder ", this.manifest.programOrder, 
		    "\n    and this.manifest.programOrder.length ", this.manifest.programOrder.length ) ; 

		var programIndex, number, songIndex, song, baseUrl, html ; 
		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songIndex = this.manifest.program[number] ; 
			console.log('        got songIndex ' + songIndex) ;

			song = this.manifest.songs[songIndex] ; 
			console.log('        got song ', song) ;

			html += this.displaySong(song) ; 
			console.log('in displayProgram with number ' + number + 
				', songIndex ' + songIndex + 
				', this.manifest.songs ', this.manifest.songs +
				' and song ' + song) ; 
		}

		return html ; 
	} ; 

	this.displayPartsInBook = function(chair, partsLists) { 

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
				href = getBaseUrl(song) + song.filePrefix + song.parts[part].fileSuffix + '.pdf' ;
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

				html += this.displayPartsInBook( key, books[key] ) ; 

			}
		}
	} ; 

	this.displayManifest = function() { 
		this.displayProgram() ; 
		this.displayPartsInBooks() ; 
	}
}


