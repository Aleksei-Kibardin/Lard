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
              <v-text-field v-model="stack.age" label="возраст" ></v-text-field>
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
          @click=" $emit('addCards', save()) & (dialog = false) & reset()"
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
  getList,
  // postData,
  tagList,
  countriesList,
  gendersList,
  positionsList,
  types_contractList,
} from "../services.js";

let post = true
let dialog = ref(false);
const stack = ref({
  full_name: null,
  series: null,
  number: null,
  inn: null,
  address: null,
  date_birth: null,
  age: null,
  type_contract: {
    id: null,
    title: null,
    slug: null,
  },
  gender: {
    id: null,
    title: null,
    slug: null,
  },
  country: {
    id: null,
    title: null,
    slug: null,
    icon: null,
  },
  position: {
    id: null,
    name: null,
  },
  status: {
    id: null,
    color: null,
    title: null,
    description: null
  },
});
const clone = _.cloneDeep(stack.value)

let json;

const reset = ()=>{
  stack.value = clone
}

const autocomplete = (k, obj, value, j) => {
  if (j === name) {
      _.find(obj, (i) => {
    if (i.name === `${value}` || i.name !== null || i.name !== "") {
      console.log(i)
      return _.assign(k, i)
    }else post = false
  })
  }else{
    _.find(obj, (i) => {
    if (i.title === `${value}` || i.title !== null || i.title !== "") {
      console.log(i)
      return _.assign(k, i)
    }else  post = false
  })
  }

 
  return k
};

const title = 'title'
const name = _.cloneDeep(stack.value);  


const save = () => {
  autocomplete(stack.value.country, countriesList, stack.value.country.title, title);
  autocomplete(stack.value.type_contract, types_contractList, stack.value.type_contract.title, title);
  autocomplete(stack.value.gender, gendersList, stack.value.gender.title, title);
  autocomplete(stack.value.position, positionsList, stack.value.position.name, name);
  autocomplete(stack.value.status, tagList, stack.value.status.title ,title);

  _.forEach(stack.value, (o)=>{if (o === null || o === "" || o.description === null ||  o.description === "") {
    return json = false
  }else{
    return json = _.cloneDeep(stack.value)
  }})

  
if (json !== false && post !== false){
    console.log(post)
  // postData(json);
  getList.unshift(json)
  reset()
}
console.log(post)
  console.log(json)
  return json
  
};
</script>
