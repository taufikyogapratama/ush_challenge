<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const fullname = ref("");
const email = ref("");
const role = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = async () => {
  try {
    const formData = new FormData();
    formData.append("fullname", fullname.value);
    formData.append("email", email.value);
    formData.append("role", role.value);
    formData.append("password", password.value);
    const res = await fetch(`${import.meta.env.VITE_API_USH}/api/v1/register`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.status === "success") {
      localStorage.setItem("isLogin", "true");
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
  }
};

const submit = (e) => {
  e.preventDefault();
  if (password.value === confirmPassword.value) {
    register();
  } else {
    alert("Password dan Confirm Password berbeda");
  }
};
</script>

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
    <div class="right w-[50vw] py-10">
      <div class="w-[515px] mx-auto">
        <h3
          class="font-bold font-satoshi text-coklat text-3xl text-center mb-6"
        >
          Register Now
        </h3>
        <form @submit="submit">
          <label
            for="fullname"
            class="font-satoshi font-bold text-lg text-gray-700 block mb-1.5"
            >Fullname</label
          >
          <input
            type="text"
            id="fullname"
            v-model="fullname"
            placeholder="Budi Siregar"
            class="w-full bg-orange py-2 px-5 rounded-lg"
          /><br />
          <label
            for="email"
            class="font-satoshi font-bold text-lg text-gray-700 mb-1.5"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="budi siregar@gmail.com"
            class="w-full bg-orange py-2 px-5 rounded-lg"
          /><br />
          <label
            for="tenant"
            class="font-satoshi font-bold text-lg text-gray-700 mt-3 mb-1.5"
            >Role</label
          >
          <div class="flex justify-between">
            <label
              for="tenant"
              class="py-2.5 px-5 border-2 border-gray-300 font-satoshi font-bold text-lg text-gray-700 rounded"
              >Tenant
              <input
                type="radio"
                id="tenant"
                v-model="role"
                value="tenant"
                class="ml-28"
                name="role"
                required
            /></label>

            <label
              for="propertyOwner"
              class="py-2.5 px-5 border-2 border-gray-300 font-satoshi font-bold text-lg text-gray-700 rounded"
              >Property Owner
              <input
                name="role"
                type="radio"
                v-model="role"
                id="propertyOwner"
                value="Property Owner"
                class="ml-11"
            /></label>
          </div>

          <p class="font-satoshi font-normal text-netral text-lg mt-1.5">
            *Choose this if you are looking to search for and book an apartment
          </p>
          <label
            for="password"
            class="font-satoshi font-bold text-lg text-gray-700 mt-2 mb-1.5 block"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="****************************"
            class="w-full bg-orange py-2 px-5 rounded-lg"
          />
          <label
            for="confirmPassword"
            class="font-satoshi font-bold text-lg text-gray-700 mt-3 block mb-1.5"
            >Confirm Password</label
          >
          <input
            type="confirmPassword"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="****************************"
            class="w-full bg-orange py-2 px-5 rounded-lg mb-4"
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
            Already have a Rentverse account?
            <RouterLink to="/login" class="text-yellow">Sign in</RouterLink>
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
