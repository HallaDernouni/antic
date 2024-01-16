<template>
  <div class="room">
    <v-container fluid>
      <v-card-title>
        <h2 class="title">Find your room</h2>
      </v-card-title>
      <Slide />
    </v-container>
  </div>
</template>

<script>
import Slide from "./comp/Slide.vue";
export default {
  components: {
    Slide
  }
};
</script>

<style>
</style>
<style scoped>
.room {
  background: rgba(243, 238, 232, 1);
}
@media only screen and (min-width: 768px) {
  .room {
    padding: 0px 50px 0px 150px;
  }
  .title {
    font-family: Merriweather;
    font-size: 55px;
    font-weight: 300;
    line-height: 60px;
    letter-spacing: -0.6000000238418579px;
    text-align: left;
    color: rgba(112, 100, 88, 1);
  }
}

@media only screen and (max-width: 768px) {
  .title {
    font-family: Merriweather;
    font-size: 35px;
    font-weight: 300;
    line-height: 60px;
    letter-spacing: -0.6000000238418579px;
    text-align: left;
    color: rgba(112, 100, 88, 1);
  }
}
</style>