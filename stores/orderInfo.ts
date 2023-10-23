import {defineStore} from "pinia";

export const useOrderInfoStore = defineStore('orderInfo', {

    state: () => {
        return {
            motivName: "",
            colorName: "",
            motivPrice: 0,
            colorPrice: 0,
            total: 0
        }
    },
    actions: {
        setMotivName(value: any){
            this.motivName = value;
        },
        setMotivPrice(value: any){
            this.motivPrice = value;
        },
        setColorName(value: any){
            this.colorName = value;
        },
        setColorPrice(value: any){
            this.colorPrice = value;
        },
        setTotal(value: any){
            this.total = value;
        }
    },
})