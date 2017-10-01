
var windReading = {

	selector: '#manifest-wind-reading',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '01', '02', '03', '04', '05' ],

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
			"You Don't Know What Love Is alt.musica": [ "Flute" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Flute" ],
			"Self-Immolation alt.musica": [ "Flute" ], 
			"We Declare alt.musica": [ "Piccolo", "Flute" ]
		},
		"English Horn": {
			"Smooch alt.musica": [ "English Horn" ], 
			"You Don't Know What Love Is alt.musica": [ "English Horn" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "English Horn" ],
			"Self-Immolation alt.musica": [ "English Horn" ], 
			"We Declare alt.musica": [ "English Horn" ]
		},
		"Bass Clarinet": {
			"Smooch alt.musica": [ "Bass Clarinet" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass Clarinet" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass Clarinet" ],
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
				arranger: "D. Elaine Alt"
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
				midi: 'https://soundcloud.com/david-elaine-alt/smooch-altmusica-winds-midi/s-8fRfi',
				track: 'https://soundcloud.com/david-elaine-alt/smooch-strings-accompaniment',
				performance: ''
			}
		},

		"You Don't Know What Love Is alt.musica": {
			metadata: { 
				title: "You Don't Know What Love Is",
				composer: "Raye & DuPaul",
				arranger: "D. Elaine Alt"
			},
			fileLocation: "strings",
			filePrefix: "you-dont-know-what-love-is-",
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
				midi: '',
				track: '',
				performance: ''
			}
		},

		"Softly, As In A Morning Sunrise alt.musica": {
			metadata: {
				title: "Softly, As In A Morning Sunrise",
				composer: "TBD",
				arranger: "D. Elaine Alt"
			},
			fileLocation: "strings",
			filePrefix: "softly-as-in-a-morning-sunrise-",
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
				midi: '',
				track: '',
				performance: ''
			}
		},

		"Self-Immolation alt.musica": {
			metadata: {
				title: "Self-Immolation",
				composer: "Johannes Brahms & D. Elaine Alt",
				arranger: "D. Elaine Alt"
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
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" }
			},
			recordings: {
				midi: '',
				track: '',
				performance: ''
			}
		},

		"We Declare alt.musica": {
			metadata: { 
				title: "We Declare",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt"
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
				midi: '',
				track: 'https://soundcloud.com/david-elaine-alt/we-declare-jazz-strings',
				performance: 'https://soundcloud.com/david-elaine-alt/smooch-altmusica-winds-midi/s-8fRfi'
			}
		}
	} 
};