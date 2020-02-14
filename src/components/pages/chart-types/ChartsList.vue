<template>
  <section class="section">
    <div class="container">
      <div v-for="chart in charts" :key="chart.name">
        <SectionTitle :title="chart.name">
          <p class="subtitle">{{ chart.description }}</p>
          <div class="buttons">
            <b-button type="is-chartjs" size="is-small"
              >Chart.js Reference</b-button
            >
          </div>
          <component
            :is="chart.elementName"
            :chartdata="chart.chartData"
            :options="chart.chartOptions"
          ></component>
        </SectionTitle>
      </div>
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
import sampleDataSix from "@/data/dataSet_06.js";
import sampleDataSeven from "@/data/dataSet_07.js";

export default {
  name: "ChartList",
  data() {
    return {
      sampleDataOne,
      sampleDataTwo,
      sampleDataThree,
      sampleDataFour,
      sampleDataFive,
      charts: [
        {
          name: "Line Chart",
          description:
            "A way of plotting data points on a line. Often used to show trend data, or a comparison of two sets of data.",
          chartData: sampleDataOne.datacollection,
          chartOptions: sampleDataOne.options,
          elementName: "line-chart"
        },
        {
          name: "Line Chart",
          description:
            "Provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.",
          chartData: sampleDataTwo.datacollection,
          chartOptions: sampleDataTwo.options,
          elementName: "bar-chart"
        },
        {
          name: "Pie Chart",
          description:
            "A common chart divided into segments, where the arc of each segment shows the proportional value of each piece of data.",
          chartData: sampleDataThree.datacollection,
          chartOptions: sampleDataThree.options,
          elementName: "pie-chart"
        },
        {
          name: "Doughnut Chart",
          description:
            "Very similar to a pie chart, but has a configurable cutout in the middle.",
          chartData: sampleDataFour.datacollection,
          chartOptions: sampleDataFour.options,
          elementName: "doughnut-chart"
        },
        {
          name: "Radar Chart",
          description:
            "a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets.",
          chartData: sampleDataFive.datacollection,
          chartOptions: sampleDataFive.options,
          elementName: "radar-chart"
        },
        {
          name: "Polar Area Chart",
          description:
            "Similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.",
          chartData: sampleDataSix.datacollection,
          chartOptions: sampleDataSix.options,
          elementName: "polar-area-chart"
        },
        {
          name: "Bubble Chart",
          description:
            "Similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.",
          chartData: sampleDataSeven.datacollection,
          chartOptions: sampleDataSeven.options,
          elementName: "bubble-chart"
        }
      ]
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
