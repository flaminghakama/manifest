/*
 *  alt.musica repertoire, April 2018 
 */

var aprilRepertoire = {

	title: 'alt.musica Repertoire for April, 2018',

	description: 'Songs with winds, string quartet and rhythm section', 

	selector: '#manifest-april-2018',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '04', '12', '09', '08', '05', '01', '13', '02', '03', '07', '06', '10', '11' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "You Don't Know What Love Is alt.musica",
		'03': "Softly, As In A Morning Sunrise alt.musica",
		'04': "Self-Immolation alt.musica",
		'05': "We Declare alt.musica",
		'06': "Windows",
		'07': "Don't Wait for Me",
		'08': "Stomping Ground",
		'09': "Have You Met Miss Jones",
		'10': "Take Five",
		'11': "Sweet Georgia Bright",
		'12': "Beautiful Moons Ago",
		'13': "It Only Happens Once" 
	},

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ],
	books: {
		'01': "Flute, Alto Flute & Piccolo",
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
		"Flute, Alto Flute & Piccolo": {
			"Smooch alt.musica": [ "Flute" ], 
			"You Don't Know What Love Is alt.musica": [ "Flute" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Alto Flute in G" ],
			"Self-Immolation alt.musica": [ "Flute" ], 
			"We Declare alt.musica": [ "Piccolo", "Flute" ], 
            "Windows": [ "Flute" ],
            "Don't Wait for Me": [ "Alto Flute in G", "Flute" ],
            "Stomping Ground": [ "Piccolo", "Flute" ],
            "Have You Met Miss Jones": [ "Flute" ],
            "Take Five": [ "Flute" ],
            "Sweet Georgia Bright": [ "Piccolo", "Flute" ], 
            "Beautiful Moons Ago": [ "Flute" ], 
            "It Only Happens Once": [ "Flute" ]
        },
		"English Horn": {
			"Smooch alt.musica": [ "English Horn in F" ], 
			"You Don't Know What Love Is alt.musica": [ "English Horn in F" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "English Horn in F" ],
			"Self-Immolation alt.musica": [ "English Horn in F" ], 
			"We Declare alt.musica": [ "English Horn in F" ], 
            "Windows": [ "English Horn in F" ],
            "Don't Wait for Me": [ "English Horn in F" ],
            "Stomping Ground": [ "English Horn in F" ],
            "Have You Met Miss Jones": [ "English Horn in F" ],
            "Take Five": [ "English Horn in F" ],
            "Sweet Georgia Bright": [ "English Horn in F" ], 
            "Beautiful Moons Ago": [ "English Horn in F" ], 
            "It Only Happens Once": [ "English Horn in F", "English Horn in F for Clarinet" ] 
		},
		"Bass Clarinet": {
			"Smooch alt.musica": [ "Bass Clarinet in Bb" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass Clarinet in Bb" ],
			"Self-Immolation alt.musica": [ "Bass Clarinet in Bb" ], 
			"We Declare alt.musica": [ "Bass Clarinet in Bb" ], 
            "Windows": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Don't Wait for Me": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A" ],
            "Stomping Ground": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A" ],
            "Have You Met Miss Jones": [ "Bass Clarinet in Bb" ],
            "Take Five": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Sweet Georgia Bright": [ "Bass Clarinet in Bb", "Clarinet in A" ], 
            "Beautiful Moons Ago": [ "Bass Clarinet in Bb", "Clarinet in A" ], 
            "It Only Happens Once": [ "Clarinet in A", "Bass Clarinet in Bb", "Bass Clarinet in Bb for Bassoon" ]
		},
		"Voice/Percussion": {
			"Smooch alt.musica": [ "Voice" ], 
			"You Don't Know What Love Is alt.musica": [ "Voice" ], 
			"We Declare alt.musica": [ "Voice" ], 
            "Windows": [ "Clave", "Claps" ],
            "Don't Wait for Me": [ "Clave" ],
            "Stomping Ground": [ "Clave", "Claps"], 
            "Beautiful Moons Ago": [ "Voice" ], 
            "It Only Happens Once": [ "Voice" ]
		},
		"Drums": {
			"Smooch alt.musica": [ "Drums" ], 
			"You Don't Know What Love Is alt.musica": [ "Drums" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Drums" ],
			"Self-Immolation alt.musica": [ "Drums", "Condensed Score" ], 
			"We Declare alt.musica": [ "Drums" ], 
            "Windows": [ "Drums" ],
            "Don't Wait for Me": [ "Drums" ],
            "Stomping Ground": [ "Drums" ],
            "Have You Met Miss Jones": [ "Violin I" ],
            "Take Five": [ "Violin I" ],
            "Sweet Georgia Bright": [ "Violin I" ], 
            "Beautiful Moons Ago": [ "Voice" ], 
            "It Only Happens Once": [ "Voice" ] 
		},
		"Violin I": {
			"Smooch alt.musica": [ "Violin I" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin I" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ], 
            "Windows": [ "Violin I" ],
            "Don't Wait for Me": [ "Violin I" ],
            "Stomping Ground": [ "Violin I" ],
            "Have You Met Miss Jones": [ "Violin I" ],
            "Take Five": [ "Violin I" ],
            "Sweet Georgia Bright": [ "Violin I" ], 
            "Beautiful Moons Ago": [ "Violin I" ], 
            "It Only Happens Once": [ "Violin I" ] 
		},
		"Violin II": {
			"Smooch alt.musica": [ "Violin II" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin II" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin II" ],
			"Self-Immolation alt.musica": [ "Violin II" ], 
			"We Declare alt.musica": [ "Violin II" ], 
            "Windows": [ "Violin II" ],
            "Don't Wait for Me": [ "Violin II" ],
            "Stomping Ground": [ "Violin II" ],
            "Have You Met Miss Jones": [ "Violin II" ],
            "Take Five": [ "Violin II" ],
            "Sweet Georgia Bright": [ "Violin II" ], 
            "Beautiful Moons Ago": [ "Violin II" ], 
            "It Only Happens Once": [ "Violin II" ] 
		},
		"Viola": {
			"Smooch alt.musica": [ "Viola" ], 
			"You Don't Know What Love Is alt.musica": [ "Viola" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Viola" ],
			"Self-Immolation alt.musica": [ "Viola" ], 
			"We Declare alt.musica": [ "Viola" ], 
            "Windows": [ "Viola" ],
            "Don't Wait for Me": [ "Viola" ],
            "Stomping Ground": [ "Viola" ],
            "Have You Met Miss Jones": [ "Viola" ],
            "Take Five": [ "Viola" ],
            "Sweet Georgia Bright": [ "Viola" ], 
            "Beautiful Moons Ago": [ "Viola" ], 
            "It Only Happens Once": [ "Viola" ]
		},
		"'Cello": {
			"Smooch alt.musica": [ "'Cello" ], 
			"You Don't Know What Love Is alt.musica": [ "'Cello" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "'Cello" ],
			"Self-Immolation alt.musica": [ "'Cello" ], 
			"We Declare alt.musica": [ "'Cello" ], 
            "Windows": [ "'Cello" ],
            "Don't Wait for Me": [ "'Cello" ],
            "Stomping Ground": [ "'Cello" ],
            "Have You Met Miss Jones": [ "'Cello" ],
            "Take Five": [ "'Cello" ],
            "Sweet Georgia Bright": [ "'Cello" ], 
            "Beautiful Moons Ago": [ "'Cello" ], 
            "It Only Happens Once": [ "'Cello" ]
		},
		"Bass": {
			"Smooch alt.musica": [ "Bass" ], 
			"You Don't Know What Love Is alt.musica": [ "Bass" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass" ],
			"Self-Immolation alt.musica": [ "Bass" ], 
			"We Declare alt.musica": [ "Bass" ], 
            "Windows": [ "Bass" ],
            "Don't Wait for Me": [ "Bass" ],
            "Stomping Ground": [ "Bass" ],
            "Have You Met Miss Jones": [ "Bass" ],
            "Take Five": [ "Bass" ],
            "Sweet Georgia Bright": [ "Bass" ], 
            "Beautiful Moons Ago": [ "Voice", "Bass" ], 
            "It Only Happens Once": [ "Voice", "Bass" ]
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
			fileLocation: "alt.musica",
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
				accompaniment: {
					description: 'Winds, string quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-rough-last-takes/s-JlFyT'
				}, 
				strings: {
					description: 'String quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-strings-accompaniment'
				}, 
				winds: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/01-smooch-rehearsal/s-THKWP'
				},
				midi: {
					description: 'Synth version of wind and rhythm parts',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-altmusica-winds-midi/s-8fRfi'
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
				accompaniment: {
					description: 'Winds, string quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/you-dont-know-what-love-is-rough-last-takes/s-dqlGi'
				},
				strings: {
					description: 'String quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/you-dont-know-what-love-is-string-arrangement'
				},
				winds: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/03-you-dont-know-what-love-is/s-WTwTD'
				}, 
				midi: {
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
				accompaniment: {
					description: 'Wind parts, string quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-rough-last-takes/s-LqH48'
				},
				strings: {
					description: 'String quartet and drums',
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-rough-dry/s-U9eVi'
				},
				winds: {
					description: 'Winds rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/04-softly-as-in-a-morning/s-He5Cy'
				},
				midi: {
					description: 'MIDI recording of wind and rhythm parts',
					url: 'https://soundcloud.com/david-elaine-alt/softly-as-in-a-morning-sunrise-synth-winds-arrangement/s-zcBJ0'
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
				track: {
					description: 'Strings and Rhythm', 
					url: 'https://soundcloud.com/david-elaine-alt/self-immolation-strings-and-rhythm/s-bvwlr'
				},				
				strings: {
					description: 'String quartet arrangement of Brahms Op. 79, No. 2',
					url: 'https://soundcloud.com/david-elaine-alt/string-quartet-arrangement-of-brahms-op-79-no2'
				},
				performance: {
					description: 'Jazz Combustion Uprising title track from CD',
					url: 'https://soundcloud.com/jazzcombustion/self-immolation'
				}, 
				midi: {
					description: '',
					url: ''
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
				accompaniment: {
					description: 'Winds, string quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-rough-with-winds/s-sO6ec'
				},
				strings: {
					description: 'String quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-jazz-strings'
				},
				video: {
					description: 'Original trio video version (different arrangment)',
					url: 'https://www.youtube.com/watch?v=NpJo_b0gYDo'
				},
				performance: {
					description: 'Jazz Combustion sextet version (different arrangement)',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-sextet-1'
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
				track: {
					description: 'Winds, string quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/windows-rough-last-takes/s-VpGsx'
				},
				performance: {
					description: 'alt.musica premiere 2016',
					url: 'https://soundcloud.com/david-elaine-alt/windows-1'
				},
				strings: {
					description: 'String quartet and rhythm',
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
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Concert": { fileSuffix: "Score-Concert" },
				"Transposed": { fileSuffix: "Score-Transposed" },
				"Clarinet Quintet": { fileSuffix: "Score-Clarinet-Quintet" },
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
		}, 

		"Have You Met Miss Jones": {
			metadata: { 
				title: "Have You Met Miss Jones",
				composer: "Rogers & Hart",
				arranger: "D. Elaine Alt", 
				genre: "Salsa (2/3 Son Clave)",
				bpm: '216',
				key: "Db"
			},
			fileLocation: "alt.musica",
			filePrefix: "senorita-jones/senorita-jones-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
				rehearsal: {
					description: 'Swing version, First rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/have-you-met-miss-jones-rehearsal/s-vhE7e'
				}
			}
		}, 

		"Take Five": {
			metadata: { 
				title: "Take Five",
				composer: "D. Brubeck",
				arranger: "D. Elaine Alt", 
				genre: "Swing",
				bpm: '172',
				key: "Ebm"
			},
			fileLocation: "alt.musica",
			filePrefix: "take-five-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
				rehearsal: {
					description: 'First rehearsal',
					url: 'https://soundcloud.com/david-elaine-alt/take-five-rehearsal/s-i7LWj'
				}
			}
		}, 

		"Sweet Georgia Bright": {
			metadata: { 
				title: "Sweet Georgia Bright",
				composer: "C. Lloyd",
				arranger: "D. Elaine Alt", 
				genre: "Bebop",
				bpm: '242',
				key: "C"
			},
			fileLocation: "strings",
			filePrefix: "sweet-georgia-bright-",
			parts: {
				"Piccolo": { fileSuffix: "Piccolo" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
				performance: {
					description: 'Clarinet Quintet',
					url: 'https://soundcloud.com/david-elaine-alt/sweet-georgia-bright-clarinet-quintet/s-63fbh'
				}
			}
		},

		"Beautiful Moons Ago": {
			metadata: { 
				title: "Beautiful Moons Ago",
				composer: "O. Moore",
				arranger: "D. Elaine Alt", 
				genre: "Swing",
				bpm: '112',
				key: "C"
			},
			fileLocation: "alt.musica",
			filePrefix: "beautiful-moons-ago/strings/beautiful-moons-ago-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
					description: 'Nat King Cole trio (in D)',
					url: 'https://www.youtube.com/watch?v=XxNoSxpukhQ'
				},
				performance: {
					description: 'Mutual Admiration Org performance (in D)',
					url: 'http://ali-cia.net/mutualadmiration/media/mp3/mao/cinco-2/Beautiful Moons Ago.mp3'
				},
				tracking: {
					description: 'Mutual Admiration Org tracking with soloists (in D)',
					url: 'http://ali-cia.net/mutualadmiration/media/mp3/mao/tracking/Beautiful%20Moons%20Ago.mp3'
				},
				midi: {
					description: 'Synth version of alt.musica arrangement',
					url: 'https://soundcloud.com/david-elaine-alt/beautiful-moons-ago-midi/s-X9P5j'
				}
			}
		},

		"It Only Happens Once": {
			metadata: { 
				title: "It Only Happens Once",
				composer: "F. Laine",
				arranger: "D. Elaine Alt", 
				genre: "Swing",
				bpm: '104',
				key: "Db"
			},
			fileLocation: "alt.musica",
			filePrefix: "it-only-happens-once/strings/it-only-happens-once-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"English Horn in F for Clarinet": { fileSuffix: "English-Horn-in-F-for-Clarinet" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bass Clarinet in Bb for Bassoon": { fileSuffix: "Bass-Clarinet-in-Bb-for-Bassoon" },
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
					description: 'Nat King Cole trio',
					url: 'https://www.youtube.com/watch?v=wLQvDvzVb8A'
				},
				performance: {
					description: 'Mutual Admiration Org performance',
					url: 'http://ali-cia.net/mutualadmiration/media/mp3/mao/cinco-2/It%20Only%20Happens%20Once.mp3'
				},
				tracking: {
					description: 'Mutual Admiration Org tracking with soloists (in D)',
					url: 'http://ali-cia.net/mutualadmiration/media/mp3/mao/tracking/It%20Only%20Happens%20Once.mp3'
				}
			}
		}


	} 
};

var manifest = new Manifest(aprilRepertoire);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

