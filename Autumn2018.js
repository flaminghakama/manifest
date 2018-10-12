/*
 *  alt.musica repertoire, Autumn 2018 
 */

var autumnRepertoire = {

	title: 'alt.musica Repertoire for Autumn, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-autumn-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '06', '05', '04' ],

	program: {
		'01': "The Optimist",
		'02': "Rising",
		'03': "Listening",
		'04': "Dreams",
		'05': "Wee", 
		'06': "Bechaini" 
	},

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ],
	books: {
		'01': "Flute, Alto Flute & Piccolo",
		'02': "English Horn",
		'03': "Bass Clarinet",
		'04': "Bassoon",
		'05': "Voice",
		'06': "Drums",
		'07': "Violin I",
		'08': "Violin II",
		'09': "Viola",
		'10': "'Cello",
		'11': "Bass",
	},

	partsInBooks: {
		"Flute, Alto Flute & Piccolo": {
            "The Optimist": [ "Piccolo", "Flute" ],
            "Rising": [ "Flute" ],
            "Listening": [ "Flute" ],
            "Dreams": [ "Flute" ],
            "Wee": [ "Flute" ],
            "Bechaini": [ "Flute" ]
        },
		"English Horn": {
            "The Optimist": [ "English Horn in F for Clarinet" ],
            "Rising": [ "English Horn in F for Clarinet" ],
            "Listening": [ "English Horn in F for Clarinet" ],
            "Dreams": [ "English Horn in F for Clarinet" ],
            "Wee": [ "English Horn in F for Clarinet" ],
            "Bechaini": [ "English Horn in F" ]
        },
		"Bass Clarinet": {
            "The Optimist": [ "Clarinet in A", "Bass Clarinet in Bb for Bassoon" ],
            "Rising": [ "Clarinet in A" ],
            "Listening": [ "Clarinet in A", "Bass Clarinet in Bb for Clarinet sharps", "Bass Clarinet in Bb for Clarinet flats" ],
            "Dreams": [ "Clarinet in A" ],
            "Wee": [ "Clarinet in A", "Bass Clarinet in Bb for Bassoon" ],
            "Bechaini": [ "Bass Clarinet in Bb" ]
		},
		"Bassoon": {
            "The Optimist": [ "Bassoon" ],
            "Rising": [ "Bassoon" ],
            "Listening": [ "Bassoon" ],
            "Wee": [ "Bassoon" ],
            "Bechaini": [ "Bassoon for Bass Clarinet" ]
		},
		"Voice/Percussion": {
            "The Optimist": [ "Voice" ],
            "Rising": [ "Voice" ],
            "Listening": [ "Voice" ],
            "Bechaini": [ "Voice" ]
		},
		"Drums": {
            "The Optimist": [ "Voice" ],
            "Rising": [ "Bass" ],
            "Listening": [ "Voice" ],
            "Dreams": [ "Violin II" ],
            "Wee": [ "Flute" ],
            "Bechaini": [ "Voice" ]
		},
		"Violin I": {
            "The Optimist": [ "Violin I" ],
            "Rising": [ "Violin I" ],
            "Listening": [ "Violin I" ],
            "Dreams": [ "Violin I" ],
            "Wee": [ "Violin I" ],
            "Bechaini": [ "Voilin I" ]
		},
		"Violin II": {
            "The Optimist": [ "Violin II" ],
            "Rising": [ "Violin II" ],
            "Listening": [ "Violin II" ],
            "Dreams": [ "Violin II" ],
            "Wee": [ "Violin II" ],
            "Bechaini": [ "Violin II" ]
		},
		"Viola": {
            "The Optimist": [ "Viola" ],
            "Rising": [ "Viola" ],
            "Listening": [ "Viola" ],
            "Dreams": [ "Viola" ],
            "Wee": [ "Viola" ],
            "Bechaini": [ "Viola" ]
		},
		"'Cello": {
            "The Optimist": [ "'Cello" ],
            "Rising": [ "'Cello" ],
            "Listening": [ "'Cello" ],
            "Dreams": [ "'Cello" ],
            "Wee": [ "'Cello" ],
            "Bechaini": [ "'Cello" ]
		},
		"Bass": {
            "The Optimist": [ "Bass" ],
            "Rising": [ "Bass" ],
            "Listening": [ "Bass" ],
            "Dreams": [ "Bass" ],
            "Wee": [ "Bass" ],
            "Bechaini": [ "Bass" ]
		}
	},

	songs: {

		"The Optimist": {
			metadata: { 
				title: "The Optimist",
				composer: "Aeion Solar",
				arranger: "D. Elaine Alt", 
				genre: "Classical",
				bpm: '116',
				key: "B"
			},
			fileLocation: "alt.musica",
			filePrefix: "optimist/strings/optimist-",
			parts: {
				"Piccolo": { fileSuffix: "Piccolo" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F for Clarinet": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb for Bassoon": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Voice": { fileSuffix: "Voice" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				original: {
					description: 'Mutual Admiration Org (no strings)',
					url: 'https://soundcloud.com/david-elaine-alt/the-optimist/s-Xmc0m'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/the-optimist-midi/s-M74Tf'
				}
			}
		},

		"Rising": {
			metadata: { 
				title: "Rising",
				composer: "Elaine Paul",
				genre: "Jazz",
				bpm: '72, 84, 118',
				key: "Ab"
			},
			fileLocation: "alt.musica",
			filePrefix: "rising/strings/rising-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Voice": { fileSuffix: "Voice" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				original: {
					description: 'Jazz Combustion Uprising',
					url: 'https://soundcloud.com/jazzcombustion/rising'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/rising/s-mQjyo'
				}
			}
		},

		"Wee": {
			metadata: { 
				title: "Wee",
				composer: "Sy Johnson",
				arranger: "Elaine Paul", 
				genre: "Jazz",
				bpm: '108-168',
				key: "G"
			},
			fileLocation: "alt.musica",
			filePrefix: "wee/strings/wee-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F for Clarinet": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb for Bassoon": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				original: {
					description: 'Charles Mingus - Mingus Moves',
					url: 'https://www.youtube.com/watch?v=g43EDq1nPHo'
				},
				woodwinds: {
					description: 'Mutual Admiration Org (no strings) - live at SoCha',
					url: 'https://ali-cia.net/mutualadmiration/media/mp3/mao/socha02/wee.mp3'
				}
			}
		},

		"Listening": {
			metadata: { 
				title: "Listening",
				composer: "Elaine Paul",
				genre: "Ballad",
				bpm: '53',
				key: "Ab minor"
			},
			fileLocation: "alt.musica",
			filePrefix: "listening/strings/listening-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb sharps": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bass Clarinet in Bb flats": { fileSuffix: "Bass-Clarinet-in-Bb-flats" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Voice": { fileSuffix: "Voice" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				woodwinds: {
					description: 'Mutual Admiration Org (no strings)',
					url: 'https://soundcloud.com/alicia-voice/listening'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/listening-midi/s-tjbNk'
				},
				original: {
					description: 'MIT TRME Jazz Collective (original key)',
					url: 'https://soundcloud.com/david-elaine-alt/listening'
				}

			}
		},

		"Dreams": {
			metadata: { 
				title: "Dreams",
				composer: "Elaine Paul",
				genre: "Classical",
				bpm: '144',
				key: "D"
			},
			fileLocation: "alt.musica",
			filePrefix: "dreams/strings/dreams-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				original: {
					description: 'ACMAP Sextet',
					url: 'https://soundcloud.com/david-elaine-alt/dreams'
				}
			}
		},

		"Bechaini": {
			metadata: { 
				title: "Bechaini",
				composer: "Devendra Sharma",
				arranger: "Elaine Paul",
				genre: "Hindustani",
				bpm: '56',
				key: "B minor"
			},
			fileLocation: "collaborations/devendra-sharma",
			filePrefix: "bechaini/bechaini-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				/*
				original: {
					description: 'voice and piano',
					url: ''
				},
				midi: {
					description: 'MIDI',
					url: ''
				}
				*/
			}
		}


	} 
};

var manifest = new Manifest(autumnRepertoire);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

