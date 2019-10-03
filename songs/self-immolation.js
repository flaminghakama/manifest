/*
 *  Repertoire from the Jazz Combustion Uprising album Self-Immolation
 */

var selfImmolationSongs = {

	partsInBooks: {
		"Concert Lead Sheets": {
		    "Oxtail Soup": [ "Concert Lead Sheet" ],
		    "Bike Lanes": [ "Concert Lead Sheet" ],
		    "44 Magnum": [ "Concert Lead Sheet", "Original Lead Sheet"],
		    "Series of Adjustments": [ "Concert Lead Sheet" ],
		    "A Classic Base": [ "Concert Lead Sheet" ]
		}, 
		"Bb Instruments": {
		    "Oxtail Soup": [ "Bb Melody", "Bb Harmony" ],
		    "Bike Lanes": [ "Combined Lead Sheet" ],
		    "44 Magnum": [ "Bb Lead Sheet" ],
		    "Series of Adjustments": [ "Bb Lead Sheet" ],
		    "A Classic Base": [ "Bb Lead Sheet" ]
		}, 
		"Eb Instruments": {
		    "Oxtail Soup": [ "Eb Melody", "Eb Harmony" ],
		    "Bike Lanes": [ "Combined Lead Sheet" ],
		    "44 Magnum": [ "Eb Lead Sheet" ],
		    "Series of Adjustments": [ "Eb Lead Sheet" ],
		    "A Classic Base": [ "Eb Lead Sheet" ]
		}, 
		"Bass": {
		    "Oxtail Soup": [ "Concert Lead Sheet" ],
		    "Bike Lanes": [ "Concert Lead Sheet" ],
		    "44 Magnum": [ "Concert Lead Sheet" ],
		    "Series of Adjustments": [ "Concert Lead Sheet" ],
		    "A Classic Base": [ "Concert Lead Sheet" ]
		}
	},

	songs: {
		"Oxtail Soup": {
			metadata: { 
				title: "Oxtail Soup",
				composer: "D. Elaine Alt",
				genre: "Jazz Blues",
				bpm: '192',
				key: "Eb Major"
			},
			fileLocation: "jazz-combustion/self-immolation",
			filePrefix: "oxtail-soup/oxtail-soup",
			parts: {
				"Concert Lead Sheet": { fileSuffix: "-Lead-Sheet-C" },
				"Original Lead Sheet": { fileSuffix: "" },
				"Concert Melody": { fileSuffix: "-Melody-Bb" },
				"Bb Melody": { fileSuffix: "-Melody-Bb" },
				"Bb Harmony": { fileSuffix: "-Harmony-Bb" },
				"Eb Melody": { fileSuffix: "-Melody-Eb" },
				"Eb Harmony": { fileSuffix: "-Harmony-Eb" },
				"F Melody": { fileSuffix: "-Melody-F" },
				"F Harmony": { fileSuffix: "-Harmony-F" },
				"Eb Melody": { fileSuffix: "-Melody-Eb" },
				"Eb Harmony": { fileSuffix: "-Harmony-Eb" }
			},
			scores: {
			},
			recordings: {
				selfimmolation: {
					description: 'track 1 from Self-Immolation',
					url: 'https://soundcloud.com/david-elaine-alt/oxtail-soup'
				}
			}	
		},

		"Bike Lanes": {
			metadata: { 
				title: "Bike Lanes",
				composer: "D. Elaine Alt",
				genre: "Modal",
				bpm: '172',
				key: "C Myxolydian"
			},
			fileLocation: "jazz-combustion/self-immolation",
			filePrefix: "bike-lanes",
			parts: {
				"Combined Lead Sheet": { fileSuffix: "-combined" },
				"Concert Lead Sheet": { fileSuffix: "" }
			},
			scores: {
			},
			recordings: {
				coming: {
					description: 'track 2 from Self-Immolation',
					url: 'https://soundcloud.com/david-elaine-alt/bike-lanes-coming'
				}
			}	
		},

		"44 Magnum": {
			metadata: { 
				title: "44 Magnum",
				composer: "D. Elaine Alt",
				genre: "Ballad",
				bpm: '124',
				key: "A Major"
			},
			fileLocation: "jazz-combustion/self-immolation",
			filePrefix: "44-magnum/44-magnum",
			parts: {
				"Original Lead Sheet": { fileSuffix: "" },
				"Concert Lead Sheet": { fileSuffix: "-Lead-Sheet-C" },
				"Bb Lead Sheet": { fileSuffix: "-Lead-Sheet-Bb" },
				"Eb Lead Sheet": { fileSuffix: "-Lead-Sheet-Eb" }
			},
			scores: {
			},
			recordings: {
				selfimmolation: {
					description: 'track 3 from Self-Immolation',
					url: 'https://soundcloud.com/david-elaine-alt/44-magnum'
				}
			}	
		},

		"Series of Adjustments": {
			metadata: { 
				title: "Series of Adjustments",
				composer: "D. Elaine Alt",
				genre: "Bebop",
				bpm: '216',
				key: "Bb Major"
			},
			fileLocation: "jazz-combustion/self-immolation",
			filePrefix: "series-of-adjustments/series-of-adjustments",
			parts: {
				"Original Lead Sheet": { fileSuffix: "" },
				"Concert Lead Sheet": { fileSuffix: "-Lead-Sheet-C" },
				"Bb Lead Sheet": { fileSuffix: "-Lead-Sheet-Bb" },
				"Eb Lead Sheet": { fileSuffix: "-Lead-Sheet-Eb" },
				"F Lead Sheet": { fileSuffix: "-Lead-Sheet-F" }
			},
			scores: {
			},
			recordings: {
				selfimmolation: {
					description: 'track 5 from Self-Immolation',
					url: 'https://soundcloud.com/david-elaine-alt/series-of-adjustments'
				}
			}	
		},

		"A Classic Base": {
			metadata: { 
				title: "A Classic Base",
				composer: "D. Elaine Alt",
				genre: "Swing",
				bpm: '138',
				key: "Eb Major"
			},
			fileLocation: "jazz-combustion/self-immolation",
			filePrefix: "a-classic-base",
			parts: {
				"Original Lead Sheet": { fileSuffix: "" },
				"Concert Lead Sheet": { fileSuffix: "-Lead-Sheet-C" },
				"Bb Lead Sheet": { fileSuffix: "-Lead-Sheet-Bb" },
				"Eb Lead Sheet": { fileSuffix: "-Lead-Sheet-Eb" }
			},
			scores: {
			},
			recordings: {
				selfimmolation: {
					description: 'track 8 from Self-Immolation',
					url: 'https://soundcloud.com/david-elaine-alt/a-classic-base-1'
				}
			}	
		}

	}
};


