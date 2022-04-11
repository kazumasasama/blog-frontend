import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostsIndex from '@/views/PostsIndex.vue'
import PostsShow from '@/views/PostsShow.vue'
import PostsNew from '@/views/PostsNew.vue'
import PostsEdit from '@/views/PostsEdit.vue'
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  },
  {
    path: '/posts',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    component: PostsNew
  },
  {
    path: '/posts/:id',
    component: PostsShow
  },
  {
    path: '/posts/:id/edit',
    component: PostsEdit
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
