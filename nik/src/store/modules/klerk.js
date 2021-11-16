export default {
  state: {
    rubrics: [],
    //tasks: JSON.parse(localStorage.getItem('tasks') || '[] ') //
  },
  mutations: {
    SET_RUBRICS_TO_STATE: (state, rubrics) => {
      state.rubrics = rubrics;
    },
    //createTask(state, task) { //

    //state.tasks.push(task) //добавляем

    //localStorage.setItem('tasks', JSON.stringify(state.tasks)) // сохраняем
  },
  actions: {
    GET_RUBRICS_FROM_API({ commit }) {
      return axios(
        "https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=1",
        {
          method: "GET",
        }
      ).then((rubrics) => {
        commit("SET_RUBRICS_TO_STATE", rubrics.data);
      });
    },
    // createTask({commit}, task) { //
    //   commit('createTask', task)
    // }
  },
  modules: {},
  getters: {
    // tasks: s => s.tasks
    rubrics(state) {
      return state.rubrics;
    },
  },
};
