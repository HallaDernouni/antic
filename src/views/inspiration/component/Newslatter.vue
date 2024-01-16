<template>
  <div class="newsletter">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card-title>
            <h2 class="title1">Be aware of the latest trends</h2>
          </v-card-title>
          <v-card-text>
            <p class="title2">Stay informed of new trends, but also of our various offers.</p>
            <v-btn variant="plain" class="title3 left">
              Learn more
              <v-icon>
                <v-img src="@/assets/icons/svg/Chevron-Right.svg"></v-img>
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>

        <!-- Right column - Subscription form -->
        <v-col>
          <div class="subscribe">
            <v-text-field
              placeholder="Enter your email here"
              elevation="0"
              class="custom-text-field"
            ></v-text-field>
            <v-btn
              class="btn text-none"
              color="rgba(83, 75, 66, 1)"
              height="55"
              variant="flat"
              rounded="0"
              elevation="0"
              @click="subscribe"
            >Subscribe Now</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    subscribe() {
      // Add your subscribe logic here
      console.log("Subscribed with email:", this.email);
    }
  }
};
</script>
  
<style scoped>
.newslatter {
  background-color: rgba(255, 255, 255, 1);
}

.custom-text-field {
  min-height: auto !important;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(83, 75, 66, 1);
}

@media only screen and (max-width: 768px) {
  .title1 {
    font-family: Merriweather;
    font-size: 35px;
    font-weight: 300;
    line-height: 40px;
    width: 200px;
    height: 80px;
    color: rgba(18, 18, 18, 1);
  }

  .title2 {
    font-family: Varta;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    width: 290px;
    height: 50px;
    color: rgba(112, 100, 88, 0.9);
  }

  .title3 {
    color: rgba(160, 96, 86, 1);
    font-family: Karla;
    font-size: 17px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
  }

  .custom-text-field {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(83, 75, 66, 1);
  }

  .subscribe {
    display: inline;
  }

  .btn {
    width: 300px;
  }
}

@media only screen and (min-width: 768px) {
  .custom-text-field {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(83, 75, 66, 1);
  }

  .title1 {
    font-family: Merriweather;
    font-size: 35px;
    font-weight: 300;

    color: rgba(18, 18, 18, 1);
  }

  .title2 {
    font-family: Varta;
    font-size: 18px;
    font-weight: 400;

    text-align: left;
    color: rgba(112, 100, 88, 0.9);
  }

  .title3 {
    color: rgba(160, 96, 86, 1);
    font-family: Karla;
    font-size: 17px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.3px;
    text-align: left;
  }

  .subscribe {
    display: flex;
    margin-top: 60px;
  }
}
</style>
  