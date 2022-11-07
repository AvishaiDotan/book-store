import { bookService } from '../services/book.service.js'
import { eventBus } from '../services/event-bus.service.js'

import bookList from '../cmps/book-list.cmp.js'

export default {
    template:`
            <book-list :books="booksToShow"/>
    `,
    data(){
        return {
            books: null,
            selectedBook: null,
            filterBy: {}
        }
    },
    created() {
        bookService.query().then(books => {
            this.books = books

        }),
        eventBus.on('set-filter', filter => {
            this.filterBy = filter  
        })
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book
        },
        closeBookDetails() {
            this.selectedBook = null
        },
        deleteBook() {
            const id = this.selectedBook.id
            this.selectedBook = null
            bookService.remove(id)
            // this.books = bookService.query()
        }
    },
    computed: {
        booksToShow(){
            if (!this.filterBy.price) return this.books
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(({title, listPrice: {amount}}) => regex.test(title) && (amount <= this.filterBy.price))
        }
    },
    components: {
        bookList,
    },

}