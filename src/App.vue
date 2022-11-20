<template>
  <navBar />
  <div id="routerview">
    <RouterView></RouterView>
  </div>
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
#routerview {
  min-height: calc(100vh - 12em)
}
</style>


<style>
  @import './lib/bootstrap/fonts/BootstrapFonts/bootstrap-icons.css';
  @import './lib/bootstrap/css/bootstrap.min.css';
  @import './lib/bootstrap/css/Navbar-Right-Links-icons.css';
  @import './lib/bootstrap/css/styles.min.css';
</style>