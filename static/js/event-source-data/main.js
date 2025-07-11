/**
 * This file contains the actual list of event sources used by a
 * given instance of this site.
 */

/**
 * The `MainEventSourceData` constant is the main data
 * structure for sourcing event information. It's
 * a nested structure that looks like this:
 *
 * ```javascript
 * [
 *     {
 *         sourceType: 'Constructor', // Name of default export from event source plugin.
 *         options: {
 *             // Various options to set on the event source itself.
 *             // For details, see
 *             //     https://fullcalendar.io/docs/event-source-object#options
 *         },
 *         // List of individual sources that require the given Constructor:
 *         sources: [
 *             // Different values here, usually at a minimum:
 *             {
 *                 name: 'Source name',
 *                 id: 'source-name-for-html-id',
 *                 className: 'source-name-for-html-class',
 *                 url: 'https://example.com/blah.ical'
 *             }
 *         ]
 *     }
 * ]
 * ```
 */
const MainEventSourceData = [
    {
        sourceType: 'Dice',
        options: {
            color: '#E6D500'
        },
        sources: [
            {
                name: "C'mon Everybody",
                id: 'cmon-everybody',
                className: 'cmon-everybody',
                // Pulled from https://www.cmoneverybody.com/events
                url: 'https://events-api.dice.fm/v1/events?page%5Bsize%5D=24&types=linkout,event&filter%5Bvenues%5D%5B%5D=C%27mon%20Everybody',
                extraParams: {
                    headers: {
                        'x-api-key': 'PyghT2k59li4oGXIef8t4Git2vRl58H7WAuUJGpd'
                    }
                }
            },
            {
                name: 'Knockdown Center',
                id: 'knockdown-center',
                className: 'knockdown-center',
                url: 'https://events-api.dice.fm/v1/events?page%5Bsize%5D=24&types=linkout,event&filter%5Bvenues%5D%5B%5D=Knockdown%20Center',
                extraParams: {
                    headers: {
                        // Actually C'mon Everybody's API key, but, shrug?
                        'x-api-key': 'PyghT2k59li4oGXIef8t4Git2vRl58H7WAuUJGpd'
                    }
                }
            },
            {
                name: 'Our Wicked Lady',
                id: 'our-wicked-lady',
                className: 'our-wicked-lady',
                // Pulled from https://www.ourwickedlady.com/
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[promoters][]=Our%20Wicked%20Lady%20LLC',
                extraParams: {
                    headers: {
                        'x-api-key': 'vgtVSu5LGc3TMBuE36FwF1hn26kkt6xi5ThPJrqg'
                    }
                }
            },
            {
                name: 'Purgatory BK',
                id: 'purgatory-bk',
                className: 'purgatory-bk',
                // Pulled from https://www.purgatorybk.com/events
                url: 'https://events-api.dice.fm/v1/events?page%5Bsize%5D=24&types=linkout,event&filter%5Bvenues%5D%5B%5D=purgatory&filter%5Bvenues%5D%5B%5D=Purgatory&filter%5Bvenues%5D%5B%5D=Purgatory%20Events%20LLC',
                extraParams: {
                    headers: {
                        'x-api-key': 'VKEBoWiYzJ9uJ8tjR15aD6lL4RnUz8hb4kIYYxFA'
                    }
                }
            },
            {
                name: 'Rash NYC',
                id: 'rash-nyc',
                className: 'rash-nyc',
                // Pulled from https://rash-bar.nyc/
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[promoters][]=Bushwick%20Friendship%20LLC%20dba%20Rash',
                extraParams: {
                    headers: {
                        'x-api-key': 'SuJn1CazogzTpuWbW9sO5ulnrhRkEAg3crIAU4P4'
                    }
                }
            },
            {
                name: 'Saint Vitus',
                id: 'saint-vitus',
                className: 'saint-vitus',
                // Pulled from https://www.saintvitusbar.com/events
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[promoters][]=Saint%20Vitus%20LLC%20(dba%20Saint%20Vitus%20Bar)',
                extraParams: {
                    headers: {
                        'x-api-key': '1RsJ9u1HnFaj5F5hqFD7F9Idwsqi0o4z7QMQ2uGw'
                    }
                }
            },
            {
                name: 'Silo Brooklyn',
                id: 'silo-brooklyn',
                className: 'silo-brooklyn',
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[venues][]=Silo%20Brooklyn',
                extraParams: {
                    headers: {
                        // Actually using C'mon Everybody's API key. Shrug.
                        'x-api-key': 'PyghT2k59li4oGXIef8t4Git2vRl58H7WAuUJGpd'
                    }
                }
            },
            {
                name: 'The Brooklyn Monarch',
                id: 'the-brooklyn-monarch',
                className: 'the-brooklyn-monarch',
                // Pulled from https://www.thebrooklynmonarch.com/shows
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[venues][]=The%20Brooklyn%20Monarch',
                extraParams: {
                    headers: {
                        'x-api-key': 'IC6oEVsHlf1eZRkq5Oeuc9XszjvuJCw76K8NSeip'
                    }
                }
            },
            {
                name: 'The Sultan Room',
                id: 'the-sultan-room',
                className: 'the-sultan-room',
                // Pulled from https://thesultanroom.com/
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[venues][]=The%20Sultan%20Room&filter[venues][]=The%20Turk%27s%20Inn&filter[venues][]=The%20Sultan%20Room%20Rooftop&filter[promoters][]=Varun%20Kataria%20dba%20Turks%20Group%20LLC',
                extraParams: {
                    headers: {
                        'x-api-key': 'j3UZPWFkiQ2UFTppf79rFatRpao3ol7l5PWjmTE9'
                    }
                }
            },
            {
                name: 'Union Pool',
                id: 'union-pool',
                className: 'union-pool',
                // Pulled from https://www.union-pool.com/calendar
                url: 'https://events-api.dice.fm/v1/events?page%5Bsize%5D=24&types=linkout,event&filter%5Bpromoters%5D%5B%5D=Loop%20De%20Lou%20Production%20Corp%20dba%20Union%20Pool&filter%5Bflags%5D%5B%5D=going_ahead&filter%5Bflags%5D%5B%5D=postponed&filter%5Bflags%5D%5B%5D=rescheduled',
                extraParams: {
                    headers: {
                        'x-api-key': '7rU0bJyVtM5s3vDdYNiuQ4UtDo6pAnmH1QgXsI7E'
                    }
                }
            },
            {
                name: 'Xanadu Roller Arts',
                id: 'xanadu-roller-arts',
                className: 'xanadu-roller-arts',
                // Pulled from https://www.xanadu.nyc/calendar-skate
                url: 'https://events-api.dice.fm/v1/events?page[size]=24&types=linkout,event&filter[venues][]=Xanadu',
                extraParams: {
                    headers: {
                        'x-api-key': 'U9h1YsqzVU35DHHbW6J731wWkjDtHboB1RShm5KH'
                    }
                }
            }
        ]
    },
    {
        sourceType: 'EventBrite',
        options: {
            color: 'red'
        },
        sources: [
            {
                name: 'AdHoc Presents',
                id: 'adhoc-presents',
                className: 'adhoc-presents',
                url: 'https://www.eventbrite.com/o/adhoc-presents-new-york-17573655465'
            },
            {
                name: 'Alphaville',
                id: 'alphaville',
                className: 'alphaville',
                url: 'https://www.eventbrite.com/o/alphaville-52151572343'
            },
            {
                name: 'ArtCrawl Harlem',
                id: 'artcrawl-harlem',
                className: 'artcrawl-harlem',
                url: 'https://www.eventbrite.com/o/artcrawl-harlem-33584703715'
            },
            {
                name: 'Big Milk',
                id: 'big-milk',
                className: 'big-milk',
                url: 'https://www.eventbrite.com/o/big-milk-43187278483'
            },
            {
                name: 'Brooklyn Comedy Collective',
                id: 'brooklyn-comedy-collective',
                className: 'brooklyn-comedy-collective',
                url: 'https://www.eventbrite.com/o/brooklyn-comedy-collective-27620063469'
            },
            {
                name: 'Brooklyn Hearts Club',
                id: 'brooklyn-hearts-club',
                className: 'brooklyn-hearts-club',
                url: 'https://www.eventbrite.com/o/brooklyn-hearts-club-60043159453'
            },
            {
                name: 'Brooklyn Psychedelic Society',
                id: 'brooklyn-psychedelic-society',
                className: 'brooklyn-psychedelic-society',
                url: 'https://www.eventbrite.com/o/brooklyn-psychedelic-society-46486784473'
            },
            {
                name: 'Brooklyn Transcore',
                id: 'brooklyn-transcore',
                className: 'brooklyn-transcore',
                url: 'https://www.eventbrite.com/o/brooklyn-transcore-54036656203'
            },
            {
                name: 'Caveat NYC',
                id: 'caveat-nyc',
                className: 'caveat-nyc',
                url: 'https://www.eventbrite.com/o/caveat-13580085802'
            },
            {
                name: 'Cult 24',
                id: 'cult-24',
                className: 'cult-24',
                url: 'https://www.eventbrite.com/o/24-11905129611'
            },
            {
                name: 'CUNY Anthropology Department',
                id: 'cuny-anthropology-department',
                className: 'cuny-anthropology-department',
                url: 'https://www.eventbrite.com/o/anthropology-department-53111918033'
            },
            {
                name: "Dave's Lesbian Bar",
                id: 'daves-lesbian-bar',
                className: 'daves-lesbian-bar',
                url: 'https://www.eventbrite.com/o/daves-lesbian-bar-34182605937'
            },
            {
                name: 'Dyke Beer',
                id: 'dyke-beer',
                className: 'dyke-beer',
                url: 'https://www.eventbrite.com/o/dyke-beer-14414017747'
            },
            {
                name: 'Farm to People',
                id: 'farm-to-people',
                className: 'farm-to-people',
                url: 'https://www.eventbrite.com/o/farm-to-people-19804387040'
            },
            {
                name: 'Footlight Presents (Eventbrite)',
                id: 'footlight-presents-eventbrite',
                className: 'footlight-presents-eventbrite',
                url: 'https://www.eventbrite.com/o/footlight-presents-55346078443'
            },
            {
                name: 'Geneva Rust-Orta',
                id: 'geneva-rust-orta',
                className: 'geneva-rust-orta',
                url: 'https://www.eventbrite.com/o/geneva-rust-orta-29943238651'
            },
            // Commented out for now until EventBrite function can handle single events
            // with multiple occurrences without displaying as "All Day" events across
            // all occurrences.
            //{
            //    name: 'Good Judy',
            //    id: 'good-judy',
            //    className: 'good-judy',
            //    url: 'https://www.eventbrite.com/o/good-judy-31484266863'
            //},
            {
                name: 'Grassy Noll BK',
                id: 'grassy-noll-bk',
                className: 'grassy-noll-bk',
                url: 'https://www.eventbrite.com/o/grassy-noll-61719260603'
            },
            {
                name: 'House of Yes',
                id: 'house-of-yes',
                className: 'house-of-yes',
                url: 'https://www.eventbrite.com/o/house-of-yes-8534581785'
            },
            {
                name: 'House of X',
                id: 'house-of-x',
                className: 'house-of-x',
                url: 'https://www.eventbrite.com/o/house-of-x-35646479823'
            },
            {
                name: 'I\'m Baby x Kaylita',
                id: 'im-baby-x-kaylita',
                className: 'im-baby-x-kaylita',
                url: 'https://www.eventbrite.com/o/im-baby-x-kaylita-40383327263'
            },
            {
                name: 'Soo Intoit and RoiiiBoiiii',
                id: 'soo-intoit-and-roiii-boiiii',
                className: 'soo-intoit-and-roiii-boiiii',
                url: 'https://www.eventbrite.com/o/soo-intoit-amp-roiiiboiiii-49152333613'
            },
            {
                name: 'Stone Circle Theatre',
                id: 'stone-circle-theatre',
                className: 'stone-circle-theatre',
                url: 'https://www.eventbrite.com/o/stone-circle-theatre-58642664133'
            },
            {
                name: 'The Broadway (EventBrite)',
                id: 'the-broadway-eventbrite',
                className: 'the-broadway-eventbrite',
                url: 'https://www.eventbrite.com/o/the-broadway-20150099203'
            },
            {
                name: 'The Woods',
                id: 'the-woods',
                className: 'the-woods',
                url: 'https://www.eventbrite.com/o/the-woods-12421786066'
            },
            {
                name: 'The House',
                id: 'the-house',
                className: 'the-house',
                url: 'https://www.eventbrite.com/o/the-house-88654929613'
            },
            {
                name: 'Lakeside Prospect Park',
                id: 'lakeside-prospect-park',
                className: 'lakeside-prospect-park',
                url: 'https://www.eventbrite.com/o/lakeside-prospect-park-8423162270'
            },
            {
                name: 'LasReinas',
                id: 'lasreinas',
                className: 'lasreinas',
                url: 'https://www.eventbrite.com/o/lasreinas-2712122890'
            },
            {
                name: 'Le Organizer',
                id: 'le-organizer',
                className: 'le-organizer',
                url: 'https://www.eventbrite.com/o/le-organizer-11067403290'
            },
            {
                name: 'Littlefield',
                id: 'littlefield',
                className: 'littlefield',
                url: 'https://www.eventbrite.com/o/littlefield-18046024060'
            },
            {
                name: 'Miss Bloom Sex Educator',
                id: 'miss-bloom-sex-educator',
                className: 'miss-bloom-sex-educator',
                url: 'https://www.eventbrite.com/o/miss-bloom-sex-educator-31043208919'
            },
            {
                name: 'Museum of Reclaimed Urban Space (MoRUS)',
                id: 'morus',
                className: 'morus',
                url: 'https://www.eventbrite.com/o/museum-of-reclaimed-urban-space-18102992064'
            },
            {
                name: 'NYC Resistor (Eventbrite)',
                id: 'nyc-resistor-eventbrite',
                className: 'nyc-resistor-eventbrite',
                url: 'https://www.eventbrite.com/o/nyc-resistor-52408308'
            },
            {
                name: 'New Women Space',
                id: 'new-women-space',
                className: 'new-women-space',
                url: 'https://www.eventbrite.com/o/new-women-space-28254425133'
            },
            {
                name: 'Newtown Creek Alliance',
                id: 'newtown-creek-alliance',
                className: 'newtown-creek-alliance',
                url: 'https://www.eventbrite.com/o/newtown-creek-alliance-6350090643'
            },
            {
                name: 'Nicole (@fruitqueer)',
                id: 'nicole-fruitqueer',
                className: 'nicole-fruitqueer',
                url: 'https://www.eventbrite.com/o/nicole-54434531973'
            },
            {
                // They have a Tockify but they did not enable Tockify's ICS feed. :(
                name: 'Pagan\'s Paradise',
                id: 'pagans-paradise',
                className: 'pagans-paradise',
                url: 'https://www.eventbrite.com/o/pagans-paradise-16960673418'
            },
            {
                name: 'Parker RopeBoi',
                id: 'parker-ropeboi',
                className: 'parker-ropeboi',
                url: 'https://www.eventbrite.com/o/parker-ropeboi-2021938181'
            },
            {
                name: 'Party Dad',
                id: 'party-dad',
                className: 'party-dad',
                url: 'https://www.eventbrite.com/o/party-dad-54407191923'
            },
            {
                name: 'Queer Social',
                id: 'queer-social',
                className: 'queer-social',
                url: 'https://www.eventbrite.com/o/queer-social-18203994164'
            },
            {
                name: 'QueerSpace NYC',
                id: 'queerspace-nyc',
                className: 'queerspace-nyc',
                url: 'https://www.eventbrite.com/o/queerspace-nyc-46274508873'
            },
            {
                name: 'Secret Loft',
                id: 'secret-loft',
                className: 'secret-loft',
                url: 'https://www.eventbrite.com/o/secret-loft-11841101530'
            },
            {
                name: 'Sundown Bar (Sundownstairs)',
                id: 'sundown-bar-sundownstairs',
                className: 'sundown-bar-sundownstairs',
                url: 'https://www.eventbrite.com/o/sundownstairs-59227590153'
            },
            {
                name: 'The Bell House',
                id: 'the-bell-house',
                className: 'the-bell-house',
                url: 'https://www.eventbrite.com/o/the-bell-house-17899492469'
            },
            {
                name: 'The Future Now',
                id: 'the-future-now',
                className: 'the-future-now',
                url: 'https://www.eventbrite.com/o/the-future-now-41195140453'
            },
            {
                name: 'The Nova Experiment',
                id: 'the-nova-experiment',
                className: 'the-nova-experiment',
                url: 'https://www.eventbrite.com/o/the-nova-experiment-17863009866'
            },
            {
                name: 'Tiny Arts Supply',
                id: 'tiny-arts-supply',
                className: 'tiny-arts-supply',
                url: 'https://www.eventbrite.com/o/tiny-arts-supply-76612649623'
            },
            {
                name: 'Union Hall',
                id: 'union-hall',
                className: 'the-sultan-room',
                url: 'https://www.eventbrite.com/o/union-hall-17899496497'
            },
            {
                name: 'Wet Spot',
                id: 'wet-spot',
                className: 'wet-spot-room',
                url: 'https://www.eventbrite.com/o/wet-spot-33199977351'
            },
            {
                name: 'Zara Franke/Lucy Gaehring',
                id: 'zara-franke-lucy-gaehring',
                className: 'zara-franke-lucy-gaehring',
                url: 'https://www.eventbrite.com/o/zara-frankelucy-gaehring-58162939403'
            }
        ]
    },
    {
        sourceType: 'ForbiddenTickets',
        options: {
            color: 'black',
            textColor: 'white'
        },
        sources: [
            {
                name: 'Kat Scratch Studios',
                id: 'kat-scratch-studios',
                className: 'kat-scratch-studios',
                url: 'https://forbiddentickets.com/events/kat-scratch-studios/json'
            },
            {
                name: 'Naughty Nytes NYC',
                id: 'naughty-nytes-nyc',
                className: 'naughty-nytes-nyc',
                url: 'https://forbiddentickets.com/events/naughty-nytes-nyc/json'
            },
            {
                name: 'Submit NYC',
                id: 'submit-nyc',
                className: 'submit-nyc',
                url: 'https://forbiddentickets.com/events/submit-nyc/json'
            }
        ]
    },
    {
        sourceType: 'GoDaddy',
        options: {
            color: '#14DCDC'
        },
        sources: [
            {
                name: 'Secret Pour',
                id: 'secret-pour',
                className: 'secret-pour',
                // TODO: The exact URL might be different
                //       or change, but the IDs in this
                //       can be scraped from the page's
                //       HTML content itself, probably?
                originUrl: 'https://secretpour.com/events',
                url: 'https://calendar.apps.secureserver.net/v1/events/f4b023b5-76b9-43ad-a946-16742fbc9f3f/1e888006-2674-49ab-b9c7-b6bb2abf3e57/936f236b-8d20-4733-ac9c-d1fc34f3ae6e'
            }
        ]
    },
    {
        sourceType: 'GoogleCalendar',
        options: {
            color: 'gray'
        },
        sources: [
            {
                name: 'Billie Bullock',
                id: 'billie-bullock',
                className: 'billie-bullock',
                url: 'https://calendar.google.com/calendar/ical/heybilliebullock%40gmail.com/public/basic.ics'
            },
            {
                name: 'Caffiene Underground',
                id: 'caffiene-underground',
                className: 'caffiene-underground',
                url: 'https://calendar.google.com/calendar/ical/013k1i3tkls5tas280vio8cfm4%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'Footlight Presents (Google Calendar)',
                id: 'footlight-presents',
                className: 'footlight-presents',
                url: 'https://calendar.google.com/calendar/ical/q2eve034kguv4h52j3291udvbo%40group.calendar.google.com/public/basic.ics'
            },
            {
                // Maintained by Tech Learning Collective's Partner Operations Team.
                // This is mostly a stop-gap for events we can't automatically add.
                name: 'Friendly to Anarchism.NYC',
                id: 'friendlytoanarchismnyc',
                className: 'friendlytoanarchismnyc',
                url: 'https://calendar.google.com/calendar/ical/2om8s9hsd7kkkjcc88kon65i2o%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'Happy Fun Hideaway',
                id: 'happy-fun-hideaway',
                className: 'hart-bar',
                url: 'https://calendar.google.com/calendar/ical/df0602291afe16242665e5d462f9086f30f7d420b9aa4edb1d9eb159e5c970e5%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'Hart Bar',
                id: 'hart-bar',
                className: 'hart-bar',
                url: 'https://calendar.google.com/calendar/ical/qhsrkjv5s7mb4vidjem575jvt4%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'The Mint Muse',
                id: 'the-mint-muse',
                className: 'the-mint-muse',
                url: 'https://calendar.google.com/calendar/ical/eb535e467c4dadeada04a5c0686b1aa1d9eaabcdbc8172ebc371958b5a15d444%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'NYC Resistor (Google Calendar)',
                id: 'nycresistor',
                className: 'nycresistor',
                url: 'https://calendar.google.com/calendar/ical/p2m2av9dhrh4n1ub7jlsc68s7o%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'NYSEC.io',
                id: 'nysec-io',
                className: 'nysec-io',
                url: 'https://calendar.google.com/calendar/ical/tvrptkil8r120s1guaefhp23hs%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'Polyphase Portal',
                id: 'polyphase-portal',
                className: 'polyphase-portal',
                url: 'https://calendar.google.com/calendar/ical/polyphaseportal%40gmail.com/public/basic.ics'
            },
            {
                name: 'The Lot Radio',
                id: 'the-lot-radio',
                className: 'the-lot-radio',
                // The Lot Radio uses FullCalendar as well, so we can just replicate their requests.
                // (Since they have not limited the origin domain on the Google API side at all....)
                // Note this'll trigger security alerts, but it's not really our issue since the API
                // key is theirs. The secure move is on them to allow requests only from their site.
                googleCalendarApiKey: 'AIzaSyD7jIVZog7IC--y1RBCiLuUmxEDeBH9wDA',
                googleCalendarId: 'thelotradio.com_j1ordgiru5n55sa5u312tjgm9k@group.calendar.google.com'
            },
            {
                name: 'Queer Flatbush',
                id: 'queer-flatbush',
                className: 'queer-flatbush',
                url: 'https://calendar.google.com/calendar/ical/queerflatbush%40gmail.com/public/basic.ics'
            },
            {
                name: 'Vers BK',
                id: 'vers-bk',
                className: 'vers-bk',
                url: 'https://calendar.google.com/calendar/ical/c_qi5b592teecmbi4l2jk7ff69ao%40group.calendar.google.com/public/basic.ics'
            },
            {
                name: 'Wavefield',
                id: 'wavefield',
                className: 'wavefield',
                url: 'https://calendar.google.com/calendar/ical/a5a95266f754c12ddb84a86a9bba50933bd640f510db74f8a7e502a512071907%40group.calendar.google.com/public/basic.ics'
            }
        ]
    },
    {
        // For "events from an iCalendar feed" type
        // of event source, see:
        //     https://fullcalendar.io/docs/icalendar
        sourceType: 'ics',
        options: {
            format: 'ics'
        },
        sources: [
            {
                name: 'Livecode.NYC',
                id: 'livecode-nyc',
                className: 'livecode-nyc',
                url: 'https://livecode.nyc/calendar.ics',
            },
            {
                name: 'NYC Anarchist Bookfair',
                id: 'nyc-anarchist-bookfair',
                className: 'nyc-anarchist-bookfair',
                url: 'https://anarchistbookfair.net/?ical=1',
                useCorsProxy: true
            }
            // These calendars hosted on Meetup.com will fail due
            // to a hostile business decision by Meetup itself.
            // See: https://web.archive.org/web/20231001230958/https://github.com/juniorguru/teemup#why
            //{
            //    name: 'NYC Mesh',
            //    id: 'nycmesh',
            //    className: 'nycmesh',
            //    url: 'https://www.meetup.com/nycmesh/events/ical/',
            //    useCorsProxy: true,
            //    color: '#FC0'
            //},
            //{
            //    name: 'NYC Tri-State Area Bisexual+ SGL Queer & Questioning Meetup',
            //    id: 'nyc-tri-state-area-bisexual-sgl-queer-questioning-meetup',
            //    className: 'nyc-tri-state-area-bisexual-sgl-queer-questioning-meetup',
            //    url: 'https://www.meetup.com/bisexual-nyc/events/ical/',
            //    useCorsProxy: true,
            //    color: '#FC0'
            //},
            //{
            //    name: 'DEFCON201',
            //    id: 'defcon201',
            //    className: 'defcon201',
            //    url: 'https://www.meetup.com/DEFCON201/events/ical/',
            //    useCorsProxy: true,
            //    color: '#FC0'
            //},
            //{
            //    name: 'New York CryptoParty Network',
            //    id: 'newyorkcryptopartynetwork',
            //    className: 'newyorkcryptopartynetwork',
            //    url: 'https://www.meetup.com/New-York-Cryptoparty-Network/events/ical/',
            //    useCorsProxy: true
            //}
        ]
    },
    {
        // For handling "events (as a json feed)" which are natively
        // supported in FullCalendar. See:
        //     https://fullcalendar.io/docs/events-json-feed
        sourceType: 'json',
        options: {
            format: 'json'
        },
        sources: [
            {
                name: 'TechLearningCollective.com',
                className: 'event-techlearningcollective',
                id: 'techlearningcollective',
                // Use the FullCalendar custom JSON feed until its bug #6173 is resolved.
                // See https://github.com/fullcalendar/fullcalendar/issues/6173
                url: 'https://techlearningcollective.com/events/all-fullcalendar-io.json',
                color: 'blue'
            }
        ]
    },
    {
        sourceType: 'LumaCalendar',
        options: {},
        sources: [
            {
                name: 'NEAR community',
                className: 'near-community',
                id: 'near-community',
                extraParams: {
                    api_id: 'cal-Nrz4EsmLDjXvjPp'
                }
            },
        ]
    },
    {
        sourceType: 'ResidentAdvisor',
        options: {
            url: 'https://ra.co/graphql',
            color: '#FF4849',
            textColor: '#FFF'
        },
        sources: [
            {
                name: 'Baby\'s All Right',
                className: 'babys-all-right',
                id: 'babys-all-right',
                extraParams: {
                    gqlVariables: {
                        club: '85157'
                    }
                }
            },
            {
                name: 'Basement',
                className: 'Basement',
                id: 'basement',
                extraParams: {
                    gqlVariables: {
                        club: '165976'
                    }
                }
            },
            {
                name: 'Bossa Nova Civic Club',
                className: 'bossa-nova-civic-club',
                id: 'bossa-nova-civic-club',
                extraParams: {
                    gqlVariables: {
                        club: '71292'
                    }
                }
            },
            {
                name: 'Brooklyn Steel',
                className: 'brooklyn-steel',
                id: 'brooklyn-steel',
                extraParams: {
                    gqlVariables: {
                        club: '132312'
                    }
                }
            },
            {
                name: 'Fractals',
                className: 'fractals',
                id: 'fractals',
                extraParams: {
                    gqlVariables: {
                        promoter: '134553'
                    }
                }
            },
            {
                name: 'Good Room BK',
                className: 'good-room-bk',
                id: 'good-room-bk',
                extraParams: {
                    gqlVariables: {
                        club: '97606'
                    }
                }
            },
            {
                name: 'Hell Phone',
                className: 'hell-phone',
                id: 'hell-phone',
                extraParams: {
                    gqlVariables: {
                        club: '110403'
                    }
                }
            },
            {
                name: 'H0l0 Warehouse',
                className: 'h0l0-warehouse',
                id: 'h0l0-warehouse',
                extraParams: {
                    gqlVariables: {
                        club: '167751'
                    }
                }
            },
            {
                name: 'Jupiter Disco',
                className: 'jupiter-disco',
                id: 'jupiter-disco',
                extraParams: {
                    gqlVariables: {
                        club: '128789'
                    }
                }
            },
            {
                name: 'Mansions',
                className: 'mansions',
                id: 'mansions',
                extraParams: {
                    gqlVariables: {
                        club: '197275'
                    }
                }
            },
            {
                name: 'Merge (Resident Advisor)',
                className: 'merge',
                id: 'merge',
                extraParams: {
                    gqlVariables: {
                        promoter: '101265'
                    }
                }
            },
            {
                name: 'Nowadays',
                className: 'nowadays',
                id: 'nowadays',
                extraParams: {
                    gqlVariables: {
                        club: '105873'
                    }
                }
            },
            {
                name: 'Paragon Broadway',
                className: 'paragon-broadway',
                id: 'paragon-broadway',
                extraParams: {
                    gqlVariables: {
                        club: '195815'
                    }
                }
            },
            {
                name: 'Perfect Health',
                className: 'perfect-health',
                id: 'perfect-health',
                extraParams: {
                    gqlVariables: {
                        promoter: '141140'
                    }
                }
            },
            {
                name: 'TV Eye (Resident Advisor)',
                className: 'tv-eye-resident-advisor',
                id: 'tv-eye-resident-advisor',
                extraParams: {
                    gqlVariables: {
                        club: '188683'
                    }
                }
            },
            {
                name: 'The End',
                className: 'the-end',
                id: 'the-end',
                extraParams: {
                    gqlVariables: {
                        club: '225222'
                    }
                }
            }
        ]
    },
    // September 2023: SeeTickets.us seems to be blocking our CORS proxy.
    //{
    //    sourceType: 'SeeTicketsEvents',
    //    options: {
    //        color: '#FFB200'
    //    },
    //    sources: [
    //        {
    //            name: 'Baby\'s All Right',
    //            id: 'babys-all-right',
    //            className: 'babys-all-right',
    //            // From https://wl.seetickets.us/BabysAllRightBrooklyn
    //            url: 'https://wl.seetickets.us/wafform.aspx?_act=eventcalendarwidget&AJAX=1&FetchEvents=1&_pky=6066969&afflky=BabysAllRightBrooklyn',
    //            location: {
    //                geoJSON: {
    //                    type: "Point",
    //                    coordinates: [-73.9656801, 40.7101318]
    //                }
    //            }
    //        },
    //        {
    //            name: 'TV Eye (SeeTickets)',
    //            id: 'tv-eye',
    //            className: 'tv-eye',
    //            // From https://wl.seetickets.us/TVEye
    //            url: 'https://wl.seetickets.us/wafform.aspx?_act=eventcalendarwidget&AJAX=1&FetchEvents=1&_pky=9324820&afflky=TVEye',
    //            location: {
    //                geoJSON: {
    //                    type: "Point",
    //                    coordinates: [-73.9074125, 40.6978584]
    //                }
    //            }
    //        }
    //    ]
    //},
    {
        sourceType: 'Squarespace',
        options: {
            color: 'white',
            textColor: 'black'
        },
        sources: [
            {
                name: 'Wonderville',
                id: 'wonderville',
                className: 'wonderville',
                url: 'https://www.wonderville.nyc/events?format=json'
            }
        ]
    },
    {
        sourceType: 'WordPressEventsOrganiser',
        options: {
            color: 'blue'
        },
        sources: [
            {
                name: 'The Seneca',
                id: 'the-seneca',
                className: 'the-seneca',
                url: 'https://www.thesenecanyc.com/wp-admin/admin-ajax.php?action=eventorganiser-fullcal&timeformat=g:i%20a&users_events=false',
                useCorsProxy: true
            }
        ]
    },
];

export default MainEventSourceData;
