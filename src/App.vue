<template >
  <v-app class="bg-grey-lighten-4">
    <v-row class="flex-nowrap mt-10 ms-12">
      <staff-cards />
      <v-col
        cols="4"
        style="max-width: 589px; max-height: 650px"
        class="bg-white ml-8 pa-0 rounded-lg"
      >
        <form-staff></form-staff>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import staffCards from "./components/staffCards.vue";
import formStaff from "./components/formStaff.vue";

components: {
  staffCards;
  formStaff;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
.gap-30 {
  gap: 30px;
}
#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(255, 255, 255, 0);
}
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 1788px;
  background-color: #F7F8F9;
}
.v-text-field .v-input__details {
  padding-inline-start: 0px;
}
.v-field__append-inner {
  padding-top: 12px;
}
.v-field__input {
  padding-top: 8px;
}
.v-input--density-default {
  --v-input-control-height: 48px;
}
.v-input--density-default .v-field--no-label {
  --v-field-padding-bottom: 7px;
}
.v-btn {
  text-transform: none;
}
.v-chip.v-chip--size-default {
  font-weight: 400;
  font-size: 14px;
}
.v-theme--light {
  --v-theme-primary: 255, 255, 255 !important;
}
</style>
