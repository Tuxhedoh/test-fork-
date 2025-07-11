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
                name: 'The Lot Radio',
                id: 'the-lot-radio',
                className: 'the-lot-radio',
                // The Lot Radio uses FullCalendar as well, so we can just replicate their requests.
                // (Since they have not limited the origin domain on the Google API side at all....)
                // Note this'll trigger security alerts, but it's not really our issue since the API
                // key is theirs. The secure move is on them to allow requests only from their site.
                googleCalendarApiKey: 'AIzaSyD7jIVZog7IC--y1RBCiLuUmxEDeBH9wDA',
                googleCalendarId: 'thelotradio.com_j1ordgiru5n55sa5u312tjgm9k@group.calendar.google.com'
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
            // {
            //     name: 'TechLearningCollective.com',
            //     className: 'event-techlearningcollective',
            //     id: 'techlearningcollective',
            //     // Use the FullCalendar custom JSON feed until its bug #6173 is resolved.
            //     // See https://github.com/fullcalendar/fullcalendar/issues/6173
            //     url: 'https://techlearningcollective.com/events/all-fullcalendar-io.json',
            //     color: 'blue'
            // }
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
            }
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
