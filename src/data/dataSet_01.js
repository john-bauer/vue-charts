// used for line, bar

const sampleData = {
  datacollection: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datasets: [
      {
        label: "Github Commits",
        backgroundColor: "#f87979",
        pointBackgroundColor: "white",
        borderWidth: 1,
        pointBorderColor: "#249EBF",
        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
      }
    ]
  },
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
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
