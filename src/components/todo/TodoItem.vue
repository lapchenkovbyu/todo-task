<template>
  <div class="TodoItem">
    <input type="checkbox" />
    <router-link :to="'/todo_' + index">{{ todo.title }}</router-link>
    <ul>
      <li v-for="(todo, index) in todo.todoList" v-if="index < 3">
        {{ todo }}
      </li>
    </ul>
    <div class="btns">
      <button>edit</button>
      <button
        v-on:click="
          () => {
            delTodo(index);
          }
        "
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  methods: {
    ...mapMutations(["remTodo"]),
    delTodo(index) {
      this.remTodo(index);
    }
  },
  mounted() {
    return {};
  },
  computed: {
    // todo() {
    //   return this.$route.params.todo;
    // }
  }
};
</script>

<style scoped>
* {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

ul {
  display: inline-block;
}

.TodoItem {
  border: 1px solid black;
  border-radius: 4px;
  margin: 1em;
  padding: 0.5em;
}
</style>
