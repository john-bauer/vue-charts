<template>
  <div class="hero is-medium jumbotron-container">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1
          class="is-size-4-mobile is-size-3-tablet is-size-1-desktop title is-spaced"
        >
          A Simple Approach To Charting.
        </h1>
        <h2 class="subtitle is-spaced">
          A demo app that showcases the power of
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
        <b-button
          icon-left="github-circle"
          class="-centered has-margin-right-5 has-margin-left-5"
          type="is-github"
          >Docs</b-button
        >
        <b-button
          class="-centered has-margin-right-5 has-margin-left-5"
          type="is-primary"
          >How It Works</b-button
        >
      </div>
    </div>
    <!-- SVG -->
    <svg viewBox="0 0 1200 200">
      <title>charts</title>
      <polygon
        class="polymorph"
        points="1200 201 0 201 0 138 80 138 80 113 160 113 160 153 240 153 240 93 320 93 320 123 400 123 400 73 480 73 480 93 560 93 560 53 640 53 640 13 720 13 720 53 800 53 800 113 880 113 880 83 960 83 960 143 1040 143 1040 63 1120 63 1120 103 1200 103 1200 201"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AnimatedJumbotron",
  mounted() {
    this.$anime({
      targets: ".polymorph",
      points: [
        {
          value: [
            "1200 201 0 201 0 138 80 138 80 113 160 113 160 153 240 153 240 93 320 93 320 123 400 123 400 73 480 73 480 93 560 93 560 53 640 53 640 13 720 13 720 53 800 53 800 113 880 113 880 83 960 83 960 143 1040 143 1040 63 1120 63 1120 103 1200 103 1200 201"
          ]
        },
        {
          value: [
            "1200 201 0 201 0 38 80 38 80 63 160 63 160 113 240 113 240 143 320 143 320 103 400 103 400 163 480 163 480 123 560 123 560 63 640 63 640 93 720 93 720 143 800 143 800 173 880 173 880 113 960 113 960 53 1040 53 1040 13 1120 13 1120 33 1200 33 1200 201"
          ]
        },
        {
          value: [
            "1200 201 0 201 0 8 80 8 80 53 160 53 160 33 240 33 240 73 320 73 320 123 400 123 400 173 480 173 480 163 560 163 560 23 640 23 640 103 720 103 720 73 800 73 800 133 880 133 880 13 960 13 960 73 1040 73 1040 123 1120 123 1120 163 1200 163 1200 201"
          ]
        },
        {
          value: [
            "1200 201 0 201 0 138 80 138 80 113 160 113 160 153 240 153 240 93 320 93 320 123 400 123 400 73 480 73 480 93 560 93 560 53 640 53 640 13 720 13 720 53 800 53 800 113 880 113 880 83 960 83 960 143 1040 143 1040 63 1120 63 1120 103 1200 103 1200 201"
          ]
        }
      ],
      duration: 12000,
      easing: "easeInOutSine",
      loop: true
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.-centered {
  margin: 0 auto;
}

.polymorph {
  fill: hsl(0, 0%, 96%);
}
</style>
