<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <nav class="z-50 relative">
    <div
      class="bg-white/90 w-full px-10 flex items-center justify-between h-24 fixed top-0"
    >
      <div class="left flex items-center">
        <a href="/">
          <img
            src="../assets/metairflow-removebg-preview 2.svg"
            alt="Logo"
            class="w-24 mr-8"
          />
        </a>
        <div class="items flex items-center gap-11">
          <a href="/" class="font-semibold font-satoshi text-[#F99933]">Home</a>
          <a href="/" class="font-semibold font-satoshi hover:text-[#F99933]"
            >Property</a
          >
          <a href="/" class="font-semibold font-satoshi hover:text-[#F99933]"
            >About Us</a
          >
          <a href="/" class="font-semibold font-satoshi hover:text-[#F99933]"
            >Contact</a
          >
        </div>
      </div>
      <div class="right gap-5 flex">
        <Button variant="scondary" child="Login" link="/login" />
        <Button child="Register" link="/register" />
      </div>
    </div>
  </nav>
</template>
