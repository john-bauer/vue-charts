<template>
  <div class="-reactive-charts">
    <ReactiveLine />
    <!-- <ReactiveBar /> -->
  </div>
</template>

<script>
// import ReactiveBar from "@/components/pages/reactive-props/chart-components/ReactiveBar";
import ReactiveLine from "@/components/pages/reactive-props/chart-components/ReactiveLine";

export default {
  name: "ReactiveCharts",
  components: {
    // ReactiveBar
    ReactiveLine
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
