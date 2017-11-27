/*
 *  Example manifest definition
 */

var januaryRepertoire = {

	title: 'alt.musica repertoire January, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-january-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '05', '08', '02', '03', '07', '06', '01', '04' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
		'06': "Windows",
		'07': "Don't Wait for Me",
		'08': "Stomping Ground"
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
			"You Don't Know What Love Is alt.musica": [ "Flute" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Alto Flute in G" ],
			"Self-Immolation alt.musica": [ "Flute" ], 
			"We Declare alt.musica": [ "Piccolo", "Flute" ], 
            "Windows": [ "Flute" ],
            "Don't Wait for Me": [ "Alto Flute in G", "Flute" ],
            "Stomping Ground": [ "Piccolo", "Flute" ]
		},
		"English Horn": {
			"Smooch alt.musica": [ "English Horn in F" ], 
			"You Don't Know What Love Is alt.musica": [ "English Horn in F" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "English Horn in F" ],
			"Self-Immolation alt.musica": [ "English Horn in F" ], 
			"We Declare alt.musica": [ "English Horn in F" ], 
            "Windows": [ "English Horn in F" ],
            "Don't Wait for Me": [ "English Horn in F" ],
            "Stomping Ground": [ "English Horn in F" ]
		},
		"Bass Clarinet": {
			"Smooch alt.musica": [ "Bass Clarinet in Bb" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass Clarinet in Bb" ],
			"Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ], 
			"We Declare alt.musica": [ "Bass Clarinet in Bb" ], 
            "Windows": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Don't Wait for Me": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A" ],
            "Stomping Ground": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A" ]
		},
		"Voice/Percussion": {
			"Smooch alt.musica": [ "Voice" ], 
			"You Don't Know What Love Is alt.musica": [ "Voice" ], 
			"We Declare alt.musica": [ "Voice" ], 
            "Windows": [ "Clave", "Claps" ],
            "Don't Wait for Me": [ "Clave" ],
            "Stomping Ground": [ "Clave", "Claps"]
		},
		"Drums": {
			"Smooch alt.musica": [ "Drums" ], 
			"You Don't Know What Love Is alt.musica": [ "Drums" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Drums" ],
			"Self-Immolation alt.musica": [ "Drums", "Condensed Score" ], 
			"We Declare alt.musica": [ "Drums" ], 
            "Windows": [ "Drums" ],
            "Don't Wait for Me": [ "Rhythm" ],
            "Stomping Ground": [ "Drums" ]
		},
		"Violin I": {
			"Smooch alt.musica": [ "Violin I" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin I" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ], 
            "Windows": [ "Violin I" ],
            "Don't Wait for Me": [ "Violin I" ],
            "Stomping Ground": [ "Violin I" ]
		},
		"Violin II": {
			"Smooch alt.musica": [ "Violin I" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin I" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ], 
            "Windows": [ "Violin II" ],
            "Don't Wait for Me": [ "Violin II" ],
            "Stomping Ground": [ "Violin II" ]
		},
		"Viola": {
			"Smooch alt.musica": [ "Viola" ], 
			"You Don't Know What Love Is alt.musica": [ "Viola" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Viola" ],
			"Self-Immolation alt.musica": [ "Viola" ], 
			"We Declare alt.musica": [ "Viola" ], 
            "Windows": [ "Viola" ],
            "Don't Wait for Me": [ "Viola" ],
            "Stomping Ground": [ "Viola" ]
		},
		"'Cello": {
			"Smooch alt.musica": [ "'Cello" ], 
			"You Don't Know What Love Is alt.musica": [ "'Cello" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "'Cello" ],
			"Self-Immolation alt.musica": [ "'Cello" ], 
			"We Declare alt.musica": [ "'Cello" ], 
            "Windows": [ "'Cello" ],
            "Don't Wait for Me": [ "'Cello" ],
            "Stomping Ground": [ "'Cello" ]
		},
		"Bass": {
			"Smooch alt.musica": [ "Bass" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass" ],
			"Self-Immolation alt.musica": [ "Bass" ], 
			"We Declare alt.musica": [ "Bass" ], 
            "Windows": [ "Bass" ],
            "Don't Wait for Me": [ "Bass" ],
            "Stomping Ground": [ "Bass" ]
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
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
					description: 'Synth version of wind and rhythm parts',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-altmusica-winds-midi/s-8fRfi'
				},
				track: {
					description: 'String quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-strings-accompaniment'
				}, 
				rehearsal: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/01-smooch-rehearsal/s-THKWP'
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
			fileLocation: "alt.musica",
			filePrefix: "you-dont-know-what-love-is-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
				"Transposed": { fileSuffix: "Score-Transposed" },
				"Winds": { fileSuffix: "Score-Winds-Transposed" }
			},
			recordings: {
				midi: {
					description: '',
					url: ''
				},
				track: {
					description: 'String quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/you-dont-know-what-love-is-string-arrangement'
				},
				rehearsal: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/03-you-dont-know-what-love-is/s-WTwTD'
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
				"Alto Flute in G": { fileSuffix: "Alto-Flute-in-G" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-synth-winds-arrangement/s-zcBJ0'
				},
				track: {
					description: 'Live string quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-rough-dry/s-U9eVi'
				},
				rehearsal: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/04-softly-as-in-a-morning/s-He5Cy'
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
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
		},

		"Windows": {
			metadata: { 
				title: "Windows",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Latin Jazz (2/3 Rhumba Clave)",
				bpm: '104',
				key: "Em"
			},
			fileLocation: "alt.musica",
			filePrefix: "windows-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Claps": { fileSuffix: "Claps" },
				"Clave": { fileSuffix: "Clave" },
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
				performance: {
					description: 'alt.musica premiere 2016',
					url: 'https://soundcloud.com/david-elaine-alt/windows-1'
				},
				track: {
					description: 'String quartet and rhythm section',
					url: 'https://soundcloud.com/david-elaine-alt/windows-string-quartet-with-rhythm'
				}
			}
		},

		"Don't Wait for Me": {
			metadata: { 
				title: "Don't Wait for Me",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Latin Jazz",
				bpm: '148',
				key: "F"
			},
			fileLocation: "alt.musica",
			filePrefix: "dont-wait-for-me-",
			parts: {
				"Alto Flute in G": { fileSuffix: "Alto-Flute-in-G" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Clave": { fileSuffix: "Clave" },
				"Drums": { fileSuffix: "Rhythm" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" },
				"Bass Lead Sheet": { fileSuffix: "Bass-Lead-Sheet" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" },
				"Clarinet Quintet": { fileSuffix: "Score-Clarinet-Quintet" }
			},
			recordings: {
				performance: {
					description: 'original alt.musica version',
					url: 'https://soundcloud.com/david-elaine-alt/dont-wait-for-me/s-eLNAe'
				},
				track: {
					description: 'String quartet',
					url: 'https://soundcloud.com/david-elaine-alt/dont-wait-for-me-rough-string-quartet/s-IgnlT'
				}
			}
		},

		"Stomping Ground": {
			metadata: { 
				title: "Stomping Ground",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Latin Jazz/Swing",
				bpm: '172',
				key: "Dm"
			},
			fileLocation: "alt.musica",
			filePrefix: "stomping-ground-",
			parts: {
				"Piccolo": { fileSuffix: "Piccolo" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Claps": { fileSuffix: "Claps" },
				"Clave": { fileSuffix: "Clave" },
				"Drums": { fileSuffix: "Condensed-Score" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Rhythm" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" },
				"Clarinet Quintet": { fileSuffix: "Score-Clarinet-Quintet" }
				"Winds": { fileSuffix: "Score-Transposed-Winds" }
			},
			recordings: {
				performance: {
					description: 'original alt.musica premiere',
					url: 'https://soundcloud.com/david-elaine-alt/stomping-ground'
				},
				track: {
					description: 'String Quartet',
					url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-string-quartet-accompaniment'
				}
			}
		}
	} 
};

var manifest = new Manifest(januaryRepertoire);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

