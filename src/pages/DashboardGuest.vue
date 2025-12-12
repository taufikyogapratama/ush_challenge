<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Cards from "../components/layout/Cards.vue";

import Hero from "../components/layout/Hero.vue";
import NavbarGuest from "../components/NavbarGuest.vue";
</script>

<template>
  <main class="overflow-x-hidden">
    <NavbarGuest />
    <Hero />
    <p
      class="text-center font-libertinus font-normal text-[40px] text-yellow mt-[111px] mb-10"
    >
      Trusted by Hundreds, Recognized for Excellence.
    </p>
    <div class="flex gap-6 mx-auto w-[1355px] mb-24">
      <div class="w-80 text-center">
        <p class="mb-4 font-libertinus font-normal text-yellow text-5xl">
          750+
        </p>
        <p>
          Successfully built over 750 unique<br />
          homes tailored to each client's vision.
        </p>
      </div>
      <div class="w-80 text-center">
        <p class="mb-4 font-libertinus font-normal text-yellow text-5xl">
          200+
        </p>
        <p>
          Expertise in building functional and<br />
          inspiring spaces, from offices to retail.
        </p>
      </div>
      <div class="w-80 text-center">
        <p class="mb-4 font-libertinus font-normal text-yellow text-5xl">15+</p>
        <p>
          A decade of dedicated expertise<br />
          ensuring timeless quality.
        </p>
      </div>
      <div class="w-80 text-center">
        <p class="mb-4 font-libertinus font-normal text-yellow text-5xl">50+</p>
        <p>
          Honored with numerous industry awards<br />
          for our innovative .
        </p>
      </div>
    </div>
    <p
      class="text-center font-libertinus font-normal text-[40px] text-yellow mb-14"
    >
      Find the property that defines your lifestyle
    </p>

    <Cards />
    <Footer />
  </main>
</template>
