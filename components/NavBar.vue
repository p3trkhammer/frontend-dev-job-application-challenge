<template>
  <div>
    <div class="flex-container" v-if="$route.path === '/'">
      <div class="left-element">
        <span>Design your shirt</span>
      </div>
      <div class="right-element">
        <NuxtLink to="/checkout">Checkout</NuxtLink>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/checkout'">
      <div class="left-element">
        <span>Checkout</span>
      </div>
      <div class="right-element">
        <NuxtLink to="/orderSuccess">Buy</NuxtLink>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/orderSuccess'">
      <div class="left-element">
        <span>Order Success</span>
      </div>
      <div class="right-element">
        <NuxtLink to="/">Back</NuxtLink>
      </div>
    </div>
    <div class="flex-container" v-if="$route.path === '/about'">
      <div class="left-element">
        <span>About this project</span>
      </div>
      <div class="right-element">
        <button @click="$router.back()">Back</button>
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
  height: 20vh;
}

.left-element {
  margin-right: auto;
}

.right-element {
  margin-left: auto;
}
</style>

<script setup lang="ts">

</script>
