<template>
  <div class="about">

    <p>
      This is a demo page
    </p>

    <button @click="$router.back()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Back
    </button>
  </div>
</template>

<style>
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 80vh;
}

.about p {
  text-align: center;
  margin: 0;
  color: darkgrey;
  font-size: 30px;
}
</style>

<script setup lang="ts">

</script>

