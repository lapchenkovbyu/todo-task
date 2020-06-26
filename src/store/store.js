import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "test",
        todoList: [
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nam.",
            status: false
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nam.",
            status: true
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nam.",
            status: false
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nam.",
            status: false
          },
          {
            title:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nam.",
            status: false
          }
        ]
      },
      {
        title: "test",
        todoList: [
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          },
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          },
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          },
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          },
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          },
          {
            title:
              "Ad ea error esse in, nostrum officia officiis repellat sunt?",
            status: false
          }
        ]
      }
    ]
  },
  plugins: [createPersistedState()],
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
    newTodo: (state, todo) => {
      if (!state.todos) {
        state.todos = [todo];
      } else {
        state.todos = [...state.todos, todo];
      }
    },
    remTodo: (state, todo_id) => {
      state.todos.splice(todo_id, 1);
      // console.log(todo_id);
    }
  },
  actions: {
    loadTodo: ({ ctx, getTodo }, data) => {
      console.log(getTodo(data));
    },
    editTodo: () => {},
    delTodo: (ctx, todo_id) => {
      ctx.commit("remTodo", todo_id);
    }
  },
  getters: {
    getTodos: state => state.todos,
    getTodo: state => todo_id =>
      state.todos.filter((element, index) => {
        return index == todo_id && element;
      })
  }
});
