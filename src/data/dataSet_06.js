// used to update from dataset 1 in reactive props example

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
        data: [10, 20, 35, 100, 55, 70, 19, 41, 21, 10, 5, 20]
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
