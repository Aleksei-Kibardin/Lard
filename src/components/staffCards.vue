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
        class="bg-blue-lighten-5 mx-10 mt-3"
        style="max-width: 1123px; box-shadow: none"
      >
        <v-card-text>
          <div class="d-flex flex-row ml-2 mt-2">
            <div
              style="
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #2a358c;
              "
            >
              Константинопольский Константин Константинович
            </div>
            <div
              class="bg-white rounded text-grey ml-4 px-1"
              style="font-size: 13px"
            >
              ИНН 1234567890
            </div>
            <div class="bg-green rounded ml-4 px-1" style="font-size: 13px">
              СМЗ
            </div>
            <div class="px-1 ml-4" style="font-size: 14px">
              промышленный альпинист
            </div>
          </div>
          <div class="ml-2 mt-2 d-md-inline-flex">
            <v-img src="../assets/rus.png" height="20" width="20"> </v-img>
            <div class="txt-content ml-3">RU 4002 571654</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">г. Санкт-Петербург</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Дата рождения: 23.06.2001</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Возраст: 21 год</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Пол: мужской</div>
          </div>
          <div class="ml-2 mt-2">
            <p class="bg-red rounded pa-1 txt-content d-inline-flex">
              Истекают все документы
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

components: {
  searchBar;
  staffTabs;
}
</script>

<style>

.txt-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
}
</style>
