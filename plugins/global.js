import Vue from 'vue'


import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)


import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);


import { KinesisContainer, KinesisElement } from 'vue-kinesis'
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)


import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import VueFlipcard from 'vue-flipcard'

Vue.component('vue-flipcard', VueFlipcard)