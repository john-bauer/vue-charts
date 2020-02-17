<template>
  <div class="-reactive-bar">
    <line-chart
      :chart-data="myChartData"
      :options="myChartOptions"
    ></line-chart>
    <b-button @click="fillData()" type="is-primary">Randomize Data</b-button>
  </div>
</template>

<script>
// import reactive base chart
import LineChart from "@/components/ui/charts/reactive/LineChart.js";

// import sample data (only used for options)
import DataSetOne from "@/data/reactive/dataSet_01.js";

export default {
  name: "ReactiveBar",
  data() {
    return {
      DataSetOne,
      myChartData: null,
      myChartOptions: null
    };
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    fillData() {
      this.myChartData = {
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
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: "Week 2",
            pointBackgroundColor: "white",
            borderColor: "#B388FF",
            borderWidth: 1,
            backgroundColor: "rgb(179,136,255,.1)",
            pointBorderColor: "#651FFF",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: "Week 3",
            pointBackgroundColor: "white",
            borderColor: "#80D8FF",
            borderWidth: 1,
            backgroundColor: "rgb(128,216,255,.1)",
            pointBorderColor: "#00B0FF",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
      this.myChartOptions = DataSetOne.options;
    }
  },
  mounted() {
    this.fillData();
  },
  components: {
    LineChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
