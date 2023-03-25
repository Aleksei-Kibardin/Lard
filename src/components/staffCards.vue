<template>
  <v-col
    cols="8"
    style=" min-height: 1202px"
    class="bg-white pa-0"
  >
    <div>
      <v-input class="flex-column px-7 pt-7">
        <v-text-field
          @keydown:enter="searchCard"
          v-model="search"
          append-inner-icon="mdi-magnify"
          bg-color="#E8F1F4"
          placeholder="Поиск сотрудника"
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
      <div class="d-flex tabs mt-2">
        <v-chip-group multiple class="text-primar">
          <v-chip
            @click="staffFilter = getList"
            class="rounded-pill"
            :style="`border: 1px solid #B0BCC7; color: #B0BCC7;`"
          >
            Весь список
          </v-chip>
          <v-chip
            v-for="i in tagList"
            :class="{ 'text-white' : chipActive}"
            :key="(i.title, i.color)"
            @click="next(i.title) & filteredTabs()"
            :style="`border: 1px solid ${i.color}; color: ${i.color};`"
          >
            {{ i.title }}
          </v-chip>
        </v-chip-group>
      </div>
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
              {{ t.type_contract.slug }}
            </div>
            <div class="px-1 ml-4" style="font-size: 14px">
              {{ t.position.name }}
            </div>
          </div>
          <div class="ml-2 mt-2 d-md-inline-flex">
            <v-img :src="`${t.country.icon}`" height="20" width="20"> </v-img>
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
            <p
              class="rounded pa-1 txt-content d-inline-flex"
              :style="`background-color: ${t.status.color}`"
            >
              {{ t.status.description }}
            </p>
          </div>
        </v-card-text>
      </v-card>
      <v-row class="d-flex justify-center mt-5">
        <v-btn
          v-if="active === true"
          @click="cardsView() & activeBtn()"
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
  <v-col cols="4" class="bg-white ml-8 pa-0 rounded-lg">
    <form-staff @filter-list="filter" @post-card="obj" :staffFilter="staffFilter" />
  </v-col>
</template>

<script setup>
import * as _ from "lodash";
import { getList, tagList } from "../services.js";
import { computed, ref } from "vue";
import formStaff from "./formStaff.vue";

components: {
  formStaff;
}

const maxCards = ref(4);
const search = ref("");
const tags = ref([]);
let staffFilter = ref([]);
let active = ref(true)

let obj = ref({});
let countrys = "";
let gender = "";
let contract = "";
let position = "";

const searchCard = computed(() => {
  return (staffFilter.value = getList.filter((j) =>
    j.full_name.includes(search.value)
  ));
});

const activeBtn = ()=>{
  if(maxCards.value > staffFilter.value.length){
    active = false
  }else{

  }
}

const next = (i) => {
  if (tags.value.length === 0 || !tags.value.includes(i)) {
    tags.value.push(i);
  } else {
    let j = tags.value.indexOf(i);
    tags.value.splice(j, 1);
  }
};



// const filters = (k, obj, value, j) => {
//   if (j === name) {
//     _.find(obj, (i) => {
//       if (i.name === `${value}`) {
//         console.log(i);
//         return i;
//       }
//     });
//   } else if (j === slug) {
//     _.find(obj, (i) => {
//       if (i.slug === `${value}`) {
//         console.log(i);
//         return i;
//       }
//     });
//   } else {
//     _.find(obj, (i) => {
//       if (i.title === `${value}`) {
//         console.log(i);
//         return i;
//       }
//     });
//   }
// };

const searchPosition = () => {
  return (staffFilter.value = staffFilter.value.filter((j) =>
    j.position.name.includes(position)
  ));
};

const searchContract = () => {
  return (staffFilter.value = staffFilter.value.filter((j) =>
    j.type_contract.slug.includes(contract)
  ));
};

const searchGender = () => {
  return (staffFilter.value = staffFilter.value.filter((j) =>
    j.gender.title.includes(gender)
  ));
};
const searchCountry = () => {
  return (staffFilter.value = staffFilter.value.filter((j) =>
    j.country.title.includes(countrys)
  ));
};

const filter = (i) => {
  let k = [];
  i.forEach((n) => {
    if (Object.values(n)[0] !== "") {
      let j = i.indexOf(n);
      k.push(n);
    }
  });
  return (
    k.forEach((j) => {
    if (j.countryTitle) {
      countrys = j.countryTitle;
      searchCountry();
    } else if (j.genderTitle) {
      gender = j.genderTitle;
      searchGender();
    } else if (j.name) {
      position = j.name;
      searchPosition();
    } else if (j.slug) {
      contract = j.slug;
      searchContract();
    }
    console.log(staffFilter.value);
  })
  )
};
const nextList = computed(()=>{
  return staffFilter.value = getList
})

const filteredTabs = () => {
  let staff = [];
  let k;
  if (tags.value.length > 0) {
    tags.value.forEach((i) => {
      k = getList.filter((j) => j.status.title.includes(i));
      staff.push(k);
    });
  } else {
    staff = getList.filter((j) => j.status.title.includes(tags.value));
  }
  return (staffFilter.value = staff.flat());
};

const paginatedCards = computed(() => {
  return staffFilter.value.slice(0, maxCards.value);
});

const cardsView = () => {
  maxCards.value += 4;
  console.log(getList);
};
</script>

<style>
.txt-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
}
h1 {
  font-size: 26px;
}
.sub-txt {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
}

.v-checkbox {
  height: 30px;
  margin-left: -10px;
}
</style>
