<template>
    <div class="flex-container thin">

      <div class="flex-child">
        <TShirt></TShirt>
      </div>
      <div class="flex-child">
        <p>
          Order Summary
        </p>
      </div>
      <div class="flex-child">
        <p>
          Enter personal data
        </p>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <NuxtLink to="/orderSuccess">Buy</NuxtLink>
          </button>
          <!--    should not be a Router Link, but a button -> Post Method -> handling return Value -> Reroute to design page-->
        </div>
      </div>
    </div>

</template>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.thin {
  width: 80%;
  align-items: center;
  height: 80%;
  margin: 0 auto;
}

.flex-child {
  flex: 1;
  padding: 10px;
  margin: 2px;
  max-width: 20%;
}

</style>

<script setup lang="ts">

import {TShirt} from "#components";
</script>
