<script lang ="ts">
    // @ts-ignore
    import LoggedInHeader from '../components/LoggedInHeader.svelte';
    import VisitList from '../components/VisitList.svelte';
    import Chart from "svelte-frappe-charts";
    import VisitImage from '../components/VisitImage.svelte';
    import {onMount} from "svelte";
    import {wawService} from "../services/waw-service";
    import {generateByCounty} from "../services/visit-utils";
    import type { ChartData } from '../services/charts';

    let data = {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
            {
                values: [10, 12, 3, 9, 8, 15, 9]
            }
        ]
    };
    let byCounty : ChartData;

    onMount(async () =>{
        wawService.reload();

        const visits= await wawService.getAllVisits();
        const visitsByCounty = await wawService.getVisitsByCounty();
        byCounty = generateByCounty(visitsByCounty);
    });

</script>

<LoggedInHeader />

<div class="columns is-vcentered">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Trips to date</h1>
        <VisitList />
        <Chart {data} type="line" />
    </div>
</div>
<div class="column has-text-centered">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Visits per county</h1> 
    <Chart data={byCounty} type="bar" />
    </div>
</div>
<div class="border-box">
    <div class="column right has-text-centered">
        <VisitImage/>
    </div>
</div>
