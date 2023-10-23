<template>
  <select v-model="selectedColor" @change="setSelectedColor" class="color-select">
    <option v-for="(item, key) in colors" :value="key">
      <div class="color-indicator" :style="{ backgroundColor: item.color }"></div>
      <div class="option-label">{{ item.name }}</div>
    </option>
  </select>
</template>

<style>
.color-select {
  background-color: white;
  padding: 5px 30px 5px 10px;
  background-size: 20px 20px;
  background-position: right center;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.color-select option {
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 5px center;
}
</style>

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