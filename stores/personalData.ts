import {defineStore} from "pinia";

export const usePersonalDataStore = defineStore('personalData', {

    state: () => {
        return {
            name: "",
            address:""
        }
    },
    actions: {
        setName(value: any){
            this.name = value;
        },
        setAddress(value: any){
            this.address = value;
        }
    },
})