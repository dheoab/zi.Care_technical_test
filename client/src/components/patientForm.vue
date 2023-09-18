<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useMainStore } from '../stores/mainStore';

export default {
    name: "patientForm",
    data() {
        return {
            newPatient: {
                patientName: "",
                DoB: "",
                gender: "",
                address: "",
                phoneNumber: "",
                email: "",
                emergencyContactName: "",
                relation: "",
                emergencyNumber: "",
            }
        };
    }, props: ['editPatient']
    , computed: {
        ...mapState(useMainStore, ["selectedPatient"])
    },
    components: { RouterLink },
    methods: {
        ...mapActions(useMainStore, ['addPatient']),
        getNewPatientData() {
            this.addPatient(this.newPatient)
        },
        cancelButton() {
            if (this.editPatient !== undefined) {
                this.newPatient.patientName = this.selectedPatient.name
                this.newPatient.DoB = this.selectedPatient.DoB
                this.newPatient.address = this.selectedPatient.address
            } else {
                this.newPatient = {
                    patientName: "",
                    DoB: "",
                    gender: "",
                    address: "",
                    phoneNumber: "",
                    email: "",
                    emergencyContactName: "",
                    relation: "",
                    emergencyNumber: "",
                }
            }
        }
    },
    created() {
        console.log(this.editPatient, "<< editPatient");
        if (this.editPatient !== undefined) {
            this.newPatient.patientName = this.selectedPatient.name
            this.newPatient.DoB = this.selectedPatient.DoB
            this.newPatient.address = this.selectedPatient.address
        }
    },
}

</script>

<template>
    <div class="d-flex flex-row justify-content-center align-items-center">
        <div class="d-flex flex-column col col-8 p-5"
            style="border: 1px solid grey; border-radius: 15px; background-color: #FFFFFF;">
            <form class="d-flex flex-column">

                <div class="row col-12 mb-3">
                    <div>
                        <h3>Personal Information</h3>
                    </div>
                    <div>
                        <label class="mb-2" for="">
                            Name <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Patient name"
                            v-model="this.newPatient.patientName">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            DoB <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="date" name="name" placeholder="Patient DoB"
                            v-model="this.newPatient.DoB">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Gender <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <select v-model="this.newPatient.gender" name="category" id="" class="form-select">
                            <option disabled selected value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    </div>
                </div>

                <div class="row col-12 mb-3" style="margin-top: 20px;">
                    <div style="margin-bottom: 10px;">
                        <h3>Contact Information</h3>
                    </div>
                    <div>
                        <label class="mb-2" for="">
                            Address <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <textarea class="form-control" type="text" name="name" placeholder="Patient Address"
                            v-model="this.newPatient.address" style="height: 100px;" />
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Phone Number <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Phone number"
                            v-model="this.newPatient.phoneNumber">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Email <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="email" name="name" placeholder="Email"
                            v-model="this.newPatient.email">
                    </div>
                </div>

                <div class="row col-12 mb-3" style="margin-top: 20px;">
                    <div style="margin-bottom: 10px;">
                        <h3>Emergency Contact</h3>
                    </div>
                    <div>
                        <label class="mb-2" for="">
                            Name <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Person name"
                            v-model="this.newPatient.emergencyContactName">
                    </div>
                </div>

                <div class="row col-12 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Relation <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Relation"
                            v-model="this.newPatient.relation">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Phone Number <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Phone number"
                            v-model="this.newPatient.emergencyNumber">
                    </div>
                </div>

                <div class="d-flex flex-row justify-content-evenly" style="margin-top: 32px;">
                    <button class="col-3 btn btn-danger" @click.prevent="cancelButton">Cancel</button>
                    <button class="col-3 btn btn-success" @click.prevent="getNewPatientData">Submit</button>

                </div>

            </form>

        </div>

    </div>
</template>

<style></style>