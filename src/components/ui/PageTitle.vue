<template>
  <section class="hero is-light" :class="heroClass">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-3-touch">
          {{ title }}
        </h1>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: String,
    heroClass: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
