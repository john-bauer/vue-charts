<template>
  <div class="-reactive-charts section container">
    <b-notification
      type="is-warning"
      has-icon
      aria-close-label="Close notification"
      role="alert"
    >
      The
      <a href="https://vue-chartjs.org/guide/#events"
        >vue-chartjs documentation</a
      >
      notes that: "The reactivity system at its current state is not robust. You
      will run into several problems with it because there are many use-cases
      and ways to pass in your data." I've run into several issues first-hand,
      so use this feature with caution.
    </b-notification>
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
