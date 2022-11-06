import { bookService } from '../services/book.service.js'

import bookList from './book-list.cmp.js'
import bookDetails from "./book-details.cmp.js"

export default {
    props: ['filterBy'],
    template:`
        <main>
            <book-list v-if="!selectedBook" @select-book="selectBook" :books="booksToShow"/>
            <book-details v-else="selectedBook" class="book-details" @close="closeBookDetails" @click="deleteBook" :book="selectedBook"/>
        </main>
    `,
    data(){
        return {
            books: null,
            selectedBook: null,
        }
    },
    created() {
        this.books = bookService.query()
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book
        },
        closeBookDetails() {
            this.selectedBook = null
        },
        deleteBook() {
            const {id} = this.selectedBook
            this.selectedBook = null
            bookService.remove(id)
            this.books = bookService.query()
        }
    },
    computed: {
        booksToShow(){
            const regex = new RegExp(this.filterBy.name, 'i')
            let books =  this.books.filter(book => regex.test(book.title))
            return books.filter(book => book.listPrice.amount <= this.filterBy.price)

        }
    },
    components: {
        bookList,
        bookDetails, 
    },

}