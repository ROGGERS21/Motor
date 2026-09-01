import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '../components/layout/DefaultLayout.vue'
import  HomePage from '../Page/HomePage.vue'
import AboutPage from '../Page/AboutPage.vue'
import ServicePage from '../Page/ServicePage.vue'
import CarsPage from '../Page/CarsPage.vue'
import ContactPage from '../Page/ContactPage.vue'
import BlogPage from '../Page/BlogPage.vue'
import  PricingPage from '../Page/PricingPage.vue'
// import BlogDetails from '../Page/BlogDetails.vue'

import CarDetails from "../Page/CarDetails.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: 'home',
                component: HomePage,
            },
             {
                path: "/about",
                name: 'about',
                component: AboutPage,
            },
             {
                path: "/pricing",
                name: 'pricing',
                component: PricingPage,
            },
             {
                path: "/service",
                name: 'service',
                component: ServicePage,
            },
             {
                path: "/cars",
                name: 'cars',
                component: CarsPage,
            },
             {
                path: "/contact",
                name: 'contact',
                component: ContactPage,
            },
             {
                path: "/blog",
                name: 'blog',
                component: BlogPage,
            },
            {
                     path: "/cars/:id",
                     component: CarDetails,
            },
            
            
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }; //scroll to the  top  navigation
    }
})

export default router;

