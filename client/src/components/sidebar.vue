<script>
import router from '../router/index'
import { RouterLink } from 'vue-router';

export default {
    name: "sideBar",
    components: { RouterLink },
    methods: {
        navigate() {
            router.push({ path: "/" })
        }
    }
}
</script>

<template>
    <div id="sidebar" class="d-flex flex-column col col-2 p-3">
        <div id="sidebar-logo"><span>Zi</span> Care</div>
        <ul id="sidebar-menu">
            <li class="sidebar-menu-item"><ion-icon name="layers" class="sidebar-menu-item-icons"></ion-icon> Dashboard</li>
            <li class="sidebar-menu-item"><ion-icon name="business" class="sidebar-menu-item-icons"></ion-icon> Hospitals
            </li>
            <li class="sidebar-menu-item" @click="navigate">
                <ion-icon name="accessibility" class="sidebar-menu-item-icons"></ion-icon>
                Patients
            </li>
            <li class="sidebar-menu-item"><ion-icon name="medkit" class="sidebar-menu-item-icons"></ion-icon> Doctors</li>
        </ul>
    </div>
</template>

<style>
#sidebar {
    background-color: #FFFFFF;
}

span {
    color: #FF7272;
}

#sidebar-logo {
    color: #728EA1;
    font-size: 32px;
    font-weight: 800;
}

#sidebar-menu {
    padding: 0;
    margin-top: 20px;
    color: #728EA1;
}

.sidebar-menu-item {
    list-style-type: none;
    margin: 32px 0px;
    font-size: 16px;
    cursor: pointer;

}

.sidebar-menu-item:hover {
    background-color: #F5F6FA;
}

.sidebar-menu-item-icons {
    color: #FF7272;
}
</style>