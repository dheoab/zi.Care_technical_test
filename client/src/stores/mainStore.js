import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../router/index";
export const useMainStore = defineStore("mainStore", {
  state: () => ({
    allPatients: [],
    selectedPatient: {},
  }),
  actions: {
    fetchPatients() {
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

    addPatient(newPatient) {
      console.log(newPatient, "from Store");

      router.push({ path: "/" });
    },
    fetchSelectedPatient(id) {
      this.fetchPatients();

      const patient = this.allPatients.find((patient) => patient.id == id);

      this.selectedPatient = patient;

      console.log(this.selectedPatient, "patient");

      router.push({ path: `/${id}/edit-patient` });
    },
  },
});
