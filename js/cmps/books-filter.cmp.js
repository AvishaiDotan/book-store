export default {
    template:`
        <label @input.prevent="setFilter($event)" @submit.prevent="setFilter($event)"> 
            <input type="search" placeholder="Search"/>
            <input type="range" :max="300" :min="1" :value="300"/>
            <button>Search</button>
        </label>
    `,
    data(){
        return {
           filterBy: {name: '', price: ''},
        }
    },
    methods: {
        setFilter(ev) {
            if (ev.target.type === "search") this.filterBy.name = ev.target.value
            if (ev.target.type === "range") this.filterBy.price = +ev.target.value
            this.$emit('set-filter', this.filterBy)
        }
    }
}