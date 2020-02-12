<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="has-text-weight-bold has-text-black"
      >
        📈 Vue Charts
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ name: 'How It Works' }">
        How It Works
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Chart Types' }">
        Chart Types
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
