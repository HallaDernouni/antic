import { createApp } from 'vue';
import App from './App.vue';

import router from './router';


import Vuetify from './plugins/vuetify'; 
import 'vuetify/dist/vuetify.css';


// main.js
import 'typeface-varta'
import 'typeface-merriweather'
import 'typeface-karla'
// import swiper module styles
import 'swiper/css'






const app = createApp(App);

app
  .use(router)

  .use(Vuetify) 
 
  .mount('#app');
