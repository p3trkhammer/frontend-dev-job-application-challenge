<template>
  <select v-model="selectedMotiv" @change="setSelectedMotiv">
    <option v-for="(item, key) in motives" :value="key">
      {{ item }}
    </option>
  </select>
</template>

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

<style scoped>

</style>