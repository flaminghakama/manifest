/*
 *  Song in alt.musica repertoire
 */

var originalSongs = {

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
			"Bass Clarinet in Bb for Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
			"Bass Clarinet in Bb for Clarinet": { fileSuffix: "Bass-Clarinet-in-Bb" },
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
		filePrefix: "windows/windows-",
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
	}
};

