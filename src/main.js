import { createApp } from 'vue'
import jQuery from 'jquery'
import App from '@/App.vue'
import '@/lib/bootstrap/fonts/BootstrapFonts/bootstrap-icons.css';
import '@/lib/bootstrap/css/bootstrap.min.css';
import '@/lib/bootstrap/css/Navbar-Right-Links-icons.css';
import '@/lib/bootstrap/css/styles.min.css';
import router from '@/router/index'
window.$ = window.jQuery = jQuery
createApp(App).use(router).mount('#app')