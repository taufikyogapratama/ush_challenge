<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <form class="bg-white px-5 py-4 rounded-[20px] flex shadow-xl">
    <input
      id="form"
      type="text"
      placeholder="Search by locations"
      class="bg-slate py-2 px-2 rounded-xl focus:outline-0 w-[724px] mr-7"
    />
    <Button child="Search" />
  </form>
</template>
