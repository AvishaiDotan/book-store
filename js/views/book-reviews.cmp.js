import { bookService } from "../services/book.service.js"

import bookReview from "../cmps/book-review.cmp.js"

export default {
    template: `
            <section v-if="book" class="book-review">
                <div className="add-review">
                    <form @submit="saveReview">
                        <input v-model="review.name" type="text"/>
                        <label>
                            Rate
                            <select v-model="review.rate">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <input v-model="review.date" type="date"/>
                        <textarea v-model="review.txt" cols="30" rows="10"></textarea>
                        <button>Submit!</button>
                    </form>
                </div>

                <div class="reviews">
                    <ul>
                        <li v-for="review in book.reviews" :key="review.id">
                            <book-review @update-book="updateBook" :review="review" :bookId="book.id"/>
                        </li>
                    </ul>
                </div>
            </section>
    `,
    data() {
        return {
            review: this.getEmptyReview(),
            book: null,
        }
    },
    methods: {
        saveReview() {
            bookService.addReview(this.book.id, this.review) 
                .then(book => this.book = book)
                .catch(() => {
                    bookService.get(id).then(book => { this.book = book })
                })     
        },
        getEmptyReview() {
            return {
                name: '',
                rate: '',
                date: '',
                txt: '',
            }
        },
        updateBook(book) {
            this.book = book
        }
    },
    created() {
        const id = this.$route.params.id
        bookService.get(id).then(book => { this.book = book })
    },
    components: {
        bookReview,
    }
}