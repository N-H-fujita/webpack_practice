import "./reactApp.jsx";
import my from "./my.js";
import '../stylesheets/main.scss';

import { createApp } from "vue";
import vueApp from './vueApp.vue';

createApp(vueApp).mount('#vue-root');

console.log("webpack!");

my();