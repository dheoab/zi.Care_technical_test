<script>
import Sidebar from '../components/icons/sidebar.vue';
export default {
    name: "Layout",
    components: {
        Sidebar
    }

}

</script>

<template>
    <div id="layout" class="d-flex flex-row vh-100 ps-5" style="background-color: #FFFFFF">
        <Sidebar />
        <div id="content" class="col d-flex flex-column p-5">
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ahmad Ghadaffi</td>
                        <td>01 January 1995</td>
                        <td>Cilandak, Jakarta Selatan</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ahmad Ghadaffi</td>
                        <td>01 January 1995</td>
                        <td>Cilandak, Jakarta Selatan</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ahmad Ghadaffi</td>
                        <td>01 January 1995</td>
                        <td>Cilandak, Jakarta Selatan</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ahmad Ghadaffi</td>
                        <td>01 January 1995</td>
                        <td>Cilandak, Jakarta Selatan</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
#content {
    border-top-left-radius: 64px;
    border-bottom-left-radius: 64px;
    background-color: #F5F6FA;
}

table tbody tr {
    height: 40px;
    vertical-align: middle;
}
</style>