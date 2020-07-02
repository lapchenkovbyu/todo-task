import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initialState = [
  {
    title: "Todo 1",
    deadLine: "07-13-2002",
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
    title: "Todo 2",
    deadLine: "07-13-2002",
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

export default new Vuex.Store({
  state: {
    todos: []
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
    }
  },
  actions: {
    load: (ctx, todos = initialState) => {
      ctx.commit("setTodos", todos);
    },
    editTodo: (ctx, todos) => {
      ctx.commit("setTodos", todos);
    },
    delTodo: (ctx, todo_id) => {
      ctx.commit("remTodo", todo_id);
    },
    setStatus: (ctx, todos) => {
      ctx.commit("setTodos", todos);
    }
  },
  getters: {
    getTodos: state => state.todos,
    getTodo: state => todo_id =>
      state.todos.filter((element, index) => {
        return index == todo_id && element;
      }),
    getStatuses: state =>
      this.todos.map(todo => {
        todo.todoList.map(elem => {
          return elem.status;
        });
      })
  }
});
