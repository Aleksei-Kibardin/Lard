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
                  <v-text-field label="Дата Рождения"></v-text-field>
                  <v-text-field label="Серия Номер паспорта"></v-text-field>
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
</template>

<script setup>
let dialog = ref(false);
</script>

<style>

</style>