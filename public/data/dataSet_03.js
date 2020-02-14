// used for pie

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
        data: [21, 7, 56, 16]
      }
    ]
  },
  options: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: "Preferred JavaScript Framework (2020)"
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
