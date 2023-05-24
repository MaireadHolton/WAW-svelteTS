import { LatLng } from "leaflet";
import type { Visit } from "./visit-types";
import type { MarkerLayer, MarkerSpec } from "./markers";

export function getMarkerLayer(visits: Visit[]): MarkerLayer {
    const markerSpecs = Array<MarkerSpec>();
    visits.forEach((visit) => {
        markerSpecs.push({
            id: visit._id,
            title: `${visit.county.nameEng} ${visit.county.nameEng}: ${visit.location}`,
            location: new LatLng(visit.latitude, visit.longitude),
            popup: true
        });
    });
    return { title: "visits", markerSpecs: markerSpecs };
}

export function generateByCounty(visitsByCounty: CountyVisits[]): ChartData {
    const totalByCounty: ChartData = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    };

    visitsByCounty.forEach((visitByCounty) => {
        const label = `${visitByCounty.county.nameEng}, ${visitByCounty.county.nameEng}`;
        totalByCounty.labels.push(label);
        let total = 0;
        visitByCounty.visits.forEach((visit) => {
            total += 1;
        });
        totalByCounty.datasets[0].values.push(total);
    });
    return totalByCounty;
}