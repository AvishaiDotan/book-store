export default {
    props: ['description'],
    template:`
        <section>
            <h3>{{getDescString}}</h3>
            <div className="actions-container">
                <button @click.stop="toggleIsDescExpanded">{{ getBtnStr }}</button>
                <button @click.stop="$emit('close')">Close</button>
                <button @click="$emit('delete')">Delete</button>
            </div>
            
        </section>

    `,
    data(){
        return {
           isDescExpanded: false
        }
    },
    computed:{
        getDescString() {
            if (!this.isDescExpanded) return this.description.substring(0, 100)
            return this.description
        },
        getBtnStr() {
            if (!this.isDescExpanded) return 'Read More'
            return 'Read Less'
        }
    },
    methods: {
        toggleIsDescExpanded() {
            this.isDescExpanded = !this.isDescExpanded
        }
    },
}