
import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template:`
        <ul class="book-list">
            <li v-for="book in books" :key="book.id">
                <book-preview :book="book" @click="selectBook(book.id)"/>
            </li>
        </ul>
    `,
    methods: {
        selectBook(bookId) {
            this.$router.push(`/book/${bookId}`)
        }
    },
    components: {
        bookPreview,
    }

}