/*
 *  Manifest - organize a program of songs for an ensemble
 */
 
function getValues(obj){
    var values = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) { values[values.length] = obj[key]; }
    } 
    return values;
}

function Manifest(manifest) {

	var __Manifest = function(that, manifest) {
		that.manifest = manifest ; 
	}(this, manifest) ; 

	this.addPartsInBooks = function(newManifest) {

 		this.partsInUse = this.partsInUse || {};
 		var songsInProgram = Object.values(this.manifest.program);
 		var manifestToUse = newManifest ? newManifest : this.manifest;

		for (i=0 ; i < Object.keys(manifestToUse.partsInBooks).length ; i++) { 
			var bookName = Object.keys(manifestToUse.partsInBooks)[i]; 
			if ( this.bookNames.indexOf(bookName) > -1 ) { 
				var partsInBook = manifestToUse.partsInBooks[bookName];
				for (var j=0 ; j < Object.keys(partsInBook).length ; j++) { 
					var songName = Object.keys(partsInBook)[j];
					if (songsInProgram.indexOf(songName) > -1) { 
						this.partsInUse[songName] = this.partsInUse[songName] || []; 
						var partsList = partsInBook[songName];
						for (var k=0 ; k < partsList.length ; k++) {
							var partName = partsList[k]; 
							if (this.partsInUse[songName].indexOf(partName) == -1) {
								this.partsInUse[songName].push(partName);
							}
						}
						this.manifest.partsInBooks[bookName] = this.manifest.partsInBooks[bookName] || {};
		 				this.manifest.partsInBooks[bookName][songName] = manifestToUse.partsInBooks[bookName][songName];
		 			}
		 		}
			}
		}		
	} ;

	this.addSongsAndPartsInBooks = function(newManifest) {

		this.bookNames = getValues(this.books);
		var manifestToUse = newManifest ? newManifest : this.manifest;
		for (var i=0 ; i < Object.keys(manifestToUse.songs).length ; i++) { 
			var songName = Object.keys(manifestToUse.songs)[i]; 
			var song = manifestToUse.songs[songName];
			if ( this.manifest.songs && this.manifest.songs.hasOwnProperty(songName) ) {
				console.log("Skipping song " + songName + " since is was already present");
			} else { 
				this.manifest.songs[songName] = song;
			}
		}

		this.addPartsInBooks(manifestToUse);
	} ;

	this.addBooks = function(newManifest) {
		var manifestToUse = newManifest ? newManifest : this.manifest;
		if ( manifestToUse.books ) { 
			this.books = manifestToUse.books;
			this.bookNames = getValues(this.books);
		} else { 
			console.log('No books present to add in manifest', manifestToUse) ; 
		}
		if ( manifestToUse.bookOrder ) { 
			this.bookOrder = manifestToUse.bookOrder;
		} else { 
			console.log('No book order present to add in manifest', manifestToUse) ; 
		}
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

    this.displaySong = function(songName, song) {
    	
		var html = "<div class='song-details' name='" + this.rationalizeName(song.metadata.title) + "'>\n";

		if ( song.hasOwnProperty('metadata') ) {
			html += this.displaySongMetadata(song) ; 
		}

		if ( song.hasOwnProperty('scores') ) {
			html += this.displaySongScores(song) ; 
		}

		if ( song.hasOwnProperty('parts') ) {
			html += this.displaySongParts(songName, song) ; 
		}

		if ( song.hasOwnProperty('recordings') ) {
			html += this.displaySongRecordings(song) ; 
		}

		html += 
			"</div>\n";

		return html ; 
	} ; 

	this.displaySongMetadata = function(song) { 

		var html = 
			"<div class='song-metadata'>\n<h3>" + song.metadata.title + "</h3>\n" +
			"    <ul>\n" + 
			"    <li><b>Composed by</b> " + song.metadata.composer ; 

		if ( song.metadata.hasOwnProperty('arranger') && 
			 song.metadata.arranger !== '' && 
			 song.metadata.composer !== song.metadata.arranger ) {  
			html += ", <b>arranged by</b> " + song.metadata.arranger ; 
		}
		
		html += "</li>\n" ; 

		for ( name in song.metadata ) { 
			if ( name !== 'title'  &&  name !== 'composer'  &&  name !== 'arranger' ) { 

				if ( name === 'bpm' ) { 
			 		value = song.metadata[name] ; 
					html += "<li><b>Tempo</b>: " + value + ' ' + name + "</li>\n" ; 
				} else if ( name === 'genre' ) {
			 		value = song.metadata[name] ; 
					html += "<li><b>Style</b>: " + value + "</li>\n" ; 
				} else {
			 		value = song.metadata[name] ; 
					html += "<li><b>" + name + "</b>: " + value + "</li>\n" ; 
				}
			}
		}

		html += "    </ul>\n</div>\n" ; 

		return html ; 
	} ; 
		
	this.displaySongRecordings = function(song) { 

		var name, 
			recording, 
			description,
			href, 
			html = "<div class='song-recordings'>\n    <h4>Recordings</h4>\n    <ul>\n",
			howManyRecordings = 0 ; 

		for ( name in song.recordings ) { 
	 		recording = song.recordings[name] ; 
	 		description = ( recording.description !== '' ) ? recording.description : name ; 

			if ( recording.url !== '' ) { 
				html += '        <li><a target="_blank" href="' + recording.url + '">' + recording.description + "</a></li>\n" ; 
				howManyRecordings += 1 ; 
			}
		}

		if ( howManyRecordings == 0 ) { 
			html = '' ; 
		} else {
			html += "    </ul>\n    <div class='clear'></div>\n</div>\n" ; 
		}

		return html ; 
	} ; 

	this.displaySongScores = function(song) { 

		var name, 
			score, 
			href, 
			html = "<div class='song-scores'>\n    <h4>Scores</h4>\n    <ul>\n" ; 

		for ( name in song.scores ) { 
	 		score = song.scores[name] ; 
			href = this.getBaseUrl(song) + 
				song.fileLocation + '/pdf/' + 
				song.filePrefix + score.fileSuffix + '.pdf' ;
			html += '        <li><a target="_blank" href="' + href + '">' + name + "</a></li>\n" ; 
		}

		html += "    </ul>\n    <div class='clear'></div>\n</div>\n" ; 

		return html ; 
	} ;

	this.displaySongParts = function(songName, song) { 

		var partName,  
			href, 
			html = "<div class='song-parts'>\n    <h4>Parts</h4>\n    <ul>\n" ; 

		if ( !this.bookNames ) { 
			this.addBooks();
			this.addSongsAndPartsInBooks();
		}
		if ( !this.partsInUse ) { 
			this.addPartsInBooks();
		}
	
		for ( var i=0;  i < this.partsInUse[songName].length ; i++ ) {
			partName = this.partsInUse[songName][i] ; 
			part = song.parts[partName] ; 
			if (part) { 
				href = this.getBaseUrl(song) + 
					song.fileLocation + '/pdf/' + 
					song.filePrefix + part.fileSuffix + '.pdf' ;
				html += '        <li><a target="_blank" href="' + href + '">' + partName + "</a></li>\n" ; 
			} else {
 				console.log('Skipping missing part: ' + songName + ' - ' + partName);
			}
		} 
		html += "    </ul>\n    <div class='clear'></div>\n</div>\n" ; 

		return html ; 
	} ;

	this.displayProgramSummary = function() { 

		var programIndex, number, songIndex, song, baseUrl, 
			html = "<h2>Songs in program</h2>\n<div class='program-summary'>\n" + 
				"    <p>Links to details about each song</p>\n    <ul>\n" ;

		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songIndex = this.manifest.program[number] ; 
			song = this.manifest.songs[songIndex] ; 
			rationalizedSongName = this.rationalizeName(song.metadata.title);
			html += "           <li name=\"" + rationalizedSongName + 
				"\" onclick=\"manifest.showSong(" + 
				this.containerVariableName + ",'" +
				rationalizedSongName + "')\">" + song.metadata.title + "</li>\n";
		}
		html += "        </ul>" ; 
		html += "        <div class='clear'></div>\n" ;
		html += this.displayProgramSongs() ; 
		html += "    <div class='clear'></div>\n</div>\n" ; 
		return html ; 
	} ; 

	this.displayProgramSongs = function() { 

		var programIndex, number, songName, song, baseUrl, 
			html = "" ; 

		for ( programIndex = 0 ; programIndex < this.manifest.programOrder.length ; programIndex++ ) {

			number = this.manifest.programOrder[programIndex] ;
			songName = this.manifest.program[number] ; 
			song = this.manifest.songs[songName] ; 
			html += this.displaySong(songName, song) ; 
		}
		html += "\n" ; 

		return html ; 
	} ; 

	this.rationalizeName = function(name) { 
		return name.replace(/[^0-9a-z]/gi, ''); 
	} ; 

	this.displayPartsInBook = function(chair, partsLists) { 

		var songNumber, 
			songId, 
			song, 
			partsList,
			partIndex, 
			part, 
			href, 
			that = this,
			manifest = this.manifest,  
			html = "<div name='" + this.rationalizeName(chair) + "'>\n<h3>" + chair + "</h3>\n" +  
				"<ul class='parts-in-book'>\n" ; 

		manifest.programOrder.forEach( function(songNumber) {

			songId = manifest.program[songNumber] ;
			song = manifest.songs[songId] ; 
			partsList = partsLists[songId] ; 
			songUrl = that.getBaseUrl(song) + 
				song.fileLocation + '/pdf/' + 
				song.filePrefix ; 

			if ( partsList === undefined ) {
				return ; 
			}
			 
			if ( partsList.length == 1 ) { 
				part = partsList[0] ; 
				if ( typeof song.parts[part] !== 'undefined' ) {   
					href = songUrl + song.parts[part].fileSuffix + '.pdf' ;
					html += '        <li><a target="_blank" href="' + href + '">' + part + '&nbsp;-&nbsp;' + song.metadata.title + "</a></li>\n" ; 
				}
			} else { 
				if ( partsList.length > 1 ) { 
					html += "        <li>\n";
					for ( partIndex = 0 ; partIndex < partsList.length ; partIndex++ ) { 
						part = partsList[partIndex] ; 
						if ( typeof song.parts[part] !== 'undefined' ) {   
							href = songUrl + song.parts[part].fileSuffix + '.pdf' ;
							html += '            <a target="_blank" href="' + href + '">' + part + '&nbsp;-&nbsp;' + song.metadata.title + "</a>" ; 
							if ( partIndex+1 < partsList.length ) { 
								if ( partIndex === 0 ) { 
									html += ' (' ;
								} else {
									html += ', ' ; 
								}
								html += "or else "; 
							}
							if ( partIndex+1 === partsList.length ) {
								html += ')' ; 
							}
						}
					}
					html += "</li>\n" ; 
				} else { 
					console.log('No parts found for song ' + song.title + ' for chair ' + chair) ; 
				}
			}
		});

		html += "    </ul>\n    <div class='clear'></div>\n</div>\n" ; 

		return html ; 
	} ;

	this.displayBookSummary= function() { 

		var key, name
			books = this.manifest.partsInBooks, 
			html = "<h2>Instrumental books</h2>\n<div class='book-summary'>\n" ; 

		html += "    <p>Links to the pdf files for the parts, by instrument</p>\n    <ul class='instrument-list'>\n" ;

		for ( key in books ) {
			if ( books.hasOwnProperty(key) ) {
				html += "        <li " + 
					"name='" + this.rationalizeName(key) + "' " + 
					"onClick='manifest.showBook(" + 
						this.containerVariableName + ',"' + this.rationalizeName(key) + '");' +
					"'>" + key + '</li>\n';
			}
		}
		html += "    </ul>\n";
		html += "    <div class='clear'></div>\n" ;
		html += this.displayPartsInBooks() ; 
		html += "    <div class='clear'></div>\n</div>\n" ;

		return html ; 
	} ; 

	this.displayPartsInBooks = function() { 

		var key,
			books = this.manifest.partsInBooks, 
			html = "<blockquote>\n    <div class='parts-in-books'>\n" ; 

		for ( key in books ) {

			if ( books.hasOwnProperty(key) ) {

				html += this.displayPartsInBook( key, books[key] ) ; 

			}
		}
		html += "    </blockquote>\n</div>\n" ; 

		return html ; 
	} ; 

	this.displayManifest = function() { 

		var html = "<h1>" + this.manifest.title + "</h1>\n<div class='program'>\n" ;
		html += "<p>" + this.manifest.description + "</p>\n" ; 
		html += this.displayProgramSummary() ; 
		html += this.displayBookSummary() ; 
		html += "</div>\n" ; 

		return html ; 
	}

	this.placeManifestOnReady = function(content) {

		var entity = this ; 

		document.addEventListener(
		
			'DOMContentLoaded', 

			function(){
				var containers = document.querySelectorAll(entity.manifest.selector), 
					container ; 
				if ( containers.length > 0 ) { 
					container = containers[0] ;
					container.innerHTML = content ;
					this.container = container;
					return ; 
				} 
				console.log('Could not find elmement with id ' + entity.manifest.selector + ', so addding child.') ;
				document.getElementsByTagName('BODY')[0].innerHTML = content ;
			}, 

			false
		);
	}

	this.selectPartsInBooks = function(partsInBooks) { 

 		var songsInProgram = Object.values(this.manifest.program);

		for ( i=0 ; i < Object.keys(partsInBooks).length ; i++ ) { 
			var bookName = Object.keys(partsInBooks)[i]; 
			if ( this.bookNames.indexOf(bookName) === -1 ) { 
				console.log('Skipping book that is not in manifest: ', bookName);
				continue; 
			}
			var book = partsInBooks[bookName];
			for (j=0 ; j < Object.keys(book).length ; j++ ) { 
				var songName = Object.keys(book)[j];
				if ( songsInProgram.indexOf(songName) === -1 ) { 
					console.log('Skipping song that is not in program: ', songName);
					continue; 
				} 
				var newListOfParts = [];
				var listOfParts = book[songName];
				for ( var k=0 ; k < Object.keys(listOfParts).length ; k++ ) { 
					var partName = listOfParts[k];
					if ( this.manifest.songs.hasOwnProperty(songName) &&
						 this.manifest.songs[songName].parts.hasOwnProperty(partName) ) {
						newListOfParts.push(partName);
					} else { 
						console.log('Skipping part that is not in song: ', partName);
					}
	 			}
	 			if ( newListOfParts.length ) {	
	 				this.manifest.partsInBooks[bookName][songName] = newListOfParts;
	 			} else { 
	 				console.log('Could not find any valid parts for book ' + bookName + ', song ' + songName + ' among ', listOfParts);
	 			}
	 		}
		}		
	};

	this.setContainerVariableName = function(containerVariableName) { 
		this.containerVariableName = containerVariableName;
	} ; 

	this.showBook = function(container, bookName) { 

		var bookTitles = container.querySelectorAll('.program .book-summary > ul > li');		
		[].forEach.call(bookTitles, function(bookTitle) {
			var thisBookTitleName = bookTitle.getAttribute('name');
			if ( thisBookTitleName == bookName ) { 
				bookTitle.classList.add('selected');
			} else { 
				bookTitle.classList.remove('selected');
			}
		});

		var books = container.querySelectorAll('.program .parts-in-books div');		
		[].forEach.call(books, function(book) {
			var thisBookName = book.getAttribute('name');
			if ( thisBookName == bookName ) { 
				book.classList.add('selected');
			} else { 
				book.classList.remove('selected');
			}
		});
	} ; 

	this.showSong = function(container, songName) { 
		var songs = container.querySelectorAll('.program .program-summary > ul > li');		
		[].forEach.call(songs, function(song) {
			var thisSongName = song.getAttribute('name');
			if ( thisSongName == songName ) { 
				song.classList.add('selected');
			} else { 
				song.classList.remove('selected');
			}
		});

		var songDetails = container.querySelectorAll('.program .song-details');		
		[].forEach.call(songDetails, function(song) {
			var thisSongName = song.getAttribute('name');
			if ( thisSongName == songName ) { 
				song.classList.add('selected');
			} else { 
				song.classList.remove('selected');
			}
		});

	} ; 

}; 

