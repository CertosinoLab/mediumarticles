<script>
    import {sharedData} from "../store";
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    let el;
    let data;

    onMount(() => {
        data = $sharedData;

        d3.select(el)
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .style("width", function(d) {
                return d + "px";
            })
            .text(function(d) {
                return d;
            });
    });
</script>

<style>
    .chart :global(div) {
        font: 10px sans-serif;
        background-color: steelblue;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }
</style>

<div bind:this={el} class="chart"></div>
