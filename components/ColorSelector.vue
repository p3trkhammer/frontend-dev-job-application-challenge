<template>
  <select multiple size="4" v-model="selectedColor" @change="setSelectedColor" class="color-select">
    <option v-for="(item, key) in colors" :value="key" class="color-row">
      <div class="color-row">
        <div class="option-label">{{ item.name }}</div>
      </div>
    </option>
  </select>
</template>
<style>
.color-select {
  width: 200px;
}

.color-row {
  display: flex;
  align-items: center;
  margin: 5px 0;
  background-color: v-bind('selectedColor');
}

.option-label {
  font-size: 16px; /* Adjust the font size as needed */
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