<template>
  <select multiple size="4" v-model="selectedMotiv" @change="setSelectedMotiv" class="image-select">
    <option v-for="(item, key) in motives" :value="key">
       <img :src="item.img" alt="missing Image">
      {{item.name}}
    </option>
  </select>
</template>

<style>
.image-select {
  background-color: white;
  padding: 5px 30px 5px 10px;
  background-size: 20px 20px;
  background-position: right center;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.image-select option {
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 5px center;
}
</style>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import {useMotivStore} from "~/stores/motives";


export default defineComponent({
  setup() {
    const motivStore = useMotivStore();

    const motives = motivStore.motives;

    const selectedMotiv = ref(motivStore.selectedMotiv)

    const setSelectedMotiv = () => {
      motivStore.setSelected(selectedMotiv);
    }

    return {
      motives,
      selectedMotiv,
      setSelectedMotiv
    }
  }
})
</script>
