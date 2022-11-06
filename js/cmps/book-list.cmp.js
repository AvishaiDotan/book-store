
import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template:`
        <ul>
            <li v-for="book in books" :key="book.id">
                <book-preview :book="book" @click="$emit('select-book', book.id)"/>
            </li>
        </ul>
    `,
    data(){
        return {
        }
    },
    methods: {
    },
    components: {
        bookPreview,
    }

}