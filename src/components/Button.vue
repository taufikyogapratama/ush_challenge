<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps(["variant", "child", "link"]);
const btnPrimary: string =
  "py-2 px-4 bg-yellow rounded-xl text-white font-semibold cursor-pointer font-satoshi";
const btnSecondary: string =
  "py-2 px-4 rounded-xl text-yellow border-2 border-yellow font-semibold cursor-pointer font-satoshi";
</script>

<template>
  <RouterLink
    :to="props.link"
    :class="props.variant === 'scondary' ? btnSecondary : btnPrimary"
    v-text="props.child"
  ></RouterLink>
</template>
