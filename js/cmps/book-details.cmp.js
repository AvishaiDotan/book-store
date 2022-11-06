import bookDesc from "./book-desc.cmp.js"

export default {
    props: ['book'],
    template:`
        <section :class="getStyleByPrice" class="book-details">
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
                <p><strong>Pages</strong> {{ getBookLength }}</p>
                <p><strong>Category</strong> {{ getBookCategories }}</p>
                <p><strong>Published Date</strong> {{ getBookPublishedDate }}</p>
                <p><strong>Language</strong> {{ book.language }}</p>   
                <book-desc @close="$emit('close')" @click="$emit('delete')" :description="book.description"/>
            </div>
        </section>

    `,
    data(){
        return {
           
        }
    },
    computed:{
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
            const {amount} = this.book.listPrice
            // const currency = this.book.listPrice.currency

            // this.getPriceInDollars(amount, currency)

            return {
                red: (amount > 150),
                green: (amount < 20)
            }
        },
    },
    methods: {
        getPriceInDollars(amount, currency) {
                switch (currency) {
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
        },
        components: {
            bookDesc,
        }

    
}