
export default {
    template:`
        <header>
            <div>
                <img :src="getIcon">
                <h1>Miss's Book Shop</h1>
            </div>
        </header>
    `,
    computed: {
        getIcon() {
            return `../img/icons/open-book.png`
        }
    }
}