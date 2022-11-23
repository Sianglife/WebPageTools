import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons'
import jQuery from 'jquery'
import 'mdb-ui-kit'
import App from '@/App.vue'
import '@/lib/bootstrap/fonts/BootstrapFonts/bootstrap-icons.css';
import '@/lib/bootstrap/css/bootstrap.min.css';
import '@/lib/bootstrap/css/Navbar-Right-Links-icons.css';
import '@/lib/bootstrap/css/styles.min.css';
import router from '@/router/index'
window.$ = window.jQuery = jQuery
createApp(App).use(router).mount('#app')