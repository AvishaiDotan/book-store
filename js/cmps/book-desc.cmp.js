export default {
    props: ['description'],
    template:`
        <section>
            <h3 v-if="!isDescExpanded"> {{getSubstring}}</h3>
            <h3 v-else> {{description}}</h3>
            <div className="actions-container">
                <button @click.stop="isDescExpanded = true">Read More</button>
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
        getSubstring() {
            return this.description.substring(0, 100)
        }
    },
}