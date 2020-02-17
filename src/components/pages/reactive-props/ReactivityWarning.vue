<template>
  <div class="-reactivity-warning">
    <b-notification
      type="is-warning"
      has-icon
      aria-close-label="Close notification"
      role="alert"
    >
      The
      <a href="https://vue-chartjs.org/guide/#events"
        >vue-chartjs documentation</a
      >
      notes that: "The reactivity system at its current state is not robust. You
      will run into several problems with it because there are many use-cases
      and ways to pass in your data." I've run into several issues first-hand,
      so use this feature with caution.
    </b-notification>
  </div>
</template>

<script>
export default {
  name: "ReactivityWarning"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
