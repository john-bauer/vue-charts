<template>
  <section class="section">
    <div class="container">
      <div class="block">
        <b-tabs v-model="activeTab" position="is-centered">
          <template v-for="(chart, index) in charts">
            <b-tab-item :key="index" :label="chart.name">
              <p class="subtitle has-text-centered is-italic">
                {{ chart.description }}
              </p>
              <component
                v-if="index === activeTab"
                :is="chart.elementName"
                :chartdata="chart.chartData"
                :options="chart.chartOptions"
              ></component>
              <br />
              <div class="buttons -center-buttons">
                <b-button
                  tag="a"
                  :href="chart.apiReference"
                  target="_blank"
                  type="is-chartjs"
                  size="is-small"
                  >Chart.js Reference</b-button
                >
                <b-button
                  tag="a"
                  :href="chart.dataFile"
                  download
                  size="is-small"
                  icon-left="download"
                  type="is-info"
                  >Sample Data</b-button
                >
              </div>
            </b-tab-item>
          </template>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
// import section title ui
import SectionTitle from "@/components/ui/SectionTitle.vue";

// import each chart as a component
import LineChart from "@/components/ui/charts/static/LineChart";
import BarChart from "@/components/ui/charts/static/BarChart";
import DoughnutChart from "@/components/ui/charts/static/DoughnutChart";
import PieChart from "@/components/ui/charts/static/PieChart";
import PolarAreaChart from "@/components/ui/charts/static/PolarAreaChart";
import RadarChart from "@/components/ui/charts/static/RadarChart";
import BubbleChart from "@/components/ui/charts/static/BubbleChart";

// import sample data
import sampleDataOne from "@/data/static/dataSet_01.js";
import sampleDataTwo from "@/data/static/dataSet_02.js";
import sampleDataThree from "@/data/static/dataSet_03.js";
import sampleDataFour from "@/data/static/dataSet_04.js";
import sampleDataFive from "@/data/static/dataSet_05.js";
import sampleDataSix from "@/data/static/dataSet_06.js";
import sampleDataSeven from "@/data/static/dataSet_07.js";

export default {
  name: "ChartList",
  data() {
    return {
      activeTab: null,
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
          dataFile: "/data/dataSet_01.js",
          apiReference: "https://www.chartjs.org/docs/latest/charts/line.html",
          elementName: "line-chart"
        },
        {
          name: "Bar Chart",
          description:
            "Provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.",
          chartData: sampleDataTwo.datacollection,
          chartOptions: sampleDataTwo.options,
          dataFile: "/data/dataSet_02.js",
          apiReference: "https://www.chartjs.org/docs/latest/charts/bar.html",
          elementName: "bar-chart"
        },
        {
          name: "Pie Chart",
          description:
            "A common chart divided into segments, where the arc of each segment shows the proportional value of each piece of data.",
          chartData: sampleDataThree.datacollection,
          chartOptions: sampleDataThree.options,
          dataFile: "/data/dataSet_03.js",
          apiReference:
            "https://www.chartjs.org/docs/latest/charts/doughnut.html",
          elementName: "pie-chart"
        },
        {
          name: "Doughnut Chart",
          description:
            "Very similar to a pie chart, but has a configurable cutout in the middle.",
          chartData: sampleDataFour.datacollection,
          chartOptions: sampleDataFour.options,
          dataFile: "/data/dataSet_01.js",
          apiReference:
            "https://www.chartjs.org/docs/latest/charts/doughnut.html",
          elementName: "doughnut-chart"
        },
        {
          name: "Radar Chart",
          description:
            "A way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets.",
          chartData: sampleDataFive.datacollection,
          chartOptions: sampleDataFive.options,
          dataFile: "/data/dataSet_01.js",
          apiReference: "https://www.chartjs.org/docs/latest/charts/radar.html",
          elementName: "radar-chart"
        },
        {
          name: "Polar Area Chart",
          description:
            "Similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.",
          chartData: sampleDataSix.datacollection,
          chartOptions: sampleDataSix.options,
          dataFile: "/data/dataSet_01.js",
          apiReference: "https://www.chartjs.org/docs/latest/charts/polar.html",
          elementName: "polar-area-chart"
        },
        {
          name: "Bubble Chart",
          description:
            "used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles",
          chartData: sampleDataSeven.datacollection,
          chartOptions: sampleDataSeven.options,
          dataFile: "/data/dataSet_01.js",
          apiReference:
            "https://www.chartjs.org/docs/latest/charts/bubble.html",
          elementName: "bubble-chart"
        }
      ]
    };
  },
  mounted() {
    this.activeTab = 0;
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
<style scoped lang="scss">
.-center-buttons {
  justify-content: center;
}
</style>
