<template>
  <fragment>
    <Navbar />
    <Header />
    <Services />
  </fragment>
</template>

<style >
#particles-js canvas {
  display: block;
  /* vertical-align: bottom; */
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: opacity 0.8s ease, -webkit-transform 1.4s ease;
  transition: opacity 0.8s ease, transform 1.4s ease;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
}
</style>

<script>
import Navbar from "~/components/Navbar.vue";
import Header from "~/components/Header.vue";
import Services from "~/components/Services.vue";

export default {
  components: {
    Navbar,
    Header,
    Services
  }
};
</script>
