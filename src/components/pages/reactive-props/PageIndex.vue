<template>
  <div class="-reactive-props-page-index">
    reactive props page
    <ReactiveCharts />
  </div>
</template>

<script>
import ReactiveCharts from "@/components/pages/reactive-props/ReactiveCharts";

export default {
  name: "ReactivePropsPageIndex",
  components: {
    ReactiveCharts
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
