<template>
  <select v-model="selectedColor" @change="setSelectedColor">
    <option v-for="(item, key) in colors" :value="key">
      {{ item }}
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

<style scoped>

</style>