import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//gegevens en state management

export default new Vuex.Store({
    state: {
        users: [{
                id: 1,
                name: "Mr. Demarco Hand",
                phone: "(115) 510-0174",
                email: "",
                type: "work"
            },
            {
                id: 2,
                name: "Neil Allen",
                phone: "(303) 234-5649",
                email: "neilallen@mail.com",
                type: "private"
            },
            {
                id: 3,
                name: "Alex Allen",
                phone: "(303) 234-5649",
                email: "alexallen@mail.com",
                type: "work"
            },
            {
                id: 4,
                name: "Ryan Allen",
                phone: "(303) 234-5649",
                email: "ryanallen@mail.com",
                type: "private"
            },
            {
                id: 5,
                name: "Nichola Allen",
                phone: "(303) 234-5649",
                email: "nicholallen@mail.com",
                type: "work"
            }
        ],
        userDeatils: []
    },


    mutations: {
        //bewerken en state management

        //filteren
        setUserDetails(state, id) {
            let user = state.users.filter(function(item) {
                return item.id == id;
            });
            state.userDeatils = user;
        },

        //verwijderen
        removeUser(state, id) {
            let user = state.users.filter((item) => {
                return item.id != id;
            });
            state.users = user;
        },
        //toevoegen
        submitUser(state, user) {
            state.users.push(user);
        },
        //bewerken
        editUser(state, payload) {
            let editUser = state.users.find((user) => {
                return user.id == payload.id
            })
            editUser.name = payload.name;
            editUser.email = payload.email;
            editUser.phone = payload.phone;
            editUser.type = payload.type;
        }
    },

    //actieknoppen functionaloteit
    actions: {
        getUserDetails({ commit }, userId) {
            commit("setUserDetails", userId);
        },
        removeUser({ commit }, userId) {
            commit("removeUser", userId);
        },
        submitUser({ commit }, user) {
            commit("submitUser", user);
        },
        editUser({ commit }, userId) {
            commit("editUser", userId);
        }
    }
});