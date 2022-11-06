export default {
    props: ['description'],
    template:`
        <section>
            <h3 v-if="!isDescExpanded"> {{getSubstring}}</h3>
            <h3 v-else> {{description}}</h3>
            <div className="actions-container">
                <button @click="isDescExpanded = true">Read More</button>
                <button @click="isDescExpanded = true">Close</button>
                <button @click="isDescExpanded = true">Delete</button>
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
    unmounted() {
        this.isDescExpanded = false
    },
}