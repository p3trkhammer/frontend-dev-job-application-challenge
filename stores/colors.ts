import {defineStore} from "pinia";
import {ref} from 'vue'

const colors: any[] = await getColorsfromAPI();
async function getColorsfromAPI(this: any) {
    return await $fetch('/api/colors', {
        method: 'get'
    });
}

export const useColorStore = defineStore('color', {

    state: () => {
        return {
            colors: colors,
            selectedColor: colors[0]
        }
    },
    actions: {
       setSelected(index: any){
           this.selectedColor = colors[index.value];
       }
    },
})