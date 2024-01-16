<template>
  <div class="sliders">
    <v-container>
      <v-row>
        <v-col>
          <v-row v-if="!isMobile">
            <swiper
              ref="swiperRef"
              :slides-per-view="2"
              :space-between="30"
              :navigation="navigation"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div>
                  <img :src="slide.img" alt="Slide Image" />
                </div>
              </swiper-slide>
            </swiper>

            <v-col>
              <v-row>
                <!-- Left column -->
                <v-col md="4">
                  <h3 class="title">Inspirations</h3>
                </v-col>
                <v-col md="6">
                  <p
                    class="description"
                  >Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
                </v-col>

                <!-- Right column - Subscription form -->
                <v-col md="2">
                  <v-row class="custom-navigation">
                    <v-col class="d-flex justify-center">
                      <v-col cols="auto">
                        <v-btn
                          class="swiper-button-prev pt-1"
                          density="compact"
                          icon="mdi-chevron-left pb-1 "
                          variant="outlined"
                          color="rgba(160, 96, 86, 1)"
                          @click="prevSlide"
                        ></v-btn>
                      </v-col>
                      <v-col cols="auto">
                        <v-btn
                          class="swiper-button-next pt-1"
                          density="compact"
                          icon="mdi-chevron-right pb-1 "
                          variant="outlined"
                          color="rgba(160, 96, 86, 1)"
                          @click="nextSlide"
                        ></v-btn>
                      </v-col>
                    </v-col>
                    <v-col>
                      <v-btn
                        :disabled="currentPage === totalSlides - 1"
                        variant="plain"
                        class="swiper-button-next ml-15"
                      >
                        {{ (currentPage + 1).toString().padStart(2, '0') }} /
                        {{ totalSlides.toString().padStart(2, '0') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row v-else>
            <!-- Layout for mobile devices -->
            <v-col md="12 " class="inspo">
              <h3 class="title2">Inspirations</h3>
              <p class="description2">
                Our experts are keen to stay on top of trends in order to offer
                <br />you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="isMobile">
        <v-col class="d-flex flex-column justify-center">
          <!-- First Row -->
          <v-row>
            <v-col
              v-for="(slide, index) in slides.slice(0, 2)"
              :key="index"
              class="custom-grid-item"
            >
              <img :src="slide.img" alt="Grid Image" height="200" width="150" />
              <h3>Inspirations</h3>
            </v-col>
          </v-row>

          <!-- Second Row -->
          <v-row>
            <v-col
              v-for="(slide, index) in slides.slice(2, 4)"
              :key="index"
              class="custom-grid-item"
            >
              <img :src="slide.img" alt="Grid Image" height="200" width="150" />
              <h3>Inspirations</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref, nextTick, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const modules = [Pagination, Navigation];
    const swiperRef = ref(null);
    const isMobile = computed(() => window.innerWidth < 600); // Adjust the breakpoint as needed
    const slides = [
      {
        img: require("@/assets/trend1.png")
      },
      {
        img: require("@/assets/trend2.png")
      },
      {
        img: require("@/assets/trend3.png")
      },
      {
        img: require("@/assets/trend1.png")
      },
      {
        img: require("@/assets/trend2.png")
      }
    ];

    let prevSlide = () => {
      nextTick(() => {
        if (swiperRef.value && swiperRef.value.swiper) {
          swiperRef.value.swiper.slidePrev();
        }
      });
    };

    let currentPage = ref(0);
    let totalSlides = ref(slides.length);

    let nextSlide = () => {
      nextTick(() => {
        if (swiperRef.value && swiperRef.value.swiper) {
          swiperRef.value.swiper.slideNext();
          currentPage.value = swiperRef.value.swiper.realIndex;
        }
      });
    };

    const navigation = {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    };

    return {
      modules,
      swiperRef,
      prevSlide,
      nextSlide,
      navigation,
      slides,
      currentPage,
      totalSlides,
      isMobile
    };
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .sliders {
    padding: 0px 0px 0px 30px;
  }

  .swiper-pagination {
    right: 0;
    bottom: 20px;
  }
  .custom-navigation {
    justify-content: flex-end !important;
  }

  .swiper {
    width: 100%;
    height: 100%;

    overflow: visible;
  }

  .swiper-slide {
    text-align: end;
    font-size: 18px;
    background: #fff;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  h3.title {
    font-family: Merriweather;
    font-size: 45px;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: -0.30000001192092896px;
    text-align: left;
    color: rgba(83, 75, 66, 1);
    margin-top: 20px;
  }
  p.description {
    margin-top: 20px;
    height: 100%;
    font-family: Varta;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    width: 400px;

    color: rgba(112, 100, 88, 1);
  }
}
@media only screen and (max-width: 768px) {
  h3.title2 {
    color: rgba(83, 75, 66, 1);
    font-family: Merriweather;
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.30000001192092896px;
    text-align: left;
  }
  p.description2 {
    font-family: varta;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    padding-top: 20px;
    color: rgba(112, 100, 88, 1);
  }
}
</style>
