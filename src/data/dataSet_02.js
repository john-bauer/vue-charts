// used for doughnut

const sampleData = {
  datacollection: {
    labels: ["Vue", "Ember", "React", "Angular"],
    datasets: [
      {
        backgroundColor: [
          "rgba(65, 184, 131, .8)",
          "rgba(228, 102, 81, .8)",
          "rgba(0, 216, 255, .8)",
          "rgba(155, 89, 182, .8)"
        ],
        pointBackgroundColor: "white",
        borderWidth: 1,
        pointBorderColor: "#249EBF",
        data: [40, 20, 80, 10]
      }
    ]
  },
  options: {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
