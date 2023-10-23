<template>
  <div>
    <p>
      Personal Data
    </p>
    <div class="error-message" v-if="generalError">{{ generalError }}</div>

  </div>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" @change="setName" placeholder="Enter your name">
    <div class="error-message" v-if="nameError">{{ nameError }}</div>
  </div>
  <div>
    <label for="address">Address:</label>
    <input type="text" id="address" v-model="address" @change="setAddress" placeholder="Enter your address">
    <div class="error-message" v-if="addressError">{{ addressError }}</div>
  </div>

  <div>
    <button @click="buyShirt" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <button>Buy</button>
    </button>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {usePersonalDataStore} from "~/stores/personalData";
import {useRouter} from 'vue-router';


export default defineComponent({
  setup() {
    const dataStore = usePersonalDataStore();
    const router = useRouter();

    const name = ref(dataStore.name);
    const address = ref(dataStore.address);

    var nameError = ref("");
    var addressError = ref("");
    var generalError = ref("");


    const setName = () => {
      dataStore.setName(name);
    }
    const setAddress = () => {
      dataStore.setAddress(address);
    }

    const buyShirt = async () => {
      try {
        const userData = {
          address: address.value,
          name: name.value
        }
        const res = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        if (res.ok) {
          router.push('/orderSuccess');
        } else if (res.status === 422) {

          const errorList = await res.json();
          console.log(errorList);
          errorList.errors.address ? addressError.value = errorList.errors.address[0] : addressError.value = "";
          errorList.errors.name ? nameError.value = errorList.errors.name[0] : nameError.value = "";
          errorList.message ? generalError.value = errorList.message : generalError.value = "";
        }
      } catch (e) {
        console.error('An error occured', e);
      }


    }

    return {
      name,
      address,
      setName,
      setAddress,
      buyShirt,
      nameError,
      addressError,
      generalError
    }
  }
})


</script>
