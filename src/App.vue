<template>
  <navBar />

  <Index />

  <footerSec />
</template>
<script>
import Index from './views/homeIndex.vue'
import navBar from '@/components/navBar.vue'
import footerSec from '@/components/footerSec.vue'

export default {
  name: 'App',
  components: {
    navBar,
    footerSec,
    Index
  }
}
</script>


<style>
  @import './lib/bootstrap/fonts/BootstrapFonts/bootstrap-icons.css';
  @import './lib/bootstrap/css/bootstrap.min.css';
  @import './lib/bootstrap/css/Navbar-Right-Links-icons.css';
  @import './lib/bootstrap/css/styles.min.css';
</style>