<template>
  <div class="-chart-types-page-index">
    <PageTitle title="Chart Types" heroClass="is-info is-medium">
      <p class="subtitle">
        A set of charts that you can use, each as a component in
        <code>/components/charts/static</code>
      </p>
    </PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";

export default {
  name: "ChartTypesPageIndex",
  components: {
    PageTitle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
