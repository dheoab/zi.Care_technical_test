<script>
import { RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia';
import Sidebar from '../components/sidebar.vue';
import { useMainStore } from '../stores/mainStore';
export default {
    name: "Layout",
    components: {
        Sidebar
    },

}

</script>

<template>
    <div id="layout" class="d-flex flex-row ps-5" style="background-color: #FFFFFF; min-height: 1080px;">
        <Sidebar />
        <div id="content" class="col d-flex flex-column p-5 container">
            <RouterView />
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