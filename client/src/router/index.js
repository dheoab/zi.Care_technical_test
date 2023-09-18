import { createRouter, createWebHistory } from "vue-router";
import patient from "../views/patientView.vue";
import addPatient from "../views/addPatientView.vue";
import editPatient from "../views/editPatientView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "patient-section",
      component: patient,
    },
    {
      path: "/add-patient",
      name: "add-patient-section",
      component: addPatient,
    },
    {
      path: "/:id/edit-patient",
      name: "edit-patient-section",
      component: editPatient,
    },
  ],
});

export default router;
