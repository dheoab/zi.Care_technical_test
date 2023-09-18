<script>
import patientForm from '../components/patientForm.vue';
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/mainStore';

export default {
    name: "edit-patient-section",
    components: {
        patientForm
    }, computed: {
        ...mapState(useMainStore, "allPatient", "selectedPatient")
    }, data() {
        return {
            editPatient: useMainStore().selectedPatient
        }
    },

    methods: {
        ...mapActions(useMainStore, ["fetchSelectedPatient"])
    },
    created() {
        console.log(this.$route.params.id);
        this.fetchSelectedPatient(this.$route.params.id)
    }


}

</script>

<template>
    <h1 class=" row justify-content-end">Edit Patient</h1>
    <patientForm :editPatient="editPatient" />
</template>

<style></style>