<template>
  <div>
    <h1>Home</h1>
    <hr />
    <NewTodo />
    <hr />
    <router-view />
  </div>
</template>

<script>
import TodoList from "../components/todo/TodoList";
import NewTodo from "../components/todo/NewTodo";
export default {
  name: "Home",
  components: { NewTodo, TodoList },
  mounted() {}
};
</script>
