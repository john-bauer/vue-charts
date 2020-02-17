// note: the reactive sample data only uses options.
// all data is handled in the chart's individual component.

const sampleData = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    },
    legend: {
      display: true
    },
    title: {
      display: true,
      text: "Daily Active Users"
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
