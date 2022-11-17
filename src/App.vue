<template>
  <Index />
</template>
<script>
import 'bootstrap'
import Index from './views/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
</style>

<style>
  @import './lib/bootstrap/css/Navbar-Right-Links-icons.css';
  @import './lib/bootstrap/css/styles.min.css';
</style>