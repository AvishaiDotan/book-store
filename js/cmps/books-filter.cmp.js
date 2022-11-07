export default {
    template:`
        <label @input.prevent="setFilter($event)"> 
            <input type="search" placeholder="Search"/>
            <input type="range" :max="300" :min="1" :value="300"/>
            <button @click.stop="$emit('set-filter', this.filterBy)" >Search</button>
        </label>
    `,
    data(){
        return {
           filterBy: {title: '', price: ''},
        }
    },
    methods: {
        setFilter(ev) {
            if (ev.target.type === "search") this.filterBy.title = ev.target.value
            if (ev.target.type === "range") this.filterBy.price = +ev.target.value
        }
    }
}