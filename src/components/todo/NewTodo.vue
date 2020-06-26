<template>
  <div>
    <input type="text" v-model="todoTitle" />
    <button v-on:click="addTodo">click</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NewTodo",
  data: () => {
    return {
      todoTitle: ""
    };
  },
  methods: {
    ...mapMutations(["newTodo"]),
    addTodo() {
      this.newTodo(this.todoTitle);
      console.log(this.$store.state);
    }
  }
};
</script>

<style scoped></style>
