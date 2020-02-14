// used for radar

const sampleData = {
  datacollection: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "1950",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [8.77, 55.61, 21.69, 6.62, 6.82]
      },
      {
        label: "2050",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        data: [25.48, 54.16, 7.61, 8.06, 4.45]
      }
    ]
  },
  options: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: "Distribution in % of world population"
    },
    responsive: true,
    maintainAspectRatio: false
  }
};

export default sampleData;
