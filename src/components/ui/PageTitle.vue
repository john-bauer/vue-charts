<template>
  <section class="hero is-light" :class="heroClass">
    <div class="hero-body">
      <div class="container">
        <h3 class="title is-size-3 is-size-4-touch has-padding-bottom-10">
          {{ title }}
        </h3>
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
