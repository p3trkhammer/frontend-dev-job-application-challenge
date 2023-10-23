<template>
  <div class="flex-container thin">

    <div class="flex-child shirt">
      <TShirt></TShirt>
    </div>
    <div class="flex-child">
      <OrderSummary></OrderSummary>
    </div>
    <div class="flex-child">
      <PersonalDataCollector></PersonalDataCollector>
    </div>
  </div>

</template>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
}

.thin {
  width: 80%;
  align-items: center;
  height: 80%;
  margin: 0 auto;
}

.flex-child {
  flex: 1;
  flex-shrink: 0;
  padding: 10px;
  margin: 2px;
  max-width: 20%;
  min-width: 200px;
}

</style>

<script setup lang="ts">

import {TShirt} from "#components";
</script>
