import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        alias: "/posts",
        name: "posts",
        component: () => import("@/components/PostList.vue"),
    },
    {
        path: "/posts/new",
        name: "posts-new",
        component: () => import("@/components/PostForm.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
