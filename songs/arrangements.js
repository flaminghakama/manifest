/*
 *  Arranged songs in alt.musica repertoire
 */

var arrangedSongs = {

	partsInBooks: {
		"Flute, Alto Flute & Piccolo": {
            "Beautiful Moons Ago": [ "Flute" ], 
            "Have You Met Miss Jones": [ "Flute" ],
            "It Only Happens Once": [ "Flute" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "Flute" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Alto Flute in G" ],
            "Sweet Georgia Bright": [ "Piccolo", "Flute" ], 
            "Take Five": [ "Flute" ],
            "Wee": [ "Flute" ],
			"You Don't Know What Love Is alt.musica": [ "Flute" ]
        },
		"English Horn": {
            "Beautiful Moons Ago": [ "English Horn in F" ], 
            "Have You Met Miss Jones": [ "English Horn in F" ],
            "It Only Happens Once": [ "English Horn in F", "English Horn in F for Clarinet" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "English Horn in F" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "English Horn in F" ],
            "Sweet Georgia Bright": [ "English Horn in F" ], 
            "Take Five": [ "English Horn in F" ],
            "Wee": [ "English Horn in F for Clarinet" ],
			"You Don't Know What Love Is alt.musica": [ "English Horn in F" ], 
		},
		"Bass Clarinet": {
            "Beautiful Moons Ago": [ "Bass Clarinet in Bb", "Clarinet in A" ], 
            "Have You Met Miss Jones": [ "Bass Clarinet in Bb" ],
            "It Only Happens Once": [ "Clarinet in A", "Bass Clarinet in Bb", "Bass Clarinet in Bb for Bassoon" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "Bass Clarinet in Bb" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass Clarinet in Bb" ],
            "Sweet Georgia Bright": [ "Bass Clarinet in Bb", "Clarinet in A" ], 
            "Take Five": [ "Bass Clarinet in Bb", "Clarinet in A" ],
            "Wee": [ "Bass Clarinet in Bb for Bassoon", "Clarinet in A", "Clarinet in Bb" ],
			"You Don't Know What Love Is alt.musica": [ "Bass Clarinet in Bb" ]
        },
		"Voice/Percussion": {
            "Beautiful Moons Ago": [ "Voice" ], 
            "It Only Happens Once": [ "Voice" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "Voice" ], 
			"You Don't Know What Love Is alt.musica": [ "Voice" ]
   		},
		"Drums": {
            "Beautiful Moons Ago": [ "Voice" ], 
            "Have You Met Miss Jones": [ "Violin I" ],
            "It Only Happens Once": [ "Voice" ],
			"Smooch alt.musica": [ "Drums" ], 
            "Nakamarra": [ "Voice" ],
			"Softly, As In A Morning Sunrise alt.musica": [ "Drums" ],
            "Sweet Georgia Bright": [ "Violin I" ], 
            "Take Five": [ "Violin I" ],
            "Wee": [ "Violin I" ],
			"You Don't Know What Love Is alt.musica": [ "Drums" ]
		},
		"Violin I": {
            "Beautiful Moons Ago": [ "Violin I" ], 
            "Have You Met Miss Jones": [ "Violin I" ],
            "It Only Happens Once": [ "Violin I" ],
			"Smooch alt.musica": [ "Violin I" ], 
            "Nakamarra": [ "Voice" ],
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin I" ],
            "Sweet Georgia Bright": [ "Violin I" ], 
            "Take Five": [ "Violin I" ],
            "Wee": [ "Violin I" ],
			"You Don't Know What Love Is alt.musica": [ "Violin I" ]
		},
		"Violin II": {
            "Beautiful Moons Ago": [ "Violin II" ], 
            "Have You Met Miss Jones": [ "Violin II" ],
            "It Only Happens Once": [ "Violin II" ],
			"Smooch alt.musica": [ "Violin II" ], 
            "Nakamarra": [ "Voice" ],
			"Softly, As In A Morning Sunrise alt.musica": [ "Violin II" ],
            "Take Five": [ "Violin II" ],
            "Wee": [ "Violin II" ],
            "Sweet Georgia Bright": [ "Violin II" ], 
			"You Don't Know What Love Is alt.musica": [ "Violin II" ]
		},
		"Viola": {
            "Beautiful Moons Ago": [ "Viola" ], 
            "Have You Met Miss Jones": [ "Viola" ],
            "It Only Happens Once": [ "Viola" ],
            "Nakamarra": [ "Voice" ],
			"Softly, As In A Morning Sunrise alt.musica": [ "Viola" ],
			"Smooch alt.musica": [ "Viola" ], 
            "Sweet Georgia Bright": [ "Viola" ], 
            "Take Five": [ "Viola" ],
            "Wee": [ "Viola" ],
			"You Don't Know What Love Is alt.musica": [ "Viola" ] 
		},
		"'Cello": {
            "Beautiful Moons Ago": [ "'Cello" ], 
            "Have You Met Miss Jones": [ "'Cello" ],
            "It Only Happens Once": [ "'Cello" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "'Cello" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "'Cello" ],
            "Sweet Georgia Bright": [ "'Cello" ], 
            "Take Five": [ "'Cello" ],
            "Wee": [ "'Cello" ],
			"You Don't Know What Love Is alt.musica": [ "'Cello" ]
		},
		"Bass": {
            "Beautiful Moons Ago": [ "Voice", "Bass" ], 
            "Have You Met Miss Jones": [ "Bass" ],
            "It Only Happens Once": [ "Voice", "Bass" ],
            "Nakamarra": [ "Voice" ],
			"Smooch alt.musica": [ "Bass" ], 
			"Softly, As In A Morning Sunrise alt.musica": [ "Bass" ],
            "Sweet Georgia Bright": [ "Bass" ], 
            "Take Five": [ "Bass" ],
            "Wee": [ "Bass" ],
			"You Don't Know What Love Is alt.musica": [ "Bass" ] 
		}
	},

	songs: {

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
				saxophone: {
					description: 'alt.musica saxophone edition from Parallel Play (in D)',
					url: 'https://soundcloud.com/david-elaine-alt/beautiful-moons-ago-2'
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
					description: 'Synth version of alt.musica arrangement (in C)',
					url: 'https://soundcloud.com/david-elaine-alt/beautiful-moons-ago-midi/s-X9P5j'
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
		},

		"Nakamarra": {
			metadata: { 
				title: "Nakamarra",
				composer: "Haitus Kaiyote",
				arranger: "Elaine Paul", 
				genre: "R&B",
				bpm: '90',
				key: "Eb"
			},
			fileLocation: "alt.musica",
			filePrefix: "nakamarra/lead-sheets/nakamarra",
			parts: {
				"Voice": { fileSuffix: "" }
			},
			scores: {
			},
			recordings: {
				original: {
					description: 'Haitus Kaiyote - Nakamarra',
					url: 'https://www.youtube.com/watch?v=Ozr4KsZBTvQ'
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
				performance: {
					description: 'alt.musica saxophone edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/smooch-1'
				}, 
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

		"Softly, As In A Morning Sunrise alt.musica": {
			metadata: {
				title: "Softly, As In A Morning Sunrise",
				composer: "S. Romberg/O. Hammerstein",
				arranger: "D. Elaine Alt", 
				genre: "Jazz/Afro-Cuban Ballad",
				bpm: '88',
				key: "D minor"
			},
			fileLocation: "alt.musica",
			filePrefix: "softly-as-in-a-morning-sunrise/five-variations/softly-as-in-a-morning-sunrise-",
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

		"Sweet Georgia Bright": {
			metadata: { 
				title: "Sweet Georgia Bright",
				composer: "C. Lloyd",
				arranger: "D. Elaine Alt", 
				genre: "Bebop",
				bpm: '242',
				key: "C"
			},
			fileLocation: "alt.musica",
			filePrefix: "sweet-georgia-bright/sweet-georgia-bright-",
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
				"Clarinet in Bb": { fileSuffix: "Clarinet-in-Bb" },
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
			filePrefix: "you-dont-know-what-love-is/key-of-f-minor/you-dont-know-what-love-is-",
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
		}
	}
};