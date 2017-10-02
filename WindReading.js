/*
 *  Example manifest definition
 */

var windReading = {

	title: 'alt.musica winds reading 27 October, 2017',

	description: 'Rehearsal for the winds and rhythm section' + 
		' to introduce arrangements of Jazz standards and originals,' +
		' for which string quartet arrangements already exist.',

	selector: '#manifest-wind-reading',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '05', '04', '02', '03' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
	},

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ],
	books: {
		'01': "Flute",
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
		"Flute": {
			"Smooch alt.musica": [ "Flute" ], 
			/*
			"You Don't Know What Love Is alt.musica": [ "Flute" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Flute" ],
			*/
			"Self-Immolation alt.musica": [ "Flute" ], 
			"We Declare alt.musica": [ "Piccolo", "Flute" ]
		},
		"English Horn": {
			"Smooch alt.musica": [ "English Horn" ], 
			/*
			"You Don't Know What Love Is alt.musica": [ "English Horn" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "English Horn" ],
			*/
			"Self-Immolation alt.musica": [ "English Horn" ], 
			"We Declare alt.musica": [ "English Horn" ]
		},
		"Bass Clarinet": {
			"Smooch alt.musica": [ "Bass Clarinet" ], 
			/*
			"You Don't Know What Love Is alt.musica": [ "Bass Clarinet" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass Clarinet" ],
			*/
			"Self-Immolation alt.musica": [ "Bass Clarinet" ], 
			"We Declare alt.musica": [ "Bass Clarinet" ]
		},
		"Voice": {
			"Smooch alt.musica": [ "Voice" ], 
			"You Don't Know What Love Is alt.musica": [ "Voice" ], 
			"We Declare alt.musica": [ "Voice" ]
		},
		"Drums": {
			"Smooch alt.musica": [ "Drums" ], 
			"You Don't Know What Love Is alt.musica": [ "Drums" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Drums" ],
			"Self-Immolation alt.musica": [ "Drums", "Condensed Score" ], 
			"We Declare alt.musica": [ "Drums" ]
		},
		"Violin I": {
			"Smooch alt.musica": [ "Violin I" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin I" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ]
		},
		"Violin II": {
			"Smooch alt.musica": [ "Violin I" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin I" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ]
		},
		"Viola": {
			"Smooch alt.musica": [ "Viola" ], 
			"You Don't Know What Love Is alt.musica": [ "Viola" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Viola" ],
			"Self-Immolation alt.musica": [ "Viola" ], 
			"We Declare alt.musica": [ "Viola" ]
		},
		"'Cello": {
			"Smooch alt.musica": [ "'Cello" ], 
			"You Don't Know What Love Is alt.musica": [ "'Cello" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "'Cello" ],
			"Self-Immolation alt.musica": [ "'Cello" ], 
			"We Declare alt.musica": [ "'Cello" ]
		},
		"Bass": {
			"Smooch alt.musica": [ "Bass" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass" ],
			"Self-Immolation alt.musica": [ "Bass" ], 
			"We Declare alt.musica": [ "Bass" ]
		}
	},

	songs: {

		"Smooch alt.musica": {
			metadata: {
				title: "Smooch",
				composer: "Miles Davis & Charles Mingus",
				arranger: "D. Elaine Alt",
				genre: 'Jazz Ballad', 
				bpm: '64',
				key: 'D minor'
			},
			fileLocation: "strings",
			filePrefix: "smooch-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				"Drums": { fileSuffix: "Drums" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" }
			}, 
			recordings: {
				midi: {
					description: 'MIDI recording of wind and rhythm parts',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-altmusica-winds-midi/s-8fRfi'
				},
				track: {
					description: 'Live string quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-strings-accompaniment'
				} 
			}
		},

		"You Don't Know What Love Is alt.musica": {
			metadata: { 
				title: "You Don't Know What Love Is",
				composer: "Raye & DuPaul",
				arranger: "D. Elaine Alt", 
				genre: "Jazz/Afro-Cuban Ballad",
				bpm: '56',
				key: "F minor"
			},
			fileLocation: "strings",
			filePrefix: "you-dont-know-what-love-is-",
			parts: {
				/*
				"Flute": { fileSuffix: "Flute" },
				"English Horn": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
				*/
				"Voice": { fileSuffix: "Voice" },
				"Drums": { fileSuffix: "Drums" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				midi: {
					description: '',
					url: ''
				},
				track: {
					description: 'Live string quartet and rhythm section',
					url: 'https://soundcloud.com/david-elaine-alt/you-dont-know-what-love-is-string-arrangement'
				},
				performance: {
					description: '',
					url: ''
				} 
			}
		},

		"Softly, As In A Morning Sunrise alt.musica": {
			metadata: {
				title: "Softly, As In A Morning Sunrise",
				composer: "S. Romberg/O. Hammerstein",
				arranger: "D. Elaine Alt", 
				genre: "Jazz/Afro-Cuban Ballad",
				bpm: '88',
				key: "D minor"
			},
			fileLocation: "strings",
			filePrefix: "softly-as-in-a-morning-sunrise-",
			parts: {
				/*
				"Flute": { fileSuffix: "Flute" },
				"English Horn": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				*/
				"Drums": { fileSuffix: "Drums" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				midi: {
					description: '',
					url: ''
				},
				track: {
					description: 'Live string quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-rough-dry'
				},
				performance: {
					description: '',
					url: ''
				} 
			}
		},

		"Self-Immolation alt.musica": {
			metadata: {
				title: "Self-Immolation",
				composer: "Johannes Brahms & D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Classica/Funk",
				bpm: '100',
				key: "G minor"
			},
			fileLocation: "alt.musica",
			filePrefix: "self-immolation-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Drums": { fileSuffix: "Clave" },
				"Condensed Score": { fileSuffix: "Condensed-Score" },
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
				midi: {
					description: '',
					url: ''
				},
				track: {
					description: 'String quartet arrangement of Brahms Op. 79, No. 2',
					url: 'https://soundcloud.com/david-elaine-alt/string-quartet-arrangement-of-brahms-op-79-no2'
				},
				performance: {
					description: 'Jazz Combustion Uprising title track from CD',
					url: 'https://soundcloud.com/jazzcombustion/self-immolation'
				} 
			}
		},

		"We Declare alt.musica": {
			metadata: { 
				title: "We Declare",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Martial Jazz/Afro-Cuban Ballad",
				bpm: '92',
				key: "Db"
			},
			fileLocation: "alt.musica",
			filePrefix: "we-declare-",
			parts: {
				"Piccolo": { fileSuffix: "Piccolo" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				"Drums": { fileSuffix: "Clave" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				performance: {
					description: 'Trumpet/Sax/Fute version (not quite the same as our version)',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-sextet-1'
				},
				track: {
					description: 'Live string quartet and rhythm section',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-jazz-strings'
				}
			}
		}
	} 
};

var manifest = new Manifest(windReading);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

