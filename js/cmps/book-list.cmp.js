
import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template:`
        <ul class="book-list">
            <li v-for="book in books" :key="book.id">
                <book-preview :book="book" @click="$emit('select-book', book)"/>
            </li>
        </ul>
    `,
    components: {
        bookPreview,
    }

}