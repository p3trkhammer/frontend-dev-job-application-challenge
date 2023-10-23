<template>
  <div class="flex-container thin">

    <div class="flex-child shirt">
      <TShirt></TShirt>
    </div>
    <div class="flex-child">
      <p>
        Order Summary
      </p>
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
  flex-wrap: nowrap;
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
