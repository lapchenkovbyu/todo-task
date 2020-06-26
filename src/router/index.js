import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoItemPage from "../components/todo/TodoItemPage";
import TodoList from "../components/todo/TodoList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/todo_:id",
        name: "Todo item page",
        component: TodoItemPage
        // props: route => ({ todo: route.query.q })
      },
      {
        path: "/todoList",
        name: "Todo list",
        component: TodoList
        // props: route => ({ todo: route.query.q })
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
