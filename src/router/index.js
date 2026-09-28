import HomeView from '../views/HomeView.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/project/:owner/:repo',
        name: 'project',
        component: () => import('../views/ProjectView.vue')
    },
    {
        // Legacy links: /project/Owner%2FRepo
        path: '/project/:name',
        redirect: (to) => {
            const [owner, repo] = String(to.params.name).split('/')
            return repo ? { name: 'project', params: { owner, repo } } : { name: 'not-found', params: { pathMatch: to.path.slice(1).split('/') } }
        }
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
        const pos = { el: to.hash, behavior: 'smooth', top: 80 }
        // Coming from another page: give the new view (and its async sections) a moment to render.
        return from.name === to.name ? pos : new Promise(resolve => setTimeout(() => resolve(pos), 300))
    }
    return { top: 0, behavior: 'instant' }
}
