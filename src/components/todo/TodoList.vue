<template>
  <div>
    <h1>Todos</h1>
    <hr />
    <TodoItem
      v-for="(todo, index) in getTodos"
      v-bind:todo="todo"
      v-bind:index="index"
      v-bind:amount="amount"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  computed: mapGetters(["getTodos"]),
  mounted() {},
  props: ["amount"]
};
</script>
<style scoped></style>
