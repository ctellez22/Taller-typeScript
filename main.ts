import { dataSeries } from "./dataSeries.js";
import { Serie } from "./serie.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(dataSeries);

function calculateSeasonAverage(series: Serie[]) {
    let numSeries = series.length;
    let sumSeasons = 0;
    series.forEach(c=>{
        sumSeasons += c.seasons;
    });
return sumSeasons/numSeries
}

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
    let seasonAverage = calculateSeasonAverage(series);
    let seasonAvgElement = document.createElement("tr");
    seasonAvgElement.innerHTML=`<p>Seasons average: ${seasonAverage}<p>`;
    seriesTbody.appendChild(seasonAvgElement);

}

