<template>
    <div style="width: 800px; height: 600px;">
        <canvas id="revenue-chart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js'
    import revenueChartData from './revenue-data.js'

    export default {
        name: 'RevenueChart',
        data() {
            return {
                revenueChartData: revenueChartData
            }
        },
        mounted() {
            const ctx = document.getElementById('revenue-chart');
            new Chart(ctx, this.revenueChartData);
        }
    }
</script>
