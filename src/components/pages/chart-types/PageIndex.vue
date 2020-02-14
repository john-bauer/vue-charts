<template>
  <div class="-chart-types-page-index">
    <PageTitle title="Chart Types" heroClass="is-light">
      <p class="subtitle">
        A set of charts that you can use, each as a component in
        <span class="is-family-code">@/components/charts/static</span>, using
        local data.
      </p>
    </PageTitle>
    <ChartsList />
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";
import ChartsList from "@/components/pages/chart-types/ChartsList.vue";

export default {
  name: "ChartTypesPageIndex",
  components: {
    PageTitle,
    ChartsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
