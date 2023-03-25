<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn
        class="bg-light-blue-lighten-2 ma-8 text-white"
        height="64"
        width="527"
        v-bind="props"
      >
        <v-icon
          size="x-large"
          icon="mdi-account-plus-outline"
          class="mr-3"
        ></v-icon>
        Добавить нового сотрудника
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Профиль сотрудника</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="stack.full_name"
                label="Фамилия Имя Отчество"
              ></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col>
              <v-text-field
                :mask="'####-##'"
                v-model="stack.date_birth"
                sm="6"
                md="4"
                label="Дата Рождения"
              ></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="stack.age" label="возраст"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="stack.address"
                label="Город"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="stack.country.title"
                clearable
                :items="['Россия', 'Узбекистан', 'Таджикистан']"
              ></v-select>
            </v-col>
            <v-divider></v-divider>
            <v-col>
              <v-text-field
                v-model="stack.series"
                label="Серия паспорта"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="stack.number"
                label="Номер паспорта"
              ></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" sm="6" md="4">
              <div class="text-caption">Должность</div>
              <v-select
                v-model="stack.position.name"
                clearable
                :items="['промышленный альпинист', 'менеджер по продажам']"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="text-caption">Вид договора</div>
              <v-select
                v-model="stack.type_contract.title"
                clearable
                :items="[
                  'Трудовой договор',
                  'Самозанятый',
                  'Гражданско-правового характера',
                  'Кандидат',
                ]"
              ></v-select>
            </v-col>
            <v-col>
              <div class="text-caption">Пол</div>
              <v-select
                v-model="stack.gender.title"
                clearable
                :items="['мужской', 'женский']"
              ></v-select>
            </v-col>
            <v-divider></v-divider>
            <v-col>
              <v-text-field
                v-model="stack.inn"
                label="ИНН*"
                required
              ></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
              <div class="text-caption">Статус</div>
              <v-select
                v-model="stack.status.title"
                clearable
                :items="[
                  'Выполнено',
                  'Есть замечания',
                  'Проблемные',
                  'Критические',
                ]"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
               v-model="stack.status.description"
                label="Описание статуса"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*Заполните все поля</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="(dialog = false), save()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import * as _ from "lodash";
import { ref } from "vue";
import {
  postData,
  tagList,
  countriesList,
  gendersList,
  positionsList,
  types_contractList,
} from "../services.js";

let dialog = ref(false);
const stack = ref({
  full_name: "",
  series: "",
  number: "",
  inn: "",
  address: "",
  date_birth: "",
  age: "",
  type_contract: {
    id: "",
    title: "",
    slug: "",
  },
  gender: {
    id: "",
    title: "",
    slug: "",
  },
  country: {
    id: "",
    title: "",
    slug: "",
    icon: "",
  },
  position: {
    id: "",
    name: "",
  },
  status: {
    id: "",
    color: "",
    title: "",
    description: ""
  },
});

const autocomplete = (k, obj, value, j) => {
  if (j === name) {
      _.find(obj, (i) => {
    if (i.name === `${value}`) {
      console.log(i)
      return _.assign(k, i)
    }
  })
  }else{
    _.find(obj, (i) => {
    if (i.title === `${value}`) {
      console.log(i)
      return _.assign(k, i)
    }
  })
  }

 
  return k
};

const title = 'title'
const name = 'name'

const save = () => {
  autocomplete(stack.value.country, countriesList, stack.value.country.title, title);
  autocomplete(stack.value.type_contract, types_contractList, stack.value.type_contract.title, title);
  autocomplete(stack.value.gender, gendersList, stack.value.gender.title, title);
  autocomplete(stack.value.position, positionsList, stack.value.position.name, name);
  autocomplete(stack.value.status, tagList, stack.value.status.title ,title);
  const json = JSON.stringify(stack.value);
  console.log(json)
  postData(json);
};
</script>
