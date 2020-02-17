<template>
  <div class="-reactive-bar">
    <bar-chart :chart-data="myChartData" :options="myChartOptions"></bar-chart>
    <b-button @click="fillData()" type="is-primary">Randomize Data</b-button>
  </div>
</template>

<script>
// import reactive base chart
import BarChart from "@/components/ui/charts/reactive/BarChart.js";

// import sample data (only used for options)
import DataSetTwo from "@/data/reactive/dataSet_02.js";

export default {
  name: "ReactiveBar",
  data() {
    return {
      DataSetTwo,
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
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
      this.myChartOptions = DataSetTwo.options;
    }
  },
  mounted() {
    this.fillData();
  },
  components: {
    BarChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
