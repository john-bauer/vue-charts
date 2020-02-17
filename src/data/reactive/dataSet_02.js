// note: the reactive sample data only uses options.
// all data is handled in the chart's individual component.

const sampleData = {
  options: {
    title: {
      display: true,
      text: "Favorite Color"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
