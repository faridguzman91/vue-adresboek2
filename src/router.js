import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//importeer components en views
import AddressBook from "./components/AddressBook";
import Details from "./views/Details";
import NewUser from "./views/NewUser";
import EditUser from "./views/EditUser";

const routes = [
    { path: '/', component: AddressBook },
    { path: '/details/:id', component: Details },
    { path: '/new', component: NewUser },
    { path: '/edit/:id', component: EditUser }
];

export default new VueRouter({
    routes
})