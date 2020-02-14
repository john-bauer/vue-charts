<template>
  <section class="hero is-medium has-background-white-ter">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <figure class="image is-96x96 -center-image">
              <img src="@/assets/img/logos/01.png" />
            </figure>
          </div>
          <div class="column has-text-centered">
            <b-icon icon="plus" type="is-info" size="is-medium"></b-icon>
          </div>

          <div class="column">
            <figure class="image is-96x96 -center-image">
              <img src="@/assets/img/logos/02.png" />
            </figure>
          </div>
          <div class="column has-text-centered">
            <b-icon icon="plus" type="is-info" size="is-medium"></b-icon>
          </div>
          <div class="column">
            <figure class="image is-96x96 -center-image">
              <img src="@/assets/img/logos/03.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AnimatedJumbotron"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.-center-image {
  margin: 0 auto;
}
</style>
