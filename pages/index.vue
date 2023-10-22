


<template>
  <div class="flex-container thin">
    <div class="flex-child">
      <colorSelector></colorSelector>
    </div>
    <div class="flex-child">
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
  justify-content: space-between; /* Gleichmäßige Verteilung der Kind-Elemente */
  padding: 10px; /* Platz um den Flex-Container hinzufügen */
}

.thin {
  width: 80%;
  align-items: center;
  height: 80%;
  margin: 0 auto; /* Zentriert den Container horizontal */
}

.flex-child {
  flex: 1; /* Die Kind-Elemente erhalten den gleichen Platz auf der horizontalen Achse */
  padding: 10px;
  margin: 2px;
  max-width: 20%; /* Begrenzen der Kind-Elemente auf 20% Breite */
}


</style>

<script setup lang="ts">


</script>

