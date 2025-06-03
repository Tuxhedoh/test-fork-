/**
 * Utility module to support the calendar's Luma Calendar
 * event sources.
 */
import { useCorsProxy } from '../utils.js';
import FullCalendarEvent from '../event.js';

export default function LumaCalendar ( optionsObj ) {
    this.url = new URL(`https://api.lu.ma/calendar/get?api_id=${optionsObj.extraParams.api_id}`);

    return this.fetch(this.url).then((luma) => {
        optionsObj.successCallback(luma.parse().events.map(
            this.toFullCalendarEventObject.bind(this)
        ));
    });
};

LumaCalendar.prototype.fetch = async function ( url ) {
    var response = await fetch(useCorsProxy(url));
    var json = {};
    try {
        var json = await response.json();
    }
    catch (e) {
        console.error(e);
    }
    this.json = json;
    return this;
};

LumaCalendar.prototype.parse = function () {
    this.events = this.json.featured_items;
    return this;
};

LumaCalendar.prototype.toFullCalendarEventObject = function ( e ) {
    // If we have geographical and address info, grab its data.
    var location = ( e.event.geo_address_info ) ? {
        geoJSON: ( e.event.coordinate) ? {
            type: "Point",
            coordinates: [
                e.event.coordinate.longitude,
                e.event.coordinate.latitude
            ]
        } : undefined,
        eventVenue: {
            name: e.event.geo_address_info.address,
            address: {
                streetAddress: e.event.geo_address_info.address,
                addressLocality: e.event.geo_address_info.city,
                addressRegion: e.event.geo_address_info.region,
                addressCountry: e.event.geo_address_info.country
            },
            geo: {
                latitude: e.event.coordinate.latitude,
                longitude: e.event.coordinate.longitude
            }
        }
    } : null; // Otherwise, set it to `null`.
    return new FullCalendarEvent({
        title: e.event.name,
        start: e.event.start_at,
        end: e.event.end_at,
        url: `https://lu.ma/${e.event.url}`,
        extendedProps: {
            image: e.event.cover_url,
            location: location,
            raw: e
        }
    });
};
