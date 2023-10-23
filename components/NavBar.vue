<template>
  <div>
    <div class="flex-container" v-if="$route.path === '/'">
      <div class="left-element">
        <h1>Design your shirt</h1>
      </div>
<!--      <div>-->
<!--        <TShirt></TShirt>-->
<!--      </div>-->
      <div class="right-element">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <NuxtLink to="/checkout">Checkout</NuxtLink>
        </button>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/checkout'">
      <div class="left-element">
        <h1>Checkout</h1>
      </div>
      <div class="right-element">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <NuxtLink to="/">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/orderSuccess'">
      <div class="left-element">
        <h1>Order Success</h1>
      </div>
      <div class="right-element">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <NuxtLink to="/">Back</NuxtLink>
        </button>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/about'">
      <div class="left-element">
        <h1>About this project</h1>
      </div>
      <div class="right-element">
        <button @click="$router.back()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: darkgrey;
  height: 10vh;
}

.left-element {
  margin-right: auto;

  h1 {
    color: chartreuse;
    font-size: 24px;
  }
}

.right-element {
  margin-left: auto;
}
</style>

<script setup lang="ts">

</script>
