<template>
  <div>
    <v-row justify="center">
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
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Фамилия*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Имя"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Отчество*"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                        <v-text-field
                          v-model="date"
                          v-mask="'##-##-####'"
                          label="Дата Рождения"
                        ></v-text-field>
                        <v-text-field
                          v-model="pas"
                          v-mask="'####-######'"
                          label="Серия Номер паспорта"
                        ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="ИНН*" required></v-text-field>
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
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-divider></v-divider>
    <div>
      <form class="mt-5 mx-8">
        <div class="text-h5 mb-5">Фильтр</div>
        <v-row>
          <v-col>
            <div class="sub-txt mb-2">гражданство</div>
            <v-autocomplete
              label="Все страны"
              bg-color="#E8F1F4"
              variant="outlined"
              return-object
              single-line
            ></v-autocomplete>
          </v-col>
          <v-col>
            <div class="sub-txt mb-2">Пол</div>
            <v-autocomplete
              class="pb-1"
              label="Без разницы"
              bg-color="#E8F1F4"
              variant="outlined"
              return-object
              single-line
            ></v-autocomplete>
          </v-col>
        </v-row>
        <div class="sub-txt mb-2">Должность</div>
        <v-autocomplete
          class="pb-1"
          label="Все должности"
          bg-color="#E8F1F4"
          variant="outlined"
          return-object
          single-line
        ></v-autocomplete>
        <div class="sub-txt mt-n3">Тип договора</div>
        <div>
          <v-checkbox label="ТД" hide-details></v-checkbox>
          <v-checkbox label="ГПХ" hide-details></v-checkbox>
          <v-checkbox label="СМЗ" hide-details></v-checkbox>
          <v-checkbox label="Кандидат" hide-details></v-checkbox>
        </div>
        <v-divider class="mt-3"></v-divider>
        <v-row class="mt-6 d-flex justify-space-evenly">
          <v-btn variant="text" class="bg-green" width="253.5" height="46">
            Применить
          </v-btn>
          <v-btn variant="text" class="bg-grey" width="253.5" height="46">
            Отчистить
          </v-btn>
        </v-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    pas: '',
    date: ''
  }),
};
</script>

<style>
.sub-txt {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
}
.v-label.v-field-label {
  top: 13px;
}
.v-label {
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 15px;
}
.v-checkbox {
  height: 30px;
  margin-left: -10px;
}
</style>
