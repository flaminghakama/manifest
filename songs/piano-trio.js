/*
 *  Original songs in piano trio repertoire
 */

var pianoTrioSongs = {

	partsInBooks: {
		"Concert Lead Sheets": {
			"Anne's Eyes": [ "Concert Lead Sheet", "Arrangement" ], 
			"Kickin' The Can": [ "Concert Lead Sheet", "Rhythm" ], 
			"Swampy": [ "Concert Lead Sheet" ], 
			"Thick As A Nickle": [ "Concert Lead Sheet", "Rhythm" ], 
			"Wag That Tail": [ "Concert Lead Sheet" ]
		}, 
		"Bb Instruments": {
			"Anne's Eyes": [ "Bb Lead Sheet" ], 
			"Kickin' The Can": [ "Bb Lead Sheet", "Bb Melody", "Bb Harmony" ], 
			"Swampy": [ "Bb Lead Sheet" ], 
			"Thick As A Nickle": [ "Bb Melody", "Bb Harmony" ], 
			"Wag That Tail": [ "Bb Lead Sheet", "Bb Melody", "Bb Harmony" ]
		}, 
		"Eb Instruments": {
			"Anne's Eyes": [ "Bb Lead Sheet", "Arrangement" ], 
			"Kickin' The Can": [ "Eb Melody", "Eb Harmony" ], 
			"Swampy": [ "Eb Lead Sheet" ], 
			"Thick As A Nickle": [ "Eb Melody", "Eb Harmony" ], 
			"Wag That Tail": [ "Eb Lead Sheet", "Eb Melody", "Eb Harmony" ]
		}, 
		"Bass": {
			"Anne's Eyes": [ "Bass" ], 
			"Kickin' The Can": [ "Bass" ], 
			"Swampy": [ "Bass" ], 
			"Thick As A Nickle": [ "Bass" ], 
			"Wag That Tail": [ "Bass" ]
		}
	},

	songs: {
		"Anne's Eyes": {
			metadata: { 
				title: "Anne's Eyes",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Big Band Swing",
				bpm: '152',
				key: "Ab Major"
			},
			fileLocation: "piano-trio",
			filePrefix: "annes-eyes/annes-eyes-",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "Lead-song-form" },
				"Concert Arrangment": { fileSuffix: "Lead" },
				"Bb Lead Sheet": { fileSuffix: "Lead-in-Bb" },
				"Eb Lead Sheet": { fileSuffix: "Lead-in-Eb" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
			},
			recordings: {
				quartet: {
					description: 'Quartet',
					url: 'https://soundcloud.com/david-elaine-alt/annes-eyes-sticks'
				}
			}
		},

		"Kickin' The Can": {
			metadata: { 
				title: "Kickin' The Can",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Jive Swing",
				bpm: '210',
				key: "E minor"
			},
			fileLocation: "piano-trio",
			filePrefix: "kickin-the-can/kickin-the-can-",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "Lead" },
				"Rhythm": { fileSuffix: "Rhythm" },
				"Bb Lead Sheet": { fileSuffix: "Lead-in-Bb" },
				"Bb Melody": { fileSuffix: "Melody-in-Bb" },
				"Bb Harmony": { fileSuffix: "Harmony-in-Bb" },
				"Eb Lead Sheet": { fileSuffix: "Lead-in-Eb" },
				"Eb Melody": { fileSuffix: "Melody-in-Eb" },
				"Eb Harmony": { fileSuffix: "Harmony-in-Eb" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Score": { fileSuffix: "Score" }
			},
			recordings: {
				trio: {
					description: 'Piano Trio with Scat Vocals',
					url: 'https://soundcloud.com/david-elaine-alt/kickin-the-can-so-woke-brushes'
				}
			}
		},

		"Swampy": {
			metadata: { 
				title: "Swampy",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Ballad",
				bpm: '76',
				key: "Db Major"
			},
			fileLocation: "piano-trio",
			filePrefix: "swampy/swampy-",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "Lead-Sheet" },
				"Bb Lead Sheet": { fileSuffix: "Lead-Sheet-in-Bb" },
				"Eb Lead Sheet": { fileSuffix: "Lead-Sheet-in-Eb" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Transposed Score": { fileSuffix: "Transposed-Score" },
				"Concert Score": { fileSuffix: "Concert-Score" }
			},
			recordings: {
				trio: {
					description: 'Piano Trio',
					url: 'https://soundcloud.com/david-elaine-alt/swampy'
				}
			}
		},

		"Thick As A Nickle": {
			metadata: { 
				title: "Thick As A Nickle",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Bebop",
				bpm: '184',
				key: "Bb Major"
			},
			fileLocation: "piano-trio",
			filePrefix: "thick-as-a-nickle/thick-as-a-nickle-",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "Lead" },
				"Rhythm": { fileSuffix: "Rhythm" },
				"Bb Melody": { fileSuffix: "Melody-in-Bb" },
				"Bb Harmony": { fileSuffix: "Harmony-in-Bb" },
				"Eb Melody": { fileSuffix: "Melody-in-Eb" },
				"Eb Harmony": { fileSuffix: "Harmony-in-Eb" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Score": { fileSuffix: "Score" }
			},
			recordings: {
				trio: {
					description: 'Piano Trio (as written)',
					url: 'https://soundcloud.com/david-elaine-alt/thick-as-a-nickle'
				},
				arrangment: {
					description: 'Piano Trio (arrangement)',
					url: 'https://soundcloud.com/david-elaine-alt/thick-as-a-nickle-sticks'
				}
			}
		},

		"Wag That Tail": {
			metadata: { 
				title: "Wag That Tail",
				composer: "D. Elaine Alt",
				arranger: "D. Elaine Alt", 
				genre: "Swing Blues",
				bpm: '172',
				key: "F Major"
			},
			fileLocation: "piano-trio",
			filePrefix: "wag-that-tail/wag-that-tail-",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "Lead" },
				"Rhythm": { fileSuffix: "Rhythm" },
				"Bb Lead Sheet": { fileSuffix: "Lead-in-Bb" },
				"Bb Melody": { fileSuffix: "Melody-in-Bb" },
				"Bb Harmony": { fileSuffix: "Harmony-in-Bb" },
				"Eb Lead Sheet": { fileSuffix: "Lead-in-Eb" },
				"Eb Melody": { fileSuffix: "Melody-in-Eb" },
				"Eb Harmony": { fileSuffix: "Harmony-in-Eb" },
				"Bass": { fileSuffix: "Bass" }
			},
			scores: {
				"Score": { fileSuffix: "Score" }
			},
			recordings: {
				trio: {
					description: 'Piano Trio',
					url: 'https://soundcloud.com/david-elaine-alt/wag-that-tail'
				}
			}
		}
	}
};


