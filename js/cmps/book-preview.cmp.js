export default {
    props:['book'],
    template:`

        <article>
            <h3>{{book.title}}</h3>
            <img :src="book.thumbnail"/>
            <p>
                <span>{{getAmount}}</span>
                <span>{{getCurrency}}</span>
            </p>
        </article>

    `,
    data(){
        return {
           
        }
    },
    computed:{
        getAmount() {
            const amount = this.book.listPrice.amount
            return `${amount}`
        },
        getCurrency() {
            const currency = this.book.listPrice.currencyCode
            return `${this.getCurrencyIcon(currency)}`
        }
    },
    methods: {
        getCurrencyIcon(currency) {
            switch (currency) {
                case 'EUR':
                    return '€'
                case 'ILS':
                    return '₪'
                case 'USD': 
                    return '$'
                default: 
                    return '$'
            }
        }
    }
}