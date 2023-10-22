import {defineStore} from "pinia";

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
        setSelected(value: any){
            this.selectedMotiv = motives[value.value];
        }
    },
})