import {
    ma
} from 'moving-averages'

let revenueData = [60, 55, 65, 70, 65, 75, 80, 90, 110, 120, 90, 100,
                    80, 70, 100, 130, 80, 65];
let movingAvg = ma(revenueData, 3);
for(let i = 0; i < movingAvg.length; i++) {
    if(movingAvg[i]) movingAvg[i] = movingAvg[i].toFixed(2);
}

export const planetChartData = {
    type: "bar",
    data: {
        labels: ["Jan 2000", "Feb 2000", "Mar 2000", "Apr 2000",
            "May 2000", "Jun 2000", "Jul 2000", "Aug 2000", "Sep 2000",
            "Oct 2000", "Nov 2000", "Dec 2000", "Jan 2001", "Feb 2001",
            "Mar 2001", "Apr 2001", "May 2001", "Jun 2001",],
        datasets: [
            {
                label: "Moving Average (3)",
                type: "line",
                data: movingAvg,
                backgroundColor: "rgba(61,196,122,.5)",
                borderColor: "#3DC47A",
                borderWidth: 3
            },
            {
                label: "Total Revenue (k)",
                type: "bar",
                data: revenueData,
                backgroundColor: "rgba(61, 157,196,.5)",
                borderColor: "#3D9DC4",
                borderWidth: 3
            }
        ]
    },
    options: {
        //responsive: true,
        lineTension: 1,
        tooltips: {
            // Overrides the global setting
            mode: 'label'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ],
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 65,
                    minRotation: 65
                }
            }]
        }
    }
};

export default planetChartData;
