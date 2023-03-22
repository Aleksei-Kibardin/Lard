<template>
  <v-col
    cols="8"
    style="max-width: 1205px; min-height: 1202px"
    class="bg-white pa-0"
  >
    <search-bar />
    <div class="mx-10 mt-7">
      <h1>Список сотрудников</h1>
      <staff-tabs />
    </div>

    <div>
      <v-card
        v-for="t in staffList"
        :key="
          (t.full_name,
          t.inn,
          t.series,
          t.number,
          t.date_birth,
          t.age,
          t.type_contract,
          t.position,
          t.status,
          t.address,
          t.gender,
          t.country)
        "
        class="bg-blue-lighten-5 mx-10 mt-3"
        style="max-width: 1123px; box-shadow: none"
      >
        <v-card-text>
          <div class="d-flex flex-row ml-2 mt-2">
            <div
              style=" font-weight: 600, font-size: 18px, line-height: 120%, color: #2a358c;">
              {{ t.full_name }}
            </div>
            <div
              class="bg-white rounded text-grey ml-4 px-1"
              style="font-size: 13px"
            >
              ИНН {{ t.inn }}
            </div>
            <div class="bg-green rounded ml-4 px-1" style="font-size: 13px">
              {{ t.type_contract.title }}
            </div>
            <div class="px-1 ml-4" style="font-size: 14px">
              {{t.position.name}}
            </div>
          </div>
          <div class="ml-2 mt-2 d-md-inline-flex">
            <v-img :src="t.country.icon" height="20" width="20"> </v-img>
            <div class="txt-content ml-3">{{t.country.slug}} {{t.series}} {{t.number}}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">г. {{ t.address }}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Дата рождения: {{t.date_birth}}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Возраст: {{t.age}}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Пол: {{t.gender.title}}</div>
          </div>
          <div class="ml-2 mt-2">
            <p class="bg-red rounded pa-1 txt-content d-inline-flex">
              {{t.status.description}}
            </p>
          </div>
        </v-card-text>
      </v-card>
      <v-row class="d-flex justify-center mt-5">
        <v-btn
          prepend-icon="mdi-autorenew"
          variant="outlined"
          width="186"
          height="46"
          color="#2A358C"
        >
          Показать еще
        </v-btn>
      </v-row>
    </div>
  </v-col>
</template>

<script setup>
import searchBar from "./search.vue";
import staffTabs from "./staffTabs.vue";
import { getList  } from "../services.js";
import {ref} from "vue"

components: {
  searchBar;
  staffTabs;
}

const staffList = ref(getList)


console.log(staffList)
</script>

<style>
.txt-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
}
</style>
