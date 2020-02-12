<template>
  <section class="section">
    <div class="container">
      <SectionTitle title="Line Chart" />
      <line-chart
        :chartdata="sampleDataOne.datacollection"
        :options="sampleDataOne.options"
      ></line-chart>
      <br />
      <SectionTitle title="Bar Chart" />
      <bar-chart
        :chartdata="sampleDataOne.datacollection"
        :options="sampleDataOne.options"
      ></bar-chart>
      <br />
      <SectionTitle title="Doughnut Chart" />
      <doughnut-chart
        :chartdata="sampleDataTwo.datacollection"
        :options="sampleDataTwo.options"
      ></doughnut-chart>
      <br />
      <SectionTitle title="Pie Chart" />
      <pie-chart
        :chartdata="sampleDataTwo.datacollection"
        :options="sampleDataTwo.options"
      ></pie-chart>
      <br />
      <SectionTitle title="Polar Area" />
      <polar-area-chart
        :chartdata="sampleDataThree.datacollection"
        :options="sampleDataThree.options"
      ></polar-area-chart>
      <br />
      <SectionTitle title="Radar" />
      <radar-chart
        :chartdata="sampleDataFive.datacollection"
        :options="sampleDataFive.options"
      ></radar-chart>
      <br />
      <SectionTitle title="Bubble Chart" />
      <bubble-chart
        :chartdata="sampleDataFour.datacollection"
        :options="sampleDataFour.options"
      ></bubble-chart>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/ui/SectionTitle.vue";
import LineChart from "@/components/ui/charts/static/LineChart";
import BarChart from "@/components/ui/charts/static/BarChart";
import DoughnutChart from "@/components/ui/charts/static/DoughnutChart";
import PieChart from "@/components/ui/charts/static/PieChart";
import PolarAreaChart from "@/components/ui/charts/static/PolarAreaChart";
import RadarChart from "@/components/ui/charts/static/RadarChart";
import BubbleChart from "@/components/ui/charts/static/BubbleChart";
import sampleDataOne from "@/data/dataSet_01.js";
import sampleDataTwo from "@/data/dataSet_02.js";
import sampleDataThree from "@/data/dataSet_03.js";
import sampleDataFour from "@/data/dataSet_04.js";
import sampleDataFive from "@/data/dataSet_05.js";

export default {
  name: "ChartList",
  data() {
    return {
      sampleDataOne,
      sampleDataTwo,
      sampleDataThree,
      sampleDataFour,
      sampleDataFive
    };
  },
  components: {
    SectionTitle,
    LineChart,
    BarChart,
    DoughnutChart,
    PieChart,
    PolarAreaChart,
    BubbleChart,
    RadarChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
