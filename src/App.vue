<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Table from "./components/Table.vue";
</script>

<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mb-8 mt-12" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Tailwindcss v3" />
    <img class="mx-auto my-8" alt="powered-by" src="./assets/powered-by-vitawind-bright.png" />
    <div class="px-4">
      <Table></Table>
    </div>
  </div>
</template>

<style></style>
