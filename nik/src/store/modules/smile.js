export default {
    state: {
        searchValue_smile: "",
        smile: [],
        local: JSON.parse(localStorage.getItem("local") || "[] "), //
    },
    mutations: {
        
        SET_SMILE_TO_STATE: (state, smile) => {
            state.smile = smile;
        },

        PUSHLOCAL(state, local) {
            state.local.push(local); //добавляем
            localStorage.setItem("local", JSON.stringify(state.local)); // сохраняем
        },

        DELETE_LOCALSTORAGE: (state) => {
            state.local = [];
        },

        SET_SEARCH_VALUE: (state, value) => {
            state.searchValue_smile = value;
        },

    },
    actions: {
        GET_SMILE_FROM_API({ commit }) {
            return axios("https://v2.jokeapi.dev/joke/Any?amount=10", {
                method: "GET",
            }).then((smile) => {
                commit("SET_SMILE_TO_STATE", smile.data);
            });
        },
        LOCAL({ commit }, local) {
            //
            commit("PUSHLOCAL", local);
        },

        DELETE({ commit }) {
            commit("DELETE_LOCALSTORAGE");
        },

        GET_SEARCH_VALUE_SMILE({ commit }, value) {
            commit("SET_SEARCH_VALUE_SMILE", value);
        },

    },

    modules: {},

    getters: {
        local(state) {
            return state.local;
        },

        smile(state) {
            return state.smile;
        },

        searchValue_smile(state) {
            return state.searchValue_smile;
        },
    }
}