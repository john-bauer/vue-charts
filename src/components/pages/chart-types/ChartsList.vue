<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="Line Chart" />
      <line-chart
        :chartdata="sampleDataOne.datacollection"
        :options="sampleDataOne.options"
      ></line-chart>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/ui/SectionTitle.vue";
import LineChart from "@/components/ui/charts/static/LineChart";
import sampleDataOne from "@/data/dataSet_01.js";

export default {
  name: "ChartList",
  data() {
    return {
      sampleDataOne
    };
  },
  components: {
    SectionTitle,
    LineChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
