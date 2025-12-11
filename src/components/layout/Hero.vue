<script setup lang="ts">
import Form from "../Form.vue";
</script>

<template>
  <section id="hero" class="mt-20">
    <div
      id="heroSection"
      class="h-[515px] bg-no-repeat w-screen bg-cover mx-auto pt-36 pb-40 relative"
    >
      <article class="text-center text-white">
        <h2 class="font-libertinus font-light text-5xl">
          Build Your Dream Home Live<br />
          the Lifestyle You Crave.
        </h2>
        <p class="font-satoshi font-medium text-lg mt-7">
          Realize your dream home. We craft spaces that are functional,
          inspiring joy,<br />
          tranquility, and connection.
        </p>
      </article>

      <Form class="absolute -bottom-10 left-1/2 -translate-x-1/2" />
    </div>
  </section>
</template>

<style scoped>
#heroSection {
  background-image: url("../../assets/bg-hero.jpg");
}
</style>
