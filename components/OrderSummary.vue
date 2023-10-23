<template>
  <div class="summary">

    <div>
      <h2>
        Order Data
      </h2>
    </div>

    <div class="flex-container">
      <div class="left-element">
        <p>
          Motiv:
        </p>
      </div>
      <div class="right-element">
        <span>{{ motivPrice }}</span>
      </div>
    </div>

    <div class="flex-container">
      <div class="left-element">
        <p>
          Shirt:
        </p>
      </div>
      <div class="right-element">
        <span>{{ colorPrice }}</span>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="flex-container">
      <div class="left-element">
        <p>
          Total
        </p>
      </div>
      <div class="right-element">
        <span>{{ total }}</span>
      </div>
    </div>

  </div>
</template>

<style>
h2 {
  font-weight: bold;
}

.summary {
  background-color: lightgrey;
  border-radius: 10px;
  padding: 10px;
  color: black;
}

.flex-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.left-element {
  margin-right: auto;
}

.right-element {
  margin-left: auto;
}

.horizontal-line {
  width: 100%;
  border: 1px solid black;
  margin: 20px 0;
}

</style>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import {useOrderInfoStore} from "~/stores/orderInfo";


export default defineComponent({
  setup() {
    const orderInfoStore = useOrderInfoStore();

    const motivPrice = ref(orderInfoStore.motivPrice);
    const colorPrice = ref(orderInfoStore.colorPrice);
    const total = ref(orderInfoStore.total);


    return {
      motivPrice,
      colorPrice,
      total
    }
  }
})
</script>