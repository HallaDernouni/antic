<template>
  <div class="services">
    <v-container fluid>
      <v-col cols="12" md="12" xs="12" sm="12">
  
    <v-row>
    
      <!-- Left column -->
      <v-col cols="12"  md="6"  >
        <v-card-title>
          <h3 class="title">We stay by your <br>side to design  <br>your projects</h3>
        </v-card-title>
        <div class=" d-flex pt-5">          
          <h6 class="title2">Find out more</h6>
          <v-icon icon="mdi-chevron-right" color="var(--Terracotta, #A06056)"></v-icon>
        </div>
      </v-col>

      <!-- Right columns -->
      <v-col cols="12" md="3" sm="5">
        <v-card class="cards">
          <v-card-text class="text">
            <h3 class="subtitle">Our Advices</h3>
            What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.
          </v-card-text>
        </v-card>

        <v-card class="cards">
          <v-card-text class="text">
            <h3 class="subtitle">Conception Service</h3>
            Personalized service with an expert advisor for your interior and exterior decoration or layout projects.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" sm="5">
        <v-card class="cards">
          <v-card-text class="text">
            <h3 class="subtitle">Click and Collect</h3>
            Adapted and contactless. Free from € 200 of purchases in stores offering the service.
          </v-card-text>
        </v-card>

        <v-card class="cards">
          <v-card-text class="text">
            <h3 class="subtitle">Installation Service</h3>
            Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.
          </v-card-text>
        </v-card>
      </v-col>
      
    </v-row>

  
</v-col></v-container>
</div>
</template>

<style scoped>
.services {
  width: 100%;
  height: auto;
  background: #F3EEE8;
   /* top right bottom left */
}


.cards {
  background-color: #F3EEE8;
  width: 258.5px;
  height: 167px;
  box-shadow: none;
}

@media only screen and (max-width: 768px){

  .text {
  color: var(--Brown-Light, rgba(112, 100, 88, 0.90));
  font-family: Varta;
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0px;
text-align: left;
}

.title {
  font-family: Merriweather;
font-size: 35px;
font-weight: 400;
line-height: 40px;
letter-spacing: -0.30000001192092896px;
text-align: left;
width: 311px;
height: 120px;
color:rgba(83, 75, 66, 1);
}
.title2 {
  color: var(--Terracotta, #A06056);
  font-family: Lato;
font-size: 17px;
font-weight: 900;
line-height: 25px;
letter-spacing: 0.30000001192092896px;
text-align: left;


}

.subtitle {
  height: 30px;
 
  width: 311px;
height: 30px;
color: rgba(160, 96, 86, 1);
  font-family: Varta;
font-size: 25px;
font-weight: 600;
line-height: 30px;
letter-spacing: -0.20000000298023224px;
text-align: left;

}

}


@media screen and (min-width: 768px) {
 .services{
  padding: 0px 150px 0px 150px;
 }
h3.title {
  height: auto; /* Change height to auto for responsiveness */
  width: 188px; /* Make title fill the container */
  color: rgba(112, 100, 88, 1);
  font-family: Merriweather;
font-size: 55px;
font-weight: 300;
line-height: 60px;
letter-spacing: -0.6000000238418579px;
text-align: left;
}

.title2 {
  color: var(--Terracotta, #A06056);
  font-size: 14px;
  margin-left: 20px;
  letter-spacing: 0.3px;
}

.card-text-container {
  display: flex;
  
  font-family: Karla;
font-size: 17px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0.30000001192092896px;
text-align: left;
width: 137px;
height: 25px;

}

.subtitle {
  height: 30px;
 
  font-family: Varta;
  color: #A06056;
  font-size: 25px;
  font-weight: 600;
  line-height: -0.2px;
  word-wrap: break-word;
}

.text {
  color: var(--Brown-Light, rgba(112, 100, 88, 0.90));
  font-family: Varta;
  font-size: 18px;
  line-height: 25px;
  text-align: left;
  width: 285.5px;
}

.title {
  width: 458px;
height: 188px;

  font-family: Merriweather;
font-size: 55px;
font-weight: 300;
line-height: 60px;
letter-spacing: -0.6000000238418579px;
text-align: left;
  
}

}
</style>
