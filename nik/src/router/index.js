import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../views/Header.vue";
import Smile__table from "../views/Smile/Smile__table.vue";
import Disfood__main from "../views/Disfood/Disfood__main.vue";
import Patheon__main from "../views/Patheon/Patheon__main.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Header,
    },
    {
        path: "/My_project_1",
        component: Smile__table,
    },
    {
        path: "/My_project_2",
        component: Disfood__main,
    },
    {
        path: "/My_project_3",
        component: Patheon__main,
    },




];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;