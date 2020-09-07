<template>
    <div class="container" v-if="user">
        <div class="row">
            <div class="main">
                <h3>Quotes Submitted By {{$route.params.name}}</h3>

                <div class="card light-yellow darken-1" v-for="quote in user_quotes" :key="quote">
                    <div class="card-content">
                        <h5 class="card-title red-text">{{quote.author}}</h5> said: "{{quote.message}}"
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import 'firebase/auth'
import { db } from '@/firebase'

export default {
    name: 'Profile',
    data() {
        return {
            quote: []
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },  
        user_quotes(){
            const id= this.$route.params.id
            return this.quotes.filter(quote => quote.poster_id == id)
        }         
    },
    firestore() {           
        return {
            quotes: db.collection('quotes')
        }
    }


}
</script>

<style>

</style>