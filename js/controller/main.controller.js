import bookApp from "../cmps/book-app.cmp.js"
import appHeader from "../cmps/app-header.cmp.js"
import appFooter from "../cmps/app-footer.cmp.js"

const { createApp } = Vue

const app = createApp({
    template:`
        <app-header class="main-layout full" />
        <book-app/>
        <app-footer/>
    `,
    data() {
        return {
            
        }
    },
    methods: {
    },
    computed:{
    },
    components: {
        bookApp,
        appHeader,
        appFooter
    }
}).mount('#app')