<template>
  <div>
    <v-input class="flex-column px-7 pt-7">
      <v-text-field
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
</template>

<script setup>
console.log()
</script>