<template>
  <v-col
    cols="8"
    style="max-width: 1205px; min-height: 1202px"
    class="bg-white pa-0"
  >
    <div>
      <v-input class="flex-column px-7 pt-7">
        <v-text-field
          @keydown.enter="searchCard"
          v-model="search"
          append-inner-icon="mdi-magnify"
          bg-color="#E8F1F4"
          placeholder="Поиск сотрудника"
          @input="inputSearch"
          persistent-hint
          hint="Например: Иванов Иван"
          type="text"
          variant="outlined"
        >
        </v-text-field>
      </v-input>
      <v-divider class="mt-3"></v-divider>
    </div>
    <div class="mx-10 mt-7">
      <h1>Список сотрудников</h1>
      <staff-tabs />
    </div>

    <div>
      <v-card
        v-for="t in paginatedCards"
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
              style=" font-weight: 600, font-size: 18px, line-height: 120%, color: #2a358c;"
            >
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
              {{ t.position.name }}
            </div>
          </div>
          <div class="ml-2 mt-2 d-md-inline-flex">
            <v-img :src="t.country.icon" height="20" width="20"> </v-img>
            <div class="txt-content ml-3">
              {{ t.country.slug }} {{ t.series }} {{ t.number }}
            </div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">г. {{ t.address }}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">
              Дата рождения: {{ t.date_birth }}
            </div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Возраст: {{ t.age }}</div>
            <v-divider class="ml-3" vertical></v-divider>
            <div class="txt-content ml-3">Пол: {{ t.gender.title }}</div>
          </div>
          <div class="ml-2 mt-2">
            <p class="bg-red rounded pa-1 txt-content d-inline-flex">
              {{ t.status.description }}
            </p>
          </div>
        </v-card-text>
      </v-card>
      <v-row class="d-flex justify-center mt-5">
        <v-btn
          @click="cardsView()"
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
import staffTabs from "./staffTabs.vue";
import { getList } from "../services.js";
import { computed, ref } from "vue";

components: {
  staffTabs;
}

let maxCards = ref(4);

let search = ref("");

let staffList = () => {
  return getList;
};


const searchCard = computed(() => {
  return staffList().filter((j) => j.full_name.includes(search.value));
});

const paginatedCards = computed(() => {
  return searchCard.value.slice(0, maxCards.value);
});

const cardsView = () => {
  maxCards.value += 4;
};

</script>

<style>
.txt-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
}
</style>
