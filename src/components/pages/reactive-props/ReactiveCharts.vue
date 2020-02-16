<template>
  <div class="-reactive-charts section container">
    <BarChart :chart-data="datacollection" :options="sampleDataOne.options" />
    <b-button @click="fillData()">Randomize</b-button>
  </div>
</template>

<script>
import BarChart from "@/components/ui/charts/reactive/BarChart.js";
import sampleDataOne from "@/data/dataSet_01.js";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      sampleDataOne,
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
