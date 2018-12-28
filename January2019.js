/*
 *  alt.musica repertoire, January 2019 
 */

var januaryRepertoire = {

	title: 'alt.musica Repertoire for January, 2019',

	description: 'Songs with saxophone, string quartet and rhythm section', 

	selector: '#manifest-january-2019',

	baseUrl: 'http://davidelainealt.com/scores/', 

	programOrder: [ '08', '05', '03', '02', '09', '04', '01', '06', '11', '07' ],

	program: {
		'01': "Smooch alt.musica",
		'02': "Self-Immolation alt.musica",
		'03': "We Declare alt.musica",
		'04': "Windows",
		'05': "Don't Wait for Me",
		'06': "Stomping Ground",
		'07': "Take Five",
		'08': "Beautiful Moons Ago",
		'09': "The Optimist", 
		'10': "Bechaini",
		'11': "As It Was alt.musica"
	},

	bookOrder: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11' ],
	books: {
		'03': "Bass Clarinet",
		'05': "Voice",
		'06': "Drums",
		'07': "Violin I",
		'08': "Violin II",
		'09': "Viola",
		'10': "'Cello",
		'11': "Bass",
	},

	partsInBooks: {
		"Bass Clarinet": {
			"Smooch alt.musica": [ "Bass Clarinet in Bb" ], 
			"Self-Immolation alt.musica": [ "Solo Clarinet in A" ], 
			"We Declare alt.musica": [ "Bass Clarinet in Bb" ], 
            "Windows": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Don't Wait for Me": [ "Solo Clarinet in A" ],
            "Stomping Ground": [ "Solo Clarinet in A" ],
            "Take Five": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Beautiful Moons Ago": [ "Clarinet in A" ], 
            "The Optimist": [ "Clarinet in A" ],
            "Bechaini": [ "Bass Clarinet in Bb" ],
            "As It Was alt.musica": [ "Bass Clarinet in Bb" ]
		},
		"Voice/Percussion": {
			"Smooch alt.musica": [ "Voice" ], 
			"We Declare alt.musica": [ "Voice" ], 
            "Windows": [ "Clave", "Claps" ],
            "Don't Wait for Me": [ "Clave" ],
            "Stomping Ground": [ "Clave", "Claps"], 
            "Beautiful Moons Ago": [ "Voice" ], 
            "The Optimist": [ "Voice" ],
            "Bechaini": [ "Voice" ]
		},
		"Drums": {
			"Smooch alt.musica": [ "Drums" ], 
			"Self-Immolation alt.musica": [ "Drums", "Condensed Score" ], 
			"We Declare alt.musica": [ "Drums" ], 
            "Windows": [ "Drums" ],
            "Don't Wait for Me": [ "Drums" ],
            "Stomping Ground": [ "Drums" ],
            "Take Five": [ "Violin I" ],
            "Beautiful Moons Ago": [ "Voice" ], 
            "The Optimist": [ "Voice" ],
            "Bechaini": [ "Voice" ],
            "As It Was alt.musica": [ "Clave" ]
		},
		"Violin I": {
			"Smooch alt.musica": [ "Violin I" ], 
			"Self-Immolation alt.musica": [ "Violin I" ], 
			"We Declare alt.musica": [ "Violin I" ], 
            "Windows": [ "Violin I" ],
            "Don't Wait for Me": [ "Violin I" ],
            "Stomping Ground": [ "Violin I" ],
            "Take Five": [ "Violin I" ],
            "Beautiful Moons Ago": [ "Violin I" ], 
            "The Optimist": [ "Violin I" ],
            "Bechaini": [ "Violin I" ],
            "As It Was alt.musica": [ "Violin I" ]
		},
		"Violin II": {
			"Smooch alt.musica": [ "Violin II" ], 
			"Self-Immolation alt.musica": [ "Violin II" ], 
			"We Declare alt.musica": [ "Violin II" ], 
            "Windows": [ "Violin II" ],
            "Don't Wait for Me": [ "Violin II" ],
            "Stomping Ground": [ "Violin II" ],
            "Take Five": [ "Violin II" ],
            "Beautiful Moons Ago": [ "Violin II" ], 
            "The Optimist": [ "Violin II" ],
            "Bechaini": [ "Violin II" ],
            "As It Was alt.musica": [ "Violin II" ]
		},
		"Viola": {
			"Smooch alt.musica": [ "Viola" ], 
			"Self-Immolation alt.musica": [ "Viola" ], 
			"We Declare alt.musica": [ "Viola" ], 
            "Windows": [ "Viola" ],
            "Don't Wait for Me": [ "Viola" ],
            "Stomping Ground": [ "Viola" ],
            "Take Five": [ "Viola" ],
            "Beautiful Moons Ago": [ "Viola" ], 
            "The Optimist": [ "Viola" ],
            "Bechaini": [ "Viola" ],
            "As It Was alt.musica": [ "Viola" ]
		},
		"'Cello": {
			"Smooch alt.musica": [ "'Cello" ], 
			"Self-Immolation alt.musica": [ "'Cello" ], 
			"We Declare alt.musica": [ "'Cello" ], 
            "Windows": [ "'Cello" ],
            "Don't Wait for Me": [ "'Cello" ],
            "Stomping Ground": [ "'Cello" ],
            "Take Five": [ "'Cello" ],
            "Beautiful Moons Ago": [ "'Cello" ], 
            "The Optimist": [ "'Cello" ],
            "Bechaini": [ "'Cello" ],
            "As It Was alt.musica": [ "'Cello" ]
		},
		"Bass": {
			"Smooch alt.musica": [ "Bass" ], 
			"Self-Immolation alt.musica": [ "Bass" ], 
			"We Declare alt.musica": [ "Bass" ], 
            "Windows": [ "Bass" ],
            "Don't Wait for Me": [ "Bass" ],
            "Stomping Ground": [ "Bass" ],
            "Take Five": [ "Bass" ],
            "Beautiful Moons Ago": [ "Voice", "Bass" ], 
            "It Only Happens Once": [ "Voice", "Bass" ],
            "The Optimist": [ "Bass" ],
            "Bechaini": [ "Bass" ],
            "As It Was alt.musica": [ "Bass" ]
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
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
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
			filePrefix: "smooch/smooch-",
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
			filePrefix: "self-immolation/self-immolation-",
			parts: {
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
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
			filePrefix: "we-declare/we-declare-",
			parts: {
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
			filePrefix: "windows/windows-",
			parts: {
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
			filePrefix: "dont-wait-for-me/dont-wait-for-me-",
			parts: {
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
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
			filePrefix: "stomping-ground/writtenout/stomping-ground-",
			parts: {
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
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
			filePrefix: "take-five/take-five-",
			parts: {
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
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
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

		"Bechaini": {
			metadata: { 
				title: "Bechaini (Restlessness)",
				composer: "Devendra Sharma",
				arranger: "D. Elaine Alt", 
				genre: "Nautanki",
				bpm: '112',
				key: "B minor"
			},
			fileLocation: "collaborations",
			filePrefix: "devendra-sharma/bechaini/reading/bechaini-",
			parts: {
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
				backing: {
					description: 'edit of original voice with backing track reading',
					url: 'https://soundcloud.com/david-elaine-alt/bechaini'
				},
				draft: {
					description: 'alt.musica reading of backing track',
					url: 'https://soundcloud.com/david-elaine-alt/bechaini-backing-1'
				}	
			}
		},

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
					description: 'Mutual Admiration Org (no strings)',
					url: 'https://soundcloud.com/david-elaine-alt/the-optimist/s-Xmc0m'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/the-optimist-midi/s-M74Tf'
				}
			}
		},

		"As It Was alt.musica": {
			metadata: { 
				title: "As It Was",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Afro-Cuban",
				bpm: '104',
				key: "E minor"
			},
			fileLocation: "alt.musica",
			filePrefix: "as-it-was/strings/as-it-was-",
			parts: {
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Drums": { fileSuffix: "Clave" },
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
					description: 'MIT Festival Jazz Band (original version)',
					url: 'https://soundcloud.com/david-elaine-alt/as-it-was-big-band/s-IcsAH'
				},
				quartet: {
					description: "The Lydian People's Front (quartet version)",
					url: 'https://soundcloud.com/david-elaine-alt/as-it-was-quartet/s-0ybqV'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/as-it-was-midi/s-qG3GR'
				}
			}
		}
	} 
};

var manifest = new Manifest(januaryRepertoire);
var content = manifest.displayManifest() ;
manifest.placeManifestOnReady(content) ; 

