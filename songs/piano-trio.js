/*
 *  Original songs in piano trio repertoire
 */

var pianoTrioSongs = {

    partsInBooks: {
        "Concert Lead Sheets": {
            "Anne's Eyes": [ "Concert Arrangement" ], 
            "Aphrodite's Girl Friday": [ "Concert Lead Sheet" ], 
            "Big Seven": [ "Concert Lead Sheet" ], 
            "Hot Swing": [ "Concert Lead Sheet" ], 
            "Kickin' The Can": [ "Concert Lead Sheet" ], 
            "Linsanity": [ "Concert Lead Sheet" ], 
            "Swampy": [ "Concert Lead Sheet" ], 
            "Thick As A Nickle": [ "Concert Lead Sheet" ], 
            "Wag That Tail": [ "Concert Lead Sheet" ]
        }, 
        "Bb Instruments": {
            "Anne's Eyes": [ "Bb Lead Sheet" ], 
            "Aphrodite's Girl Friday": [ "Bb Lead Sheet" ], 
            "Big Seven": [ "Bb Melody" ], 
            "Hot Swing": [ "Clarinet in Bb", "Trumpet in Bb" ], 
            "Kickin' The Can": [ "Bb Lead Sheet", "Bb Melody", "Bb Harmony" ], 
            "Linsanity": [ "Bb Lead Sheet", "Bb Harmony" ], 
            "Swampy": [ "Bb Lead Sheet" ], 
            "Thick As A Nickle": [ "Bb Melody", "Bb Harmony" ], 
            "Wag That Tail": [ "Bb Lead Sheet", "Bb Melody", "Bb Harmony" ]
        }, 
        "Eb Instruments": {
            "Anne's Eyes": [ "Bb Lead Sheet" ], 
            "Aphrodite's Girl Friday": [ "Eb Lead Sheet" ], 
            "Big Seven": [ "Eb Melody" ], 
            "Kickin' The Can": [ "Eb Melody", "Eb Harmony" ], 
            "Linsanity": [ "Eb Lead Sheet", "Eb Harmony" ], 
            "Swampy": [ "Eb Lead Sheet" ], 
            "Thick As A Nickle": [ "Eb Melody", "Eb Harmony" ], 
            "Wag That Tail": [ "Eb Lead Sheet", "Eb Melody", "Eb Harmony" ]
        }, 
        "Bass": {
            "Anne's Eyes": [ "Bass" ], 
            "Aphrodite's Girl Friday": [ "Concert Lead Sheet" ], 
            "Big Seven": [ "Bass" ], 
            "Hot Swing": [ "Violin" ], 
            "Kickin' The Can": [ "Bass" ], 
            "Linsanity": [ "Concert Lead Sheet" ], 
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
                "Concert Arrangement": { fileSuffix: "Lead" },
                "Bb Lead Sheet": { fileSuffix: "Lead-in-Bb" },
                "Eb Lead Sheet": { fileSuffix: "Lead-in-Eb" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
            },
            recordings: {
                trio: {
                    description: 'Trio',
                    url: 'https://soundcloud.com/david-elaine-alt/annes-eyes-sticks'
                },
                quartet: {
                    description: 'Studio Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/lester-eyes'
                },
                openstudios: {
                    description: 'Live Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/annes-eyes'
                }
            }	
        },

        "Aphrodite's Girl Friday": {
            metadata: { 
                title: "Aphrodite's Girl Friday",
                composer: "Elaine Paul",
                genre: "Ballad",
                bpm: '108',
                key: "Db Major"
            },
            fileLocation: "piano-trio",
            filePrefix: "aphrodites-girl-friday/aphrodites-girl-friday-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet" },
                "Bb Lead Sheet": { fileSuffix: "Lead-Sheet-for-Bb" },
                "Eb Lead Sheet": { fileSuffix: "Lead-Sheet-for-Eb" }
            },
            scores: {
            },
            recordings: {
                midi: {
                    description: 'Synth',
                    url: 'https://soundcloud.com/david-elaine-alt/aphrodites-girl-friday-midi/s-E1nx5'
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/aphrodites-girl-friday'
                }
            }
        },

        "Big Seven": {
            metadata: { 
                title: "Big Seven",
                composer: "Elaine Paul",
                genre: "Hip Hop/Funk",
                bpm: '64',
                key: "Db Major"
            },
            fileLocation: "alt.musica",
            filePrefix: "big-seven/combo/big-seven-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet" },
                "Concert Melody": { fileSuffix: "Melody" },
                "Bb Melody": { fileSuffix: "Melody-for-Bb" },
                "Eb Melody": { fileSuffix: "Melody-for-Eb" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
            },
            recordings: {
                midi: {
                    description: 'Synth',
                    url: 'https://soundcloud.com/david-elaine-alt/big-seven-synth/s-LUEjT'
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/big-seven'
                }
            }
        },

        "Hot Swing": {
            metadata: { 
                title: "Hot Swing",
                composer: "Elaine Paul",
                genre: "Swing",
                bpm: '230',
                key: "D minor"
            },
            fileLocation: "violin-clarinet",
            filePrefix: "hot-swing/hot-swing-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet" },
                "Clarinet in Bb": { fileSuffix: "Bb-Clarinet" },
                "Trumpet in Bb": { fileSuffix: "Bb-Trumpet" },
                "Violin": { fileSuffix: "Violin" },
            },
            scores: {
                "Score": { fileSuffix: "Score" }
            },
            recordings: {
                trio: {
                    description: 'Violin & Clarinet (Chart starts at 1:06)',
                    url: 'https://soundcloud.com/david-elaine-alt/hot-swing#t=1:06'
                },
                quartet: {
                    description: 'Jazz quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/hot-swing-1'
                }
            }
        },

        "Kickin' The Can": {
            metadata: { 
                title: "Kickin' The Can",
                composer: "D. Elaine Alt",
                genre: "Jive Swing",
                bpm: '210',
                key: "E minor"
            },
            fileLocation: "piano-trio",
            filePrefix: "kickin-the-can/kickin-the-can-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead" },
                "Bb Lead Sheet": { fileSuffix: "Lead-in-Bb" },
                "Bb Melody": { fileSuffix: "Melody-in-Bb" },
                "Bb Harmony": { fileSuffix: "Harmony-in-Bb" },
                "Eb Melody": { fileSuffix: "Melody-in-Eb" },
                "Eb Harmony": { fileSuffix: "Harmony-in-Eb" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
                "Condensed Score": { fileSuffix: "Rhythm" },
                "Score": { fileSuffix: "Score" }
            },
            recordings: {
                trio: {
                    description: 'Piano Trio with Scat Vocals',
                    url: 'https://soundcloud.com/david-elaine-alt/kickin-the-can-so-woke-brushes'
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/kickin-the-can'
                }
            }
        },

        "Linsanity": {
            metadata: { 
                title: "Linsanity",
                composer: "Elaine Paul",
                genre: "Bebop",
                bpm: '180',
                key: "A Major"
            },
            fileLocation: "jazz-combustion",
            filePrefix: "linsanity/linsanity-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead-Sheet" },
                "Bb Lead Sheet": { fileSuffix: "Lead-Sheet-for-Bb" },
                "Eb Lead Sheet": { fileSuffix: "Lead-Sheet-for-Eb" },
                "Concert Harmony": { fileSuffix: "Harmony" },
                "Bb Harmony": { fileSuffix: "Harmony-for-Bb" },
                "Eb Harmony": { fileSuffix: "Harmony-for-Eb" }
            },
            scores: {
            },
            recordings: {
                synth: {
                    description: 'Synth',
                    url: 'https://soundcloud.com/david-elaine-alt/linsanity-midi/s-x9zZv'
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/linsanity'
                }
            }
        },

        "Swampy": {
            metadata: { 
                title: "Swampy",
                composer: "D. Elaine Alt",
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
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/swampy-1'
                }
            }
        },

        "Thick As A Nickle": {
            metadata: { 
                title: "Thick As A Nickle",
                composer: "D. Elaine Alt",
                genre: "Bebop",
                bpm: '184',
                key: "Bb Major"
            },
            fileLocation: "piano-trio",
            filePrefix: "thick-as-a-nickle/thick-as-a-nickle-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead" },
                "Bb Melody": { fileSuffix: "Melody-in-Bb" },
                "Bb Harmony": { fileSuffix: "Harmony-in-Bb" },
                "Eb Melody": { fileSuffix: "Melody-in-Eb" },
                "Eb Harmony": { fileSuffix: "Harmony-in-Eb" },
                "Bass": { fileSuffix: "Bass" }
            },
            scores: {
                "Condensed Score": { fileSuffix: "Rhythm" },
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
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/thick-as-a-nickle-1'
                }
            }
        },

        "Wag That Tail": {
            metadata: { 
                title: "Wag That Tail",
                composer: "D. Elaine Alt",
                genre: "Swing Blues",
                bpm: '172',
                key: "F Major"
            },
            fileLocation: "piano-trio",
            filePrefix: "wag-that-tail/wag-that-tail-",
            parts: {
                "Concert Lead Sheet": { fileSuffix: "Lead" },
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
                },
                quartet: {
                    description: 'Quartet',
                    url: 'https://soundcloud.com/david-elaine-alt/wag-that-tail-1'
                }
            }
        }
    }
};
