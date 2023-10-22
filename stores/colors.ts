import {defineStore} from "pinia";

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
       setSelected(value: any){
           this.selectedColor = colors[value.value];
       },
        getSelected() {
           return this.selectedColor
        }
    },
})