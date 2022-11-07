import { bookService } from "../services/book.service.js"

import bookDesc from "../cmps/book-desc.cmp.js"

export default {
    template: `
        <section v-if="book" :class="getStyleByPrice" class="book-details">
            <div>
                <h3><strong>Title</strong> {{ book.title }}</h3>
                <div>
                    <img class="on-sale-icon" v-if="book.listPrice.isOnSale" :src="getDiscountIcon"/>
                    <img :src="book.thumbnail"/>
                </div>
            </div>
            <div class="details">
                <p><strong>Abstract</strong> {{ book.subtitle }}</p>
                <p><strong>Authors</strong> {{ getAuthors }}</p>
                <p><strong>Price</strong> {{ getPrice }}</p>
                <p><strong>Pages</strong> {{ getBookLength }}</p>
                <p><strong>Category</strong> {{ getBookCategories }}</p>
                <p><strong>Published Date</strong> {{ getBookPublishedDate }}</p>
                <p><strong>Language</strong> {{ book.language }}</p>   
                <book-desc :book="book"/>
                <div className="admin-actions">
                    <button @click.stop="returnToApp">Return</button>
                    <button @click.stop="deleteBook">Delete</button>
                </div>
            </div>
        </section>

    `,
    data() {
        return {
            book: null
        }
    },
    computed: {
        getAuthors() {
            return this.book.authors.map(author => `${author} `).join('')
        },
        getBookLength() {
            const pageCount = this.book.pageCount
            if (pageCount >= 500) return 'Long Reading'
            else if (pageCount >= 200) return 'Decent Reading'
            else if (pageCount < 200) return 'Light Reading'
        },
        getBookCategories() {
            return this.book.categories.map(category => `${category} `).join('')
        },
        getBookPublishedDate() {
            const publishedDate = 2022 - +this.book.publishedDate
            let publishedDateStr = publishedDate + ' years ago'

            if (publishedDate >= 10) publishedDateStr += ' - Veteran Book'
            if (publishedDate < 1) publishedDateStr += ' - New Book'

            return publishedDateStr
        },
        getDiscountIcon() {
            return `../img/icons/discount.png`
        },
        getStyleByPrice() {
            const { amount } = this.book.listPrice
            return {
                red: (amount > 150),
                green: (amount < 20)
            }
        },
        getPrice() {
            return Math.round(this.getPriceInDollars()) + '$'
        }
    },
    methods: {
        getPriceInDollars() {
            const { amount, currencyCode } = this.book.listPrice
            switch (currencyCode) {
                case 'EUR':
                    return amount * (5 / 3.4)
                case 'ILS':
                    return amount * (1 / 3.4)
                case 'USD':
                    return amount
                default:
                    return amount
            }
        },
        returnToApp() {
            this.$router.push(`/book`)
        },
        deleteBook() {
            bookService.remove(this.book.id).then(
                this.returnToApp()
            )
        }
    },
    
    created() {
        const id = this.$route.params.id
        bookService.get(id).then(book => {this.book = book})   
    },

    components: {
        bookDesc,
    }


}