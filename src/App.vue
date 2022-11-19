<template>
  <navBar />
  <RouterView></RouterView>
  <footerSec />
</template>
<script>
import navBar from '@/components/navBar.vue'
import footerSec from '@/components/footerSec.vue'
import router from '@/router/index'

export default {
  name: 'App',
  router,
  components: {
    navBar,
    footerSec
  }
}
</script>


<style>
  @import './lib/bootstrap/fonts/BootstrapFonts/bootstrap-icons.css';
  @import './lib/bootstrap/css/bootstrap.min.css';
  @import './lib/bootstrap/css/Navbar-Right-Links-icons.css';
  @import './lib/bootstrap/css/styles.min.css';
</style>