<script>
import { RouterLink } from 'vue-router';

export default {
    name: "patientForm",
    data() {
        return {
            patientName: "",
            DoB: "",
            gender: "",
            address: "",
            phoneNumber: "",
            email: "",
            emergencyContactName: "",
            relation: "",
            emergencyNumber: "",
        };
    },
    components: { RouterLink }
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
                            v-model="this.patientName">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            DoB <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="date" name="name" placeholder="Patient DoB" v-model="this.DoB">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Gender <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <select v-model="this.gender" name="category" id="" class="form-select">
                            <option disabled selected value="">Gender</option>
                            <option :value="M">Male</option>
                            <option :value="F">Female</option>
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
                            v-model="this.address" style="height: 100px;" />
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Phone Number <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="number" name="name" placeholder="Phone number"
                            v-model="this.phoneNumber">
                    </div>
                </div>

                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Email <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="email" name="name" placeholder="Email" v-model="this.email">
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
                            v-model="this.emergencyContactName">
                    </div>
                </div>

                <div class="row col-12 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Relation <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="text" name="name" placeholder="Relation" v-model="this.relation">
                    </div>
                </div>



                <div class="row col-4 mb-3">
                    <div>
                        <label class="mb-2" for="">
                            Phone Number <span class="text-danger text-end fw-bold ">*</span>
                        </label>
                    </div>
                    <div>
                        <input class="form-control" type="number" name="name" placeholder="Phone number"
                            v-model="this.emergencyNumber">
                    </div>
                </div>

                <div class="d-flex flex-row justify-content-evenly" style="margin-top: 32px;">
                    <button class="col-3 btn btn-danger">Cancel</button>
                    <RouterLink class="col-3 btn btn-success" to="/">
                        Submit
                    </RouterLink>
                </div>

            </form>

        </div>

    </div>
</template>

<style></style>