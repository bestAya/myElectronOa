import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/workbench",
    children: [
      {
        path: "/info",
        name: "info",
        meta: { title: "消息" },
        component: () =>
          import(
            /* webpackChunkName: "infolayout" */
            "../views/infolayout/index.vue"
          ),
      },
      {
        path: "/order",
        name: "order",
        meta: { title: "订单列表" },
        component: () =>
          import(
            /* webpackChunkName: "order" */
            "../views/order/index.vue"
          ),
          redirect: "/order/list",
          children: [
            {
              path: "list",
              name: "list",
              meta: { title: "待办列表" },
              component: () =>
                import(
                  /* webpackChunkName: "orderlist" */
                  "../views/order/list.vue"
                ),
            },
          ]
      },
      {
        path: "/todo",
        name: "todo",
        meta: { title: "待办" },
        component: () =>
          import(
            /* webpackChunkName: "todo" */
            "../views/todo/index.vue"
          ),
        redirect: "/todo/list",
        children: [
          {
            path: "list",
            name: "list",
            meta: { title: "待办列表" },
            component: () =>
              import(
                /* webpackChunkName: "list" */
                "../views/todo/list.vue"
              ),
          },
          {
            path: "overlist",
            name: "overlist",
            meta: { title: "已办列表" },
            component: () =>
              import(
                /* webpackChunkName: "overlist" */
                "../views/todo/list.vue"
              ),
          },
        ],
      },
      {
        path: "/app",
        name: "app",
        meta: { title: "应用" },
        component: () =>
          import(
            /* webpackChunkName: "application" */
            "../views/application/index.vue"
          ),
      },
      {
        path: "/workbench",
        name: "workbench",
        meta: { title: "工作台" },
        component: () =>
          import(
            /* webpackChunkName: "workbench" */
            "../views/workbench/index.vue"
          ),
      },
      {
        path: "/personnel",
        name: "personnel",
        meta: { title: "人事" },
        component: () =>
          import(
            /* webpackChunkName: "personnel" */
            "../views/personnel/index.vue"
          ),
        children: [
          {
            path: "wagelist",
            name: "wagelist",
            meta: { title: "工资计算" },
            component: () =>
              import(
                /* webpackChunkName: "wagelist" */
                "../views/personnel/wagelist.vue"
              ),
          },
          {
            path: "atteandance",
            name: "atteandance",
            meta: { title: "考勤管理" },
            component: () =>
              import(
                /* webpackChunkName: "atteandance" */
                "../views/personnel/atteandance.vue"
              ),
          },
          {
            path: "employee",
            name: "employee",
            meta: { title: "员工管理" },
            component: () =>
              import(
                /* webpackChunkName: "employee" */
                "../views/personnel/employee.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/creatwin",
    name: "creatwin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "creatwin" */ "../views/layout/asideitem/creatwin.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
