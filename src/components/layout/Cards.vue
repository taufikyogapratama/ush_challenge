<script setup>
import { onMounted, ref, watch } from "vue";

const resultData = ref(null);
const kamar = async () => {
  const data = await fetch(import.meta.env.VITE_DATA_KAMAR_DUMMY);
  const dataJson = await data.json();
  resultData.value = dataJson;
};
kamar();
</script>

<template>
  <section
    id="cards"
    class="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
  >
    <div
      class="card shadow-xl"
      v-for="(value, index) in resultData"
      :key="index"
    >
      <img src="../../assets/preview-img.jpg" alt="preview" class="w-full" />
      <div class="py-7 px-7">
        <p class="font-satoshi font-bold text-lg">{{ value.nama }}</p>
        <p class="font-satoshi font-normal text-[16px] text-gray-500 my-1">
          {{ value.alamat }}
        </p>
        <p class="font-semibold font-satoshi text-lg text-red mb-3">
          RM<span>{{ value.harga }}</span
          >/mo
        </p>
        <div class="flex justify-between pr-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <img src="../../assets/kamar.svg" alt="Kamar" />
              <p class="font-semibold">{{ value.jumKamar }}</p>
            </div>
            <p class="font-semibold">Bedrooms</p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <img src="../../assets/kamar-mandi.svg" alt="kamar mandi" />
              <p class="font-semibold">{{ value.jumKamarMandi }}</p>
            </div>

            <p class="font-semibold">Bathrooms</p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-2">
              <img src="../../assets/luas.svg" alt="luas" />
              <p class="font-semibold">
                <span>{{ value.luas }}</span> Sqft
              </p>
            </div>

            <p class="font-semibold">Total Area</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
