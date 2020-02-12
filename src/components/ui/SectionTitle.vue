<template>
  <div class="-section-title">
    <h1 class="title is-4 is-5-touch">
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
