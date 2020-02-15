<template>
  <div class="hero is-medium jumbotron-container">
    <div class="hero-body">
      <div class="container">
        <div class="columns -reverse-columns">
          <div class="column is-7">
            <h1
              class="is-size-4-mobile is-size-3-tablet is-size-1-desktop title is-spaced has-text-centered-touch"
            >
              A Simple Approach To Charting.
            </h1>
            <h2 class="subtitle is-spaced has-text-centered-touch">
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
            <div class="buttons -mobile-center">
              <b-button type="is-primary">How It Works</b-button>
            </div>
          </div>
          <div class="column is-5 is-hiden-touch">
            <figure class="image">
              <img
                src="@/assets/illustrations/01.png"
                class="-shrink-mobile-image"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedJumbotron"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.polymorph {
  fill: hsl(0, 0%, 96%);
}

@media only screen and (max-width: 1024px) {
  .-mobile-center {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .-shrink-mobile-image {
    max-height: 150px;
    width: auto;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .-reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
