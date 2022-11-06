export default {
    props: ['description'],
    template:`
        <h3 v-if="!isDescExpanded"> {{getSubstring}}</h3>
        <h3 v-else> {{description}}</h3>
        <button @click="isDescExpanded = true">Read More</button>
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