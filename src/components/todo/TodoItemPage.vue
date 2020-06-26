<template>
  <div>
    <h1>{{ this.todo.title }}</h1>
    <hr />
    <ol>
      <li v-for="(todo, index) in this.todo.todoList" :v-model="index">
        <input
          type="checkbox"
          v-on:change="
            () => {
              isChecked(index);
            }
          "
          v-model="todoStatus"
          :value="index"
        />
        {{ todo.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoEdit",
  computed: {
    ...mapGetters(["getTodo"]),
    item() {
      return this.$store.state.todos[this.$route.params.id];
    }
  },
  methods: {
    isChecked(index) {
      this.todoStatus;
    }
  },
  data() {
    return {
      todo: "",
      todoStatus: []
    };
  },
  mounted() {
    this.todo = this.item;
  }
};
</script>

<style scoped></style>
