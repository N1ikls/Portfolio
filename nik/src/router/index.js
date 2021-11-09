import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../views/Header.vue";
import Table from "../views/Smile/Table.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Header,
    },
    {
        path: "/My_project_1",
        component: Table,
    },



];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;