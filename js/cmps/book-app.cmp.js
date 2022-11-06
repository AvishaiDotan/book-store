import { bookService } from '../services/book.service.js'

import bookList from './book-list.cmp.js'
import bookDetails from "./book-details.cmp.js"

export default {
    template:`
        <book-list @select-book="selectBook" :books="books"/>
        <book-details v-if="selectedBook" :book="selectedBook"/>
    `,
    data(){
        return {
            books: null,
            selectedBook: null
        }
    },
    computed:{
    },
    methods: {
        selectBook(id) {
            this.selectedBook = this.getBookById(id)
        },
        getBookById(id) {
            return this.books.find(book => book.id === id)
        }
    },
    components: {
        bookList,
        bookDetails, 
    },
    created() {
        this.books = bookService.query()
    },
}