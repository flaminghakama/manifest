# manifest

Allow the production of an HTML document with links to scores and parts for a program. 

This assumes the following naming convention for the structure of file names:
[ URL base dir ] / [ Song File Location ] / pdf / [ Song File Prefix ] [ Instrument File Suffix ] .pdf


You need to specify a manifest including: 
* Base URL for the file archive
* List of songs in the program, and their order
* List of books in the ensemble.  A book is like the folder you give to a musican, which might have parts for several different instruments, such as Flute & Piccolo.  Each book has a name, and consists of an association of songs to part names.
* Song definitions including:
** metadata (title, composer, arranger)
** file information (fileLocation, filePrefix) 
** list of parts, an association of part names to file suffixes.  
** list of scores, an association of score names to file suffixes.  
** list of recordings, an association of recording types to URLs

Once you define your manifest, you can call the 

var myProgram = new Manifest(manifest);
var manifestHtml = myProgram.displayManifest() ; 

Other available methods:

* displaySong = function(song, baseUrl)
* displayRecordings = function(song) 
* getBaseUrl = function(song) 
* displayScoresAndParts = function(song, baseUrl) 
* displayProgram = function() 
* displayPartsInBook = function(chair, partsLists) 
* displayPartsInBooks = function() 
