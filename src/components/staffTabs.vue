<template>
  <div class="d-flex tabs mt-2">
    <v-chip-group multiple class="text-primar">
      <v-chip
        class="rounded-pill"
        :style="`border: 1px solid #B0BCC7; background-color: rgb(176, 188, 199, 0.01); color: #B0BCC7;`"
      >
        Весь список
      </v-chip>
      <v-chip
        class="rounded-pill"
        :style="`border: 1px solid #E2BD06; background-color: rgb(226, 189, 6, 0.01); color: #E2BD06;`"
      >
        Проблемные
      </v-chip>
      <v-chip
        class="rounded-pill"
        :style="`border: 1px solid #E52E2E; background-color: rgb(229, 46, 46, 0.01); color: #E52E2E;`"
      >
        Критические
      </v-chip>
      <v-chip
        class="rounded-pill"
        :style="`border: 1px solid #00B6ED; background-color: rgb(0, 182, 237, 0.01); color: #00B6ED;`"
      >
        Есть замечания
      </v-chip>
      <v-chip
        class="rounded-pill"
        :style="`border: 1px solid #00AE5B; background-color: rgb(0, 174, 91, 0.01); color: #00AE5B;`"
      >
        Выполнено
      </v-chip>
    </v-chip-group>
  </div>
</template>
<script>
console.log("1");
</script>

<style>
h1 {
  font-size: 26px;
}
</style>
