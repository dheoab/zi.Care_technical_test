<script>
import { mapActions, mapState } from 'pinia';

import { useMainStore } from '../stores/mainStore';
import { RouterLink } from 'vue-router';
export default {
    name: "patient-section",
    components: {
        RouterLink
    },
    computed: {
        ...mapState(useMainStore, ['allPatients'])
    },
    methods: {
        ...mapActions(useMainStore, ['fetchPatients', 'fetchSelectedPatient']),

    },
    created() {
        this.fetchPatients()

    }

}

</script>

<template>
    <h1 class="row justify-content-end">All Patients</h1>
    <div>
        <h2>Patients List</h2>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>DoB</th>
                <th>Address</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(patient, index) in allPatients" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ patient.name }}</td>
                <td>{{ patient.DoB }}</td>
                <td>{{ patient.address }}</td>
                <td>
                    <ion-icon class="action-logo" name="create" style="color: rgb(133, 169, 133);"
                        @click.prevent="fetchSelectedPatient(patient.id)"></ion-icon>
                    <ion-icon class="action-logo" name="person" style="color: #6989d4;"></ion-icon>
                    <ion-icon class="action-logo" name="trash" style="color: #FF7272;"></ion-icon>
                </td>
            </tr>
        </tbody>
    </table>
    <RouterLink to="/add-patient">
        <ion-icon name="person-add" class="sticky-button"></ion-icon>
    </RouterLink>
</template>

<style>
table tbody tr {
    height: 40px;
    vertical-align: middle;
}

.action-logo {
    align-items: center;
    margin-right: 20px;
    font-size: 24px !important;
    cursor: pointer
}

.sticky-button {
    font-size: 24px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background-color: #FF7272;
    color: #fff;
    padding: 20px 20px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}
</style>