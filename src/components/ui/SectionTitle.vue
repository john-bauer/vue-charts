<template>
  <div class="-section-title">
    <h4 class="title is-spaced is-size-4 is-5-touch">
      <span class="has-text-info has-margin-right-10">#</span>{{ title }}
    </h4>
    <slot></slot>
    <hr />
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
