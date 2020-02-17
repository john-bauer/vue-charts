<template>
  <div class="-reactive-props-page-index">
    <PageTitle title="Reactive Props" heroClass="is-info">
      <p class="subtitle">
        When you're working with dynamic data, you can update them in realtime
        using reactive props. Learn more
        <u>
          <a
            href="https://vue-chartjs.org/guide/#vue-single-file-components"
            target="_blank"
            class="is-underlined"
            >here</a
          ></u
        >.
      </p>
    </PageTitle>
    <section class="section">
      <div class="container">
        <ReactivityWarning />
        <ReactiveCharts />
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";
import ReactivityWarning from "@/components/pages/reactive-props/ReactivityWarning";
import ReactiveCharts from "@/components/pages/reactive-props/ReactiveCharts";

export default {
  name: "ReactivePropsPageIndex",
  components: {
    PageTitle,
    ReactivityWarning,
    ReactiveCharts
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
