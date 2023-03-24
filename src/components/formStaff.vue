<template>
  <div>
    <v-row justify="center">
      <form-modal/>
    </v-row>
    <v-divider></v-divider>
    <div>
      <form class="mt-5 mx-8">
        <div class="text-h5 mb-5">Фильтр</div>
        <v-row>
          <v-col>
            <div class="sub-txt mb-2">гражданство</div>
            <v-select
              v-model="country.countryTitle"
              :items="['Россия', 'Узбекистан', 'Таджикистан']"
              class="pb-1"
              label="Все страны"
              bg-color="#E8F1F4"
              variant="outlined"
              return-object
            ></v-select>
          </v-col>
          <v-col>
            <div class="sub-txt mb-2">Пол</div>
            <v-select
              v-model="gender.genderTitle"
              :items="['мужской', 'женский']"
              class="pb-1"
              label="Без разницы"
              bg-color="#E8F1F4"
              variant="outlined"
              return-object
            ></v-select>
          </v-col>
        </v-row>
        <div class="sub-txt mb-2">Должность</div>
        <v-select
          label="Все должности"
          v-model="position.name"
          :items="['промышленный альпинист', 'менеджер по продажам']"
          class="pb-1"
          bg-color="#E8F1F4"
          variant="outlined"
          return-object
        ></v-select>
        <div class="sub-txt mt-n3">Тип договора</div>
        <div>
          <v-checkbox
            v-model="type_contract.slug"
            value="ТД"
            label="ТД"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="type_contract.slug"
            value="ГПХ"
            label="ГПХ"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="type_contract.slug"
            value="СМЗ"
            label="СМЗ"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="type_contract.slug"
            value="Кандидат"
            label="Кандидат"
            hide-details
          ></v-checkbox>
        </div>
        <v-divider class="mt-3"></v-divider>
        <v-row class="mt-6 d-flex justify-space-evenly">
          <v-btn
            @click="$emit('filterList', filterList)"
            variant="text"
            class="bg-green"
            width="253.5"
            height="46"
          >
            Применить
          </v-btn>
          <v-btn
            @click="$emit('resetFiltr', reset())"
            variant="text"
            class="bg-grey"
            width="253.5"
            height="46"
          >
            Отчистить
          </v-btn>
        </v-row>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalForm from "./modalForm.vue";

let country = ref({ countryTitle: "" });

let gender = ref({ genderTitle: "" });

let type_contract = ref({ slug: "" });

let position = ref({ name: "" });

const filterList = [];

const emit = defineEmits(["inFocus", "filterList"], ["inFocus", "resetFiltr"]);

filterList.push(country.value);
filterList.push(gender.value);
filterList.push(type_contract.value);
filterList.push(position.value);

const reset = () => {
  let j = filterList.length;
  filterList.slice(0, j);
  country.value.countryTitle = "";
  gender.value.genderTitle = "";
  type_contract.value.slug = "";
  position.value.name = "";
};

// const addFilter = () => {
//   filterList.forEach((i)=>{
//     console.log(Object.values(i)[0] === "")
//     if (Object.values(i)[0] === "") {
//       let j = filterList.indexOf(i);
//       filterList.value.splice(j, 1);
//     }
//   })
// };
</script>
