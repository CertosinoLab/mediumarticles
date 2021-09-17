export const planetChartData = {
    type: "bar",
    data: {
        labels: ["Jan 2000", "Feb 2000", "Mar 2000", "Apr 2000",
            "May 2000", "Jun 2000", "Jul 2000", "Aug 2000", "Sep 2000",
            "Oct 2000", "Nov 2000", "Dec 2000"],
        datasets: [
            {
                label: "moving Average (4)",
                type: "line",
                data: [NaN, NaN, NaN, 20, 70, 80, 20, 20, 80, 10, 30, 40],
                backgroundColor: "rgba(54,73,93,.5)",
                borderColor: "#36495d",
                borderWidth: 3
            },
            {
                label: "Total Revenue (k)",
                type: "bar",
                data: [60, 55, 65, 70, 65, 75, 80, 90, 110, 120, 90, 100],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
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
