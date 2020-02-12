<template>
  <section class="hero is-large is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-2-tablet">
          Lorem Ipsum Dolor.
        </h1>
        <h2 class="subtitle">
          An app showcasing the power of
          <a href="https://vuejs.org/" class="has-text-link" target="_blank"
            >Vue</a
          >
          and
          <a
            href="https://www.chartjs.org/"
            class="has-text-link"
            target="_blank"
            >Chart.js</a
          >, all tied together by the
          <a
            href="https://vue-chartjs.org/"
            class="has-text-link"
            target="_blank"
            >vue-chartjs</a
          >
          package.
        </h2>
        <div class="buttons">
          <b-button icon-left="github-circle" type="is-github">Docs</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppJumbotron"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
