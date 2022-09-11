import { createRouter, createWebHistory } from 'vue-router'
import SimpleCalculator from '../views/SimpleCalculator.vue'
import StringManipulation from '../views/StringManipulation.vue'
import HomeView from '../views/SimpleCalculator.vue'
import AboutVuetify from '../views/AboutVuetify.vue'
import AboutMe from '../views/AboutMe.vue'
import Axios from '../views/Axios.vue'



const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/StringManip',
            name: 'StringManipulation',
            component: StringManipulation
        },

        {
            path: '/SimpleMath',
            name: 'SimpleCalculator',
            component: SimpleCalculator
        },

        {
            path: '/Vuetify',
            name: 'AboutVuetify',
            component: AboutVuetify
        },

        {
            path: '/AboutMe',
            name: 'AboutMe',
            component: AboutMe
        },

        {
            path: '/Axios',
            name: 'Axios',
            component: Axios
        },

    ]
})

export default router