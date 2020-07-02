<template>
  <div>
    <input v-model="todos.title" />
    <input type="date" v-model="todos.deadLine" />
    <hr />
    <button @click="addArea">add area</button>
    <ol>
      <li v-for="(todo, index) in this.todos.todoList" :v-model="index">
        <div>
          <div class="todo-title">
            <div v-if="edit[index]">
              <textarea cols="50" v-model:value="todo.title" placeholder="type your todo"/>
              <div>
                <button @click="() => confirmEdit(index)">confirm</button>
                <button @click="() => cancelEdit(index)">cancel</button>
              </div>
            </div>
            <div
              v-else
              v-bind:class="todo.status ? 'isChecked' : ''"
              v-on:click="todo.status ? '' : switchToEdit(index)"
            >
              <input
                type="checkbox"
                v-on:change="isChecked"
                v-model="todo.status"
                :value="index"
              />
              {{ todo.title }}
            </div>
          </div>
          <DeleteModal
            @answer="delTodo"
            v-bind:title="'delete'"
            v-bind:index="index"
            v-bind:todo="todos"
          />
        </div>
      </li>
    </ol>
    <ConfirmModal @answer="answer" v-bind:title="'confirm changes'" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ConfirmModal from "../modals/ConfirmModal";
import DeleteModal from "../modals/DeleteModal";
import store from "../../store/store";

export default {
  name: "EditTodo",
  data() {
    return {
      todos: "",
      edit: [],
      todoTitles: []
    };
  },
  components: { DeleteModal, ConfirmModal },
  computed: {
    ...mapState({
      count: state => state.todos.count
    }),
    ...mapGetters(["getTodo"]),
    item() {
      return this.$store.state.todos[this.$route.params.id];
    }
  },
  methods: {
    answer(answer) {
      switch (answer) {
        case "confirm": {
          this.$store.state.todos[this.$route.params.id] = this.todos;
          this.$store.dispatch("setStatus", this.$store.state.todos);
          this.edit = [];
          break;
        }
        case "cancel": {
          this.todos = JSON.parse(localStorage.vuex).todos[
            this.$route.params.id
          ];
          break;
        }
        default:
      }
    },
    addArea() {
      this.todos.todoList.push({ status: false, title: "" });
      if(this.edit.length){
      this.edit[this.edit.length] = true
      }else {
        this.edit[this.todos.todoList.length-1] = true
      }
    },
    switchToEdit(index) {
      this.todoTitles[index] = this.todos.todoList[index].title;
      this.edit[index] = !this.edit[index];
      this.$forceUpdate();
    },
    delTodo({ answer, index, todo }) {
      switch (answer) {
        case "confirm": {
          todo.todoList.splice(index, 1);
          console.log(todo);
          break;
        }
        case "cancel": {
          break;
        }
        default:
      }
    },
    isChecked() {
      this.$store.state.todos[this.$route.params.id] = this.todo;
    },
    confirmEdit(index) {
      this.edit[index] = !this.edit[index];
      this.$forceUpdate();
    },
    cancelEdit(index) {
      this.todos.todoList[index].title = this.todoTitles[index];
      this.edit[index] = !this.edit[index];
      this.$forceUpdate();
    }
  },
  mounted() {
    this.todos = this.item;
  }
};
</script>

<style scoped>
* {
  text-align: center;
}

input {
  font-size: 15pt;
}
.todo-title {
  width: 50%;
  padding: 1.5rem;
  height: 2rem;
}

li > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.isChecked {
  text-decoration: line-through;
}
</style>
