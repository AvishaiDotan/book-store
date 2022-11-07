import appHeader from "../cmps/app-header.cmp.js"
import appFooter from "../cmps/app-footer.cmp.js"

import bookDetails from "../views/book-details.cmp.js"
import bookApp from "../views/book-app.cmp.js"
import homePage from '../views/home-page.cmp.js'
import aboutPage from '../views/about-page.cmp.js'

const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

const app = createApp({
    template:`
        <app-header class="main-layout full" />
        <main>
            <router-view/>
        </main>
        <!-- <book-app :filter-by="filterBy"/> -->
        <app-footer class="full main-layout" />
    `,
    data() {
        return {
            filterBy: {},
            isShowMainPage: false,
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = {title: filter.title, price: filter.price}
        },
    },
    components: {
        bookApp,
        appHeader,
        appFooter
    }
})

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        },
        {
            path: '/book',
            component: bookApp
        },
        {
            path: '/book/:id',
            component: bookDetails
        },
        // {
        //     path: '/car/edit/:id?',
        //     component: carEditCmp
        // },
        // {
        //     path: '/about',
        //     component: aboutPage
        // },
    ]
}

const router = createRouter(routerOptions)

app.use(router)
app.mount('#app')
