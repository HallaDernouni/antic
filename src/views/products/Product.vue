<template>
  <div>
    <v-container fluid class="hero">
      <!-- Main content -->
      <v-col cols="12" md="12" xs="12" sm="12">
        <div class="card">
          <!-- Colored background div -->
          <div class="custumetitle">
            <v-card-title>
              <h2 class="title1">HOME DESIGN</h2>
            </v-card-title>
            <v-card-title>
              <h3 class="title2">
                Elegance for
                <br />Interiors &
                <br />Exteriors
              </h3>
            </v-card-title>
            <v-card-text>
              <h1 class="title3">We provide everyone with modern, trendy, quality furniture</h1>
            </v-card-text>

            <v-col>
              <v-btn class="button" icon="mdi-chevron-down" variant="outlined"></v-btn>
            </v-col>
          </div>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.hero {
  background: url("@/assets/Picture1.png") no-repeat right;
  background-size: 50% 150%;
  background-color: rgba(243, 238, 232, 1);
}

@media only screen and (max-width: 768px) {
  .hero {
    background: url("@/assets/Picture1.png") no-repeat center center;
    background-size: cover;
    padding: 0px 25px 0px 25px;
  }
  .card {
    padding: 160px 0px 90px 0px;
    gap: 24;
    display: flex;
    flex-direction: column;
  }
  .button {
    color: #ffffff;
    margin-left: 100px;
    margin-bottom: 100px;
  }
  h2.title1 {
    height: 20px;
    font-family: Varta;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
  h3.title2 {
    height: 120px;
    font-family: Merriweather;
    font-size: 35px;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: -0.30000001192092896px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  h1.title3 {
    width: 300px;
    height: 50px;
    font-family: Varta;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(247, 248, 249, 1);
  }
}

@media only screen and (min-width: 768px) {
  .hero {
    padding: 0px 0px 0px 150px;
  }

  .card {
    padding: 150px 0px 0px 0px;
  }

  h2.title1 {
    width: 420px;
    height: 20px;
    font-size: 15px;
    margin-bottom: 20px;
    color: #a06056;
    font-family: Varta;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
  }

  h3.title2 {
    font-family: Merriweather;
    font-size: 50px;
    font-weight: 300;
    line-height: 70px;
    letter-spacing: -0.4000000059604645px;
    text-align: left;

    color: #a06056;
  }

  h1.title3 {
    width: 350px;
    height: 62px;
    color: #706458e5;
    font-family: Varta;
    font-size: 22px;
    font-weight: 300;
    line-height: 31px;
    letter-spacing: 0px;
    text-align: left;
  }

  .button {
    color: rgba(160, 96, 86, 1);
    margin-left: 130px;
    padding: 20px, 17px, 20px, 17px;
    width: 50px;
    height: 50px;
  }
}
</style>
