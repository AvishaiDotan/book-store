import bookApp from "../cmps/book-app.cmp.js"
import appHeader from "../cmps/app-header.cmp.js"
import appFooter from "../cmps/app-footer.cmp.js"

const { createApp } = Vue

const app = createApp({
    template:`
        <app-header @set-filter="setFilter" class="main-layout full" />
        <book-app :filter-by="filterBy"/>
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
}).mount('#app')