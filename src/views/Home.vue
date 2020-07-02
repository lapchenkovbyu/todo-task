<template>
  <div>
    <div v-if="$route.fullPath === '/'">
      <button @click="openCreateMenu">Create todo</button>
      <NewTodo v-if="createMenuState" />
    </div>
    <div v-if="$route.fullPath === '/todo_'+ $route.params.id +'/edit'">
      <router-link to="/">
        <h1>Home</h1>
      </router-link>
    </div>
    <hr />
    <TodoList v-if="$route.fullPath === '/'" />
    <router-view v-else />
  </div>
</template>

<script>
import TodoList from "../components/todo/TodoList";
import NewTodo from "../components/todo/NewTodo";
import store from "../store/store";
export default {
  name: "Home",
  data: () => ({
    createMenuState: ""
  }),
  components: { NewTodo, TodoList },
  methods: {
    openCreateMenu() {
      this.createMenuState = !this.createMenuState;
    }
  },
  mounted() {
    !localStorage.vuex && store.dispatch('load')
  }
};
</script>
