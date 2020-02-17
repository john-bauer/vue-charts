<template>
  <div class="-api-data-page-index">
    <bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="SampleDataOne.options"
    ></bar-chart>
  </div>
</template>

<script>
import starWarsApi from "@/api/starWarsApi.js";
import SampleDataOne from "@/data/api-data/dataSet_01";
import BarChart from "@/components/ui/charts/static/BarChart.js";

export default {
  name: "FilmAppearances",
  data: () => ({
    SampleDataOne,
    loaded: false,
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: [
            "#E0E0E0",
            "#E0E0E0",
            "#E0E0E0",
            "#E0E0E0",
            "#E0E0E0"
          ],
          data: []
        }
      ]
    },
    characterIds: [0, 1, 2, 3, 9]
  }),
  methods: {
    getStarWarsData() {
      starWarsApi.getAllPeople().then(data => {
        for (let i = 0; i < this.characterIds.length; i++) {
          let character = data.results[this.characterIds[i]];
          this.chartdata.labels.push(character.name);
          this.chartdata.datasets[0].data.push(character.films.length);
        }
        this.loaded = true;
      });
    }
  },
  mounted() {
    this.getStarWarsData();
  },
  components: {
    BarChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
