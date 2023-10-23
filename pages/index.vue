<template>
  <div class="flex-container thin">
    <div class="flex-child">
      <colorSelector></colorSelector>
    </div>
    <div class="flex-child shirt">
      <TShirt></TShirt>
    </div>
    <div class="flex-child">
      <motive-selector></motive-selector>
    </div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

</script>

