export default {
    props: ['book'],
    template:`
        <section :class="getStyleByPrice">
            <img v-if="book.listPrice.isOnSale" :src="getDiscountIcon"/>
            <h3>{{ book.title }}</h3>
            <p>{{ book.subtitle }}</p>
            <p>{{ getAuthors }}</p>
            <p>{{ getBookLength }}</p>
            <p>{{ getBookPublishedDate }}</p>
            <p>{{ book.language }}</p>    
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
            const amount = this.book.listPrice.amount
            const currency = this.book.listPrice.currency

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

    
}