// used for bar

const sampleData = {
  datacollection: {
    labels: ["Red", "Green", "Blue", "Yellow", "Other"],
    datasets: [
      {
        backgroundColor: [
          "#FF8A80",
          "#B9F6CA",
          "#82B1FF",
          "#FFFF8D",
          "#BDBDBD"
        ],
        pointBackgroundColor: "white",
        borderWidth: 1,
        pointBorderColor: "#249EBF",
        data: [55, 74, 89, 55, 22]
      }
    ]
  },
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
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
