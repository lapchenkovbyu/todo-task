import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EditTodo from "../components/todo/EditTodo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/todo_:id/edit",
        name: "Todo edit item page",
        component: EditTodo
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
