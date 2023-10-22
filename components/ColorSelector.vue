<template>
  <select v-model="selectedColor" @change="setSelectedColor">
    <option v-for="(item, key) in colors" :value="key">
      <div class="farb-container"></div>
      {{ item.name }}
    </option>
  </select>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import {useColorStore} from "~/stores/colors";


export default defineComponent({
  setup() {
    const colorStore = useColorStore();

    const colors = colorStore.colors;

    const selectedColor = ref(colorStore.selectedColor)

    const setSelectedColor = () => {
      colorStore.setSelected(selectedColor);
    }

    return {
      colors,
      selectedColor,
      setSelectedColor
    }
  }
})
</script>

<style>
.farb-container {
  width: 10px;
  height: 10px;
  background-color: v-bind('selectedColor');
}
</style>