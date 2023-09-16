import { ref, computed } from "vue";
import { defineStore } from "pinia";
//require("../datas/patients.json"),
export const useMainStore = defineStore("mainStore", {
  state: () => ({
    allPatients: [],
  }),
  actions: {
    fetchPatients() {
      // const allPatients = require("../datas/patients.json").map((patient) => {
      //   return patient;
      // });
      this.allPatients = [
        {
          id: 1,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
        {
          id: 2,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
        {
          id: 3,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
        {
          id: 4,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
        {
          id: 5,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
        {
          id: 6,
          name: "Ahmad Ghadaffi",
          DoB: "1995-01-01",
          address: "Cilandak, Jakarta Selatan",
        },
      ];
    },
  },
});
