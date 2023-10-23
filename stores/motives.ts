import {defineStore} from "pinia";
import {ref} from 'vue'

const motives: any[] = await getMotivesfromAPI();
async function getMotivesfromAPI(this: any) {
    return await $fetch('/api/motives', {
        method: 'get'
    });
}

export const useMotivStore = defineStore('motiv', {

    state: () => {
        return {
            motives: motives,
            selectedMotiv: motives[0]
        }
    },
    actions: {
        setSelected(index: any){
            this.selectedMotiv = motives[index.value];
        }
    },
})