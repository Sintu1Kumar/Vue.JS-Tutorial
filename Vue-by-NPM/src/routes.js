import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/routing/Home.vue";
import AboutPage from "./components/routing/About.vue";
import ContactPage from "./components/routing/Contact.vue";
import ServicesPage from "./components/routing/Services.vue";
import ProfilePage from "./components/routing/Profile.vue";
import PageNotFound from "./components/routing/Page404.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
  },
  {
    name: "ContactPage",
    path: "/contact",
    component: ContactPage,
  },
  {
    name: "ServicesPage",
    path: "/services",
    component: ServicesPage,
  },
  {
    name: "ProfilePage",
    path: "/profile/:name",
    component: ProfilePage,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
