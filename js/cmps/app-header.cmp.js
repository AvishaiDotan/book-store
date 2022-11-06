import booksFilter from "./books-filter.cmp.js"


export default {
    template:`
        <header>
            <div>
                <div>
                    <img :src="getIcon">
                    <h1>Miss's Book Shop</h1>
                </div>
                <books-filter @set-filter="(filterBy) => {$emit('set-filter', filterBy)}" class="full"/>
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