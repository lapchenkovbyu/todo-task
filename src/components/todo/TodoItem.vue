<template>
  <div class="TodoItem">
    <router-link :to="'/todo_' + index + '/edit'" class="TodoItemContent">
      <h2>{{ todo.title }}</h2>
      <ul>
        <li
          v-for="(todo, index) in this.todo.todoList"
          v-if="index < getAmount(todo, amount)"
        >
          {{ todo.title }}
        </li>
      </ul>
      <h4>{{ todo.deadLine }}</h4>
    </router-link>
    <div class="btns">
      <DeleteModal
              @answer="delTodo"
              v-bind:title="'delete'"
              v-bind:index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ConfirmModal from "../modals/ConfirmModal";
import DeleteModal from "../modals/DeleteModal";

export default {
  name: "TodoItem",
  components: {DeleteModal, ConfirmModal },
  props: ["todo", "index", "amount"],
  methods: {
    ...mapMutations(["remTodo"]),
    delTodo({answer, index}) {
      switch (answer) {
        case "confirm": {
          this.remTodo(index);
          break;
        }
        case "cancel": {
          break;
        }
        default:
      }
    },
    getAmount(todo, amount = 3) {
      if (amount === "full") {
        return this.todo.todoList.length + 1;
      } else return amount;
    }
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
  z-index: 0;
}

li {
  margin: 0.5rem;
}

.TodoItemContent {
  width: 100%;
  max-width: 75vw;
  display: flex;
  text-decoration: none;
  color: #2c3e50;
}

.btns,
.btns > * {
  margin: 0.5rem;
  text-decoration: none;
  max-width: 25vw;
}
.btns {
  z-index: 1;
}
</style>
