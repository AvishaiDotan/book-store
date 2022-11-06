import { bookService } from '../services/book.service.js'

import bookList from './book-list.cmp.js'
import bookDetails from "./book-details.cmp.js"

export default {
    template:`
        <main>
            <book-list v-if="!selectedBook" @select-book="selectBook" :books="books"/>
            <book-details class="book-details" v-else="selectedBook" :book="selectedBook"/>
        </main>
    `,
    data(){
        return {
            books: null,
            selectedBook: null
        }
    },
    created() {
        this.books = bookService.query()
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book
        },
    },
    components: {
        bookList,
        bookDetails, 
    },

}