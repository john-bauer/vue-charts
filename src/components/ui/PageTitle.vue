<template>
  <section class="hero is-light -page-title">
    <div class="hero-body" v-bind:class="backgroundClass">
      <div class="container">
        <h1 class="title">
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
    backgroundClass: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
