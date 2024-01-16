<template>
  <v-app id="app">
    <Headers />
    <product />
    <Rooms />
    <Services />
    <Inspiration />
    <Footers />
  </v-app>
</template>

<script>
import Headers from "../components/Headers.vue";
import Footers from "../components/Footers.vue";
import product from "./products/Product.vue";
import Rooms from "./rooms/Index.vue";
import Services from "./services/services.vue";
import Inspiration from "./inspiration/index.vue";

export default {
  components: {
    Headers,
    Rooms,
    Footers,
    product,
    Services,
    Inspiration
  }
};
</script>

