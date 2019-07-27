/*
 *  Original songs in alt.musica repertoire
 */

var originalSongs = {

	partsInBooks: {
		"Flute, Alto Flute & Piccolo": {
			"As It Was alt.musica": [ "Flute" ], 
			"Bechaini": [ "Flute" ], 
            "Don't Wait for Me": [ "Alto Flute in G", "Flute" ],
            "Listening": [ "Flute" ],
            "Mossad": [ "Flute" ],
            "The Optimist": [ "Piccolo", "Flute" ],
            "Rising": [ "Flute" ],
			"Self-Immolation alt.musica": [ "Flute" ], 
            "Stomping Ground": [ "Piccolo", "Flute" ],
			"We Declare alt.musica": [ "Piccolo", "Flute" ], 
            "Windows": [ "Flute" ],
        },
		"English Horn": {
			"As It Was alt.musica": [ "English Horn in F" ], 
			"Bechaini": [ "English Horn in F" ], 
            "Don't Wait for Me": [ "English Horn in F" ],
            "Listening": [ "English Horn in F" ],
            "Mossad": [ "English Horn in F" ],
            "The Optimist": [ "English Horn in F for Clarinet" ],
            "Rising": [ "English Horn in F" ],
			"Self-Immolation alt.musica": [ "English Horn in F" ], 
            "Stomping Ground": [ "English Horn in F" ],
			"We Declare alt.musica": [ "English Horn in F" ], 
            "Windows": [ "English Horn in F" ],
		},
		"Bass Clarinet": {
			"As It Was alt.musica": [ "Bass Clarinet in Bb", "Solo Clarinet in A", "Solo Tenor Saxophone in Bb" ],
			"Bechaini": [ "Bass Clarinet in Bb", "Voice", "Voice for A", "Voice for Bb", "Voice for Eb" ], 
            "Don't Wait for Me": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A" ],
            "Listening": [ "Clarinet in A", "Bass Clarinet in Bb", "Bass Clarinet in Bb for Bassoon" ],
            "Mossad": [ "Bass Clarinet in Bb" ],
            "The Optimist": [ "Clarinet in A", "Bass Clarinet in Bb for Bassoon", "Voice" ],
            "Rising": [ "Clarinet in A", "Bass Clarinet in Bb", "Bass Clarinet in Bb for Bassoon" ],
			"Self-Immolation alt.musica": [ "Bass Clarinet in Bb", "Solo Clarinet in A", "Solo Soprano Saxophone in Bb" ], 
            "Stomping Ground": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A", "Solo Tenor Saxophone in Bb" ],
			"We Declare alt.musica": [ "Bass Clarinet in Bb", "Voice for A", "Voice for Bb", "Voice for Eb" ], 
            "Windows": [ "Bass Clarinet in Bb", "Clarinet in A", "Solo Clarinet in A", "Solo Alto Saxophone in Eb" ]
		},
		"Voice/Percussion": {
			"Bechaini": [ "Voice" ], 
            "Listening": [ "Voice" ],
            "Don't Wait for Me": [ "Clave" ],
            "The Optimist": [ "Voice" ],
            "Rising": [ "Voice" ],
            "Stomping Ground": [ "Clave", "Claps"], 
			"We Declare alt.musica": [ "Voice" ], 
            "Windows": [ "Clave", "Claps" ],
		},
		"Drums": {
			"As It Was alt.musica": [ "Drums" ], 
			"Bechaini": [ "Voice" ], 
            "Don't Wait for Me": [ "Drums" ],
            "Listening": [ "Clave" ],
            "Mossad": [ "Clave" ],
            "The Optimist": [ "Voice" ],
            "Rising": [ "Drums" ],
			"Self-Immolation alt.musica": [ "Drums", "Condensed Score" ], 
            "Stomping Ground": [ "Drums" ],
			"We Declare alt.musica": [ "Drums" ], 
            "Windows": [ "Drums" ],
		},
		"Violin I": {
			"As It Was alt.musica": [ "Violin I" ], 
			"Bechaini": [ "Violin I" ], 
            "Don't Wait for Me": [ "Violin I" ],
            "Listening": [ "Violin I" ],
            "Mossad": [ "Violin I" ],
            "The Optimist": [ "Violin I" ],
            "Rising": [ "Violin I" ],
			"Self-Immolation alt.musica": [ "Violin I" ], 
            "Stomping Ground": [ "Violin I" ],
			"We Declare alt.musica": [ "Violin I" ], 
            "Windows": [ "Violin I" ],
		},
		"Violin II": {
			"As It Was alt.musica": [ "Violin II" ], 
			"Bechaini": [ "Violin II" ], 
            "Don't Wait for Me": [ "Violin II" ],
            "Listening": [ "Violin II" ],
            "Mossad": [ "Violin II" ],
            "The Optimist": [ "Violin II" ],
            "Rising": [ "Violin II" ],
			"Self-Immolation alt.musica": [ "Violin II" ], 
            "Stomping Ground": [ "Violin II" ],
			"We Declare alt.musica": [ "Violin II" ], 
            "Windows": [ "Violin II" ],
		},
		"Viola": {
			"As It Was alt.musica": [ "Viola" ], 
			"Bechaini": [ "Viola" ], 
            "Don't Wait for Me": [ "Viola" ],
            "Listening": [ "Viola" ],
            "Mossad": [ "Viola" ],
            "The Optimist": [ "Viola" ],
            "Rising": [ "Viola" ],
			"Self-Immolation alt.musica": [ "Viola" ], 
            "Stomping Ground": [ "Viola" ],
			"We Declare alt.musica": [ "Viola" ], 
            "Windows": [ "Viola" ],
		},
		"'Cello": {
			"As It Was alt.musica": [ "'Cello" ], 
			"Bechaini": [ "'Cello" ], 
            "Don't Wait for Me": [ "'Cello" ],
            "Listening": [ "'Cello" ],
            "Mossad": [ "'Cello" ],
            "The Optimist": [ "'Cello" ],
            "Rising": [ "'Cello" ],
			"Self-Immolation alt.musica": [ "'Cello" ], 
            "Stomping Ground": [ "'Cello" ],
			"We Declare alt.musica": [ "'Cello" ], 
            "Windows": [ "'Cello" ],
		},
		"Bass": {
			"As It Was alt.musica": [ "Bass" ], 
			"Bechaini": [ "Bass" ], 
            "Don't Wait for Me": [ "Bass" ],
            "Listening": [ "Bass" ],
            "Mossad": [ "Bass" ],
            "The Optimist": [ "Bass" ],
            "Rising": [ "Bass" ],
			"Self-Immolation alt.musica": [ "Bass" ], 
            "Stomping Ground": [ "Bass" ],
			"We Declare alt.musica": [ "Bass" ], 
            "Windows": [ "Bass" ],
		}
	},

	songs: {
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
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Solo Tenor Saxophone in Bb": { fileSuffix: "Solo-Tenor-Saxophone-in-Bb" },
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
				saxophone: {
					description: 'alt.musica saxophone edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/as-it-was'
				},
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
			filePrefix: "bechaini/reading/bechaini-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				"Voice for Bb": { fileSuffix: "Voice-for-Bb" },
				"Voice for Eb": { fileSuffix: "Voice-for-Eb" },
				"Voice for A": { fileSuffix: "Voice-for-A" },
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
				reading: {
					description: 'reading',
					url: 'https://soundcloud.com/david-elaine-alt/bechaini'
				},
				backing: {
					description: 'backing track',
					url: 'https://soundcloud.com/david-elaine-alt/bechaini-backing-1'
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
			filePrefix: "dont-wait-for-me/strings/dont-wait-for-me-",
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
				debut: {
					description: 'original alt.musica version',
					url: 'https://soundcloud.com/david-elaine-alt/dont-wait-for-me/s-eLNAe'
				},
				clarinet: {
					description: 'alt.musica clarinet edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/dont-wait-for-me-3'
				},
				track: {
					description: 'String quartet',
					url: 'https://soundcloud.com/david-elaine-alt/dont-wait-for-me-rough-string-quartet/s-IgnlT'
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
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bass Clarinet in Bb for Bassoon": { fileSuffix: "Bass-Clarinet-in-Bb-for-Bassoon" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Voice": { fileSuffix: "Voice" },
				"Clave": { fileSuffix: "Clave" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" },
				"Transposed - Alternate Winds": { fileSuffix: "Score-Transposed-Alternate" }
			},
			recordings: {
				woodwinds: {
					description: 'Mutual Admiration Org (no strings)',
					url: 'https://soundcloud.com/alicia-voice/listening'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/listening-midi-1/s-Jfgqm'
				},
				original: {
					description: 'MIT TRME Jazz Collective (original key)',
					url: 'https://soundcloud.com/david-elaine-alt/listening'
				}

			}
		},

		"Mossad": {
			metadata: { 
				title: "Mossad",
				composer: "Elaine Paul",
				genre: "Hip Hop",
				bpm: '176',
				key: "C minor"
			},
			fileLocation: "alt.musica",
			filePrefix: "mossad/strings/mossad-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Clave": { fileSuffix: "Clave" },
				"Violin I": { fileSuffix: "Violin-I" },
				"Violin II": { fileSuffix: "Violin-II" },
				"Viola": { fileSuffix: "Viola" },
				"'Cello": { fileSuffix: "Cello" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed": { fileSuffix: "Score-Transposed" },
			},
			recordings: {
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/mossad-midi/s-kh7aJ'
				},
				original: {
					description: 'Alt Tal',
					url: 'https://soundcloud.com/david-elaine-alt/mossad'
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
				string: {
					description: 'performance from Parallel Play (no winds)',
					url: 'https://soundcloud.com/david-elaine-alt/the-optimist-1'
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
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Bass Clarinet in Bb for Bassoon": { fileSuffix: "Bass-Clarinet-in-Bb-for-Bassoon" },
				"Bassoon": { fileSuffix: "Bassoon" },
				"Voice": { fileSuffix: "Voice" },
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
					description: 'Jazz Combustion Uprising',
					url: 'https://soundcloud.com/jazzcombustion/rising'
				},
				synthesized: {
					description: 'MIDI',
					url: 'https://soundcloud.com/david-elaine-alt/rising/s-mQjyo'
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
			filePrefix: "self-immolation/strings/self-immolation-",
			parts: {
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Solo Soprano Saxophone in Bb": { fileSuffix: "Solo-Soprano-Saxophone-in-Bb" },
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
				performance: {
					description: 'alt.musica saxophone edition from Parallel Play', 
					url: 'https://soundcloud.com/david-elaine-alt/self-immolation-1'
				},				
				track: {
					description: 'Strings and Rhythm', 
					url: 'https://soundcloud.com/david-elaine-alt/self-immolation-strings-and-rhythm/s-bvwlr'
				},				
				strings: {
					description: 'String quartet arrangement of Brahms Op. 79, No. 2',
					url: 'https://soundcloud.com/david-elaine-alt/string-quartet-arrangement-of-brahms-op-79-no2'
				},
				quintet: {
					description: 'Jazz Combustion Uprising title track from CD',
					url: 'https://soundcloud.com/jazzcombustion/self-immolation'
				}, 
				midi: {
					description: '',
					url: ''
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
				"Piccolo": { fileSuffix: "Piccolo" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Solo Tenor Saxophone in Bb": { fileSuffix: "Solo-Tenor-Saxophone-in-Bb" },
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
					description: 'alt.musica saxophone edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-2'
				},
				debut: {
					description: 'original alt.musica premiere',
					url: 'https://soundcloud.com/david-elaine-alt/stomping-ground'
				},
				track: {
					description: 'String Quartet',
					url: 'https://soundcloud.com/david-elaine-alt/stomping-ground-string-quartet-accompaniment'
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
			filePrefix: "we-declare/strings/we-declare-",
			parts: {
				"Piccolo": { fileSuffix: "Piccolo" },
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Voice": { fileSuffix: "Voice" },
				"Voice for A": { fileSuffix: "Voice-for-A" },
				"Voice for Bb": { fileSuffix: "Voice-for-Bb" },
				"Voice for Eb": { fileSuffix: "Voice-for-Eb" },
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
					description: 'alt.musica saxophone edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/we-declare-1'
				},
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
				sextet: {
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
				"Flute": { fileSuffix: "Flute" },
				"English Horn in F": { fileSuffix: "English-Horn-in-F" },
				"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
				"Solo Clarinet in A": { fileSuffix: "Solo-Clarinet-in-A" },
				"Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
				"Solo Alto Saxophone in Eb": { fileSuffix: "Solo-Alto-Saxophone-in-Eb" },
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
					description: 'alt.musica saxophone edition from Parallel Play',
					url: 'https://soundcloud.com/david-elaine-alt/windows-3'
				},
				track: {
					description: 'Winds, string quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/windows-rough-last-takes/s-VpGsx'
				},
				debut: {
					description: 'alt.musica premiere 2016',
					url: 'https://soundcloud.com/david-elaine-alt/windows-1'
				},
				strings: {
					description: 'String quartet and rhythm',
					url: 'https://soundcloud.com/david-elaine-alt/windows-string-quartet-with-rhythm'
				}
			}
		}
	}
};

