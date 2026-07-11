import HomeView from '../views/HomeView.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/project/:name',
        name: 'project',
        component: () => import('../views/ProjectView.vue')
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('../views/PrivacyPolicy.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFound.vue')
    }
]

export const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) {
        return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'instant' }
}
