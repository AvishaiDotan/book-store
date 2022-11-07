import { eventBus } from '../services/event-bus.service.js'

export default {
    template:`
        <label> 
            <input v-model="filterBy.title" type="search" placeholder="Search"/>
            <input v-model="filterBy.price" type="range" :max="300" :min="1" />
            <button @click.stop="setFilter" >Search</button>
        </label>
    `,
    data(){
        return {
           filterBy: {title: '', price: ''},
        }
    },
    methods: {
        setFilter() {
            eventBus.emit('set-filter', this.filterBy)
        }
    },

}