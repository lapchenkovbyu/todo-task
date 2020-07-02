<template>
  <div class="new-todo">
    <div class="inputs">
      <input type="text" v-model="todo.title" placeholder="todo title" />
      <input type="date" v-model="todo.deadLine" />
    </div>
    <button @click="addArea">Add area</button>
    <br />
    <ol>
      <li v-for="(area, index) in todo.todoList">
        <div>
          <textarea v-model="todo.todoList[index].title" placeholder="todo" />
          <button @click="() => remArea(index)">&times;</button>
        </div>
      </li>
    </ol>
    <ConfirmModal @answer="addTodo" v-bind:title="'Add todo'" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ConfirmModal from "../modals/ConfirmModal";
export default {
  name: "NewTodo",
  components: { ConfirmModal },
  data: () => {
    return {
      todo: {
        title: "",
        deadLine: "",
        todoList: [{ title: "", status: false }]
      }
    };
  },
  methods: {
    ...mapMutations(["newTodo"]),
    addTodo(answer) {
      switch (answer) {
        case "confirm": {
          this.newTodo(this.todo);
          this.todo = { title: "", todoList: [{ title: "", status: false }] };
          break;
        }
        case "cancel": {
          this.todo = { title: "", todoList: [{ title: "", status: false }] };
          break;
        }
        default:
      }
    },
    addArea() {
      this.todo.todoList.push({ title: "", status: false });
    },
    remArea(index) {
      this.todo.todoList.splice(index, 1);
      console.log(this.todo.todoList);
    }
  }
};
</script>

<style scoped>
ol {
  max-width: 80vw;
}
li > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
li > div > * {
  margin: 0.75rem;
}

.inputs,
.inputs > * {
  margin: 0.5rem;
}

.new-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
