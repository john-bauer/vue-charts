// used for line

const sampleData = {
  datacollection: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "Week 1",
        pointBackgroundColor: "white",
        borderColor: "#FF8A80",
        borderWidth: 1,
        backgroundColor: "rgb(255,138,128,.1)",
        pointBorderColor: "#FF5252",
        data: [13, 56, 39, 50, 77, 33, 18]
      },
      {
        label: "Week 2",
        pointBackgroundColor: "white",
        borderColor: "#B388FF",
        borderWidth: 1,
        backgroundColor: "rgb(179,136,255,.1)",
        pointBorderColor: "#651FFF",
        data: [8, 62, 38, 58, 66, 30, 33]
      },
      {
        label: "Week 3",
        pointBackgroundColor: "white",
        borderColor: "#80D8FF",
        borderWidth: 1,
        backgroundColor: "rgb(128,216,255,.1)",
        pointBorderColor: "#00B0FF",
        data: [11, 44, 43, 54, 68, 50, 15]
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
    title: {
      display: true,
      text: "Daily Active Users"
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
