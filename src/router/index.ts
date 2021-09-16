import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";

// import firebase from "firebase/app";
// import "firebase/database";

const routes = [
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
