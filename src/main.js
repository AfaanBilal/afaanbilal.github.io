import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(
    App,
    {
        base: import.meta.env.BASE_URL,
        routes,
        scrollBehavior,
    },
)
