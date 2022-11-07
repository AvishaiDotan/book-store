
import booksFilter from "./books-filter.cmp.js"



export default {
    template:`
        <header>
            <div>
                <router-link to="/">
                    <div>
                        <img :src="getIcon">
                        <h1>Miss's Book Shop</h1>
                    </div>
                </router-link>
                <books-filter class="full"/>
                <router-link to="/book">Book Gallery</router-link>
                <router-link to="/about">About</router-link>
                
            </div>
        </header>
    `,
    computed: {
        getIcon() {
            return `../img/icons/open-book.png`
        }
    },
    components: {
        booksFilter,
    }
}