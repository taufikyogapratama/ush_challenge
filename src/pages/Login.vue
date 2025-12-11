<script setup lang="ts"></script>

<template>
  <section class="flex">
    <div class="left w-[50vw] h-screen bg-cover flex flex-col justify-center">
      <p class="font-satoshi font-bold text-5xl mb-7 text-center text-white">
        Welcome to Rentverse
      </p>
      <p class="font-satosi font-semibold text-lg text-white text-center">
        Realize your dream home. We craft spaces that are functional,<br />
        inspiring joy, tranquility, and connection.
      </p>
    </div>
    <div class="right w-[50vw] py-36">
      <div class="w-[515px] mx-auto">
        <h3
          class="font-bold font-satoshi text-coklat text-3xl text-center mb-6"
        >
          Login Now
        </h3>
        <form>
          <label
            for="email"
            class="font-satoshi font-bold text-lg text-gray-700 mt-3 block mb-1.5"
            >Email</label
          >
          <input
            type="email"
            id="email"
            placeholder="budi siregar@gmail.com"
            class="w-full bg-orange py-2 px-5 rounded-lg"
          /><br clear="mb-6" />

          <label
            for="password"
            class="font-satoshi font-bold text-lg text-gray-700 block mb-1.5"
            >Password</label
          >
          <input
            type="password"
            id="password"
            placeholder="****************************"
            class="w-full bg-orange py-2 px-5 rounded-lg"
          /><br />
          <label
            for="confirmPassword"
            class="font-satoshi font-bold text-lg text-gray-700 mt-3 block mb-1.5"
            >Confirm Password</label
          >
          <input
            type="confirmPassword"
            id="confirmPassword"
            placeholder="****************************"
            class="w-full bg-orange py-2 px-5 rounded-lg mb-6"
          /><br />
          <input type="checkbox" value="agree" id="agree" required /><label
            for="agree"
            class="font-satoshi text-netral text-xl font-bold ml-3.5"
            >By registering, I agree to
            <span class="text-yellow hover:underline"
              >Rentverse Terms &<br />
              Conditions and Privacy Policy</span
            ></label
          ><br />
          <input
            type="submit"
            value="Next"
            class="py-2.5 w-full bg-yellow rounded-lg text-white mt-3.5 mb-6"
          />
          <p
            class="font-satoshi text-netral text-xl font-bold ml-3.5 text-center"
          >
            Don't have a Rentverse account yet?
            <RouterLink to="/register" class="text-yellow">Register</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.left {
  background-image: url("../assets/image_login.jpg");
}
</style>
