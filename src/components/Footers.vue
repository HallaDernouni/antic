<template>
  <v-footer class="d-flex flex-column footer fluid">
    <div class="footer-content">
      <div class="row">
        <div class="footer-section">
          <h4 class="title">antic</h4>
        </div>

        <div class="footer-section">
          <h4 class="column">Products</h4>
          <span class="text-caption">Furniture</span>
          <br />
          <span class="text-caption">Decoration</span>
          <br />
          <span class="text-caption">Storage</span>
          <br />
          <span class="text-caption">Baby and child</span>
          <br />
          <span class="text-caption">Connected home</span>
          <br />
        </div>

        <div class="footer-section">
          <h4 class="column">Rooms</h4>
          <span class="text-caption">Living room</span>
          <br />
          <span class="text-caption">Dining room</span>
          <br />
          <span class="text-caption">Cooked</span>
          <br />
          <span class="text-caption">Bedroom</span>
          <br />
          <span class="text-caption">Bathroom</span>
          <br />
          <span class="text-caption">Office</span>
          <br />
          <span class="text-caption">Laundry</span>
          <br />
        </div>

        <div class="footer-section">
          <h4 class="column">Services</h4>
          <span class="text-caption">Click and collect</span>
          <br />
          <span class="text-caption">Conception</span>
          <br />
          <span class="text-caption">Installation</span>
          <br />
          <span class="text-caption">Advices</span>
          <br />
          <span class="text-caption">Gift card</span>
          <br />
        </div>

        <div class="footer-section">
          <h4 class="column">About</h4>
          <span class="text-caption">Our story</span>
          <br />
          <span class="text-caption">Our stores</span>
          <br />
          <span class="text-caption">Our partners</span>
          <br />
        </div>

        <div class="footer-section">
          <h4 class="column mb-5">We respect our planet</h4>
          <v-img src="@/assets/foot.png" width="250" />
          <p
            class="text-caption"
          >We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.</p>
          <v-btn variant="text" class="btn mr-8">
            Learn more
            <v-icon>
              <v-img src="@/assets/icons/svg/Chevron-Right.svg"></v-img>
            </v-icon>
          </v-btn>
        </div>
      </div>

      <!-- Social Icons Row -->
      <div class="footer-section bgTop text-center w-100" color="rgba(112, 100, 88, 0.9)">
        <v-icon class="mr-1">
          <v-img src="@/assets/icons/svg/Facebook.svg"></v-img>
        </v-icon>
        <v-icon class="mr-1">
          <v-img src="@/assets/icons/svg/Twitter.svg"></v-img>
        </v-icon>
        <v-icon class="mr-1">
          <v-img src="@/assets/icons/svg/Instagram.svg"></v-img>
        </v-icon>
        <v-icon class="mr-1">
          <v-img src="@/assets/icons/svg/Linkedin.svg"></v-img>
        </v-icon>
      </div>

      <div class="footer-section">
        <div class="row">
          <div class="footer-section">
            <v-icon class="copyright">mdi mdi-copyright</v-icon>
            <strong>Copyright 2024 Agence Dnd</strong>
          </div>
          <v-spacer></v-spacer>
          <div class="footer-section text-right">
            <v-row class="pl-15">
              <h4 class="pr-2 privacy">Privacy policy</h4>
              <h4 class="pr-2 pl-2 privacy">Term of service</h4>
              <h4 class="pl-2 privacy">Language</h4>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: rgba(243, 238, 232, 1);
  position: relative;
  width: 100%;
  padding: 70px 150px 64px 150px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  gap: 20px;
}

.footer-section {
  color: rgba(112, 100, 88, 0.7);
  flex: 1;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-family: Merriweather;
  font-size: 34px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
  text-align: left;
  color: rgba(83, 75, 66, 1);
}

.text-caption {
  font-family: Varta;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(112, 100, 88, 1);
}
.column {
  font-family: Varta;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: rgba(83, 75, 66, 1);
}
.btn {
  font-family: Karla;
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  justify-content: left;
  color: rgba(160, 96, 86, 1);
}

.privacy {
  font-family: Varta;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(112, 100, 88, 0.7);
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 30px 10px 44px 10px;
  }

  .row {
    flex-direction: column;
  }

  .title {
    align-items: stretch;
    align-self: center;
    text-align: center;
  }
  .footer-section {
    gap: 24px;
  }
  .footer-content {
    padding: 25px;
  }
}
</style>
