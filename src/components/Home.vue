<template>

<div class="container">
    <div class="row">
        <div class="col s12 m12">
            <h5>Welcome to Quote Central {{user.name}}!</h5>
            <br>
        </div>
        <div class="col s6 m6" id="block1">
            <div class="card light-green darken-1" v-for="quote in awful_quotes" :key="quote.id">
                <div class="card-content white-text">
                    <span class="card-title amber-text text-lighten-2">{{quote.author}}</span>
                    "{{quote.message}}"
                </div>
                <div class="card-action">
                    Submitted By <router-link :to="'/profile/' + quote.poster_id + '/' + quote.poster_name" class="white-text">{{quote.poster_name}}</router-link>
                    <button @click.prevent="add_favorite(quote.id)" class="btn-floating waves-effect waves-light nice red" name="action" type="submit"> <i class="material-icons">favorite</i></button>
                </div>
            </div>

        </div>

        <div class="empty col s1 m1"></div>

        <div class="col s5 m5 white" id="block2">
            <div class="favorites">
                <h5>Users' Picks</h5>
                <div class="card amber lighten-3" v-for="quote in favorite_quotes" :key="quote.id">
                    <div class="card-content orange-text text-darken-4">
                        <span class="card-title red-text">{{quote.author}}</span>
                        "{{quote.message}}"
                    </div>
                    <div class="card-action">
                        Submitted By <router-link :to="'/profile/' + quote.poster_id + '/' + quote.poster_name" class="grey-text text-darken-2">{{quote.poster_name}}</router-link>
                        <button @click.prevent="remove_favorite(quote.id)" class="btn-floating waves-effect waves-light nice red" name="action" type="submit"> <i class="material-icons">favorite</i></button>
                    </div>
                </div>           
            </div>
            <form @submit.prevent="addnewquote">
                <br>
                <h5>Contribute with a quote:</h5>
                Who said it: <input type="text" id="who" minlength="3" required v-model="quote_author">
                What they said: 
                <textarea cols="70" rows="80" minlength="10" required v-model="quote"></textarea>
                <input type="submit" class="btn yellow black-text" value="Post">
            </form>
        </div>

    </div>
</div>

</template>

<script>
import 'firebase/auth'
import firebase from 'firebase/app'
import { db } from '@/firebase'; 
import M from 'materialize-css'

export default {
    name: 'Home',
    data() {
        return {
            users: [],
            quote_author:'',
            quote: '',
            poster_name: '',
            poster_id: ''
        }
    },
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {
            direction: 'left'
            })
            console.log(instances);
        })
    },
    methods: {
        logout() {
            console.log('out of here');
            this.$store.dispatch('logout');
        },
        
        addnewquote() {
            var user = firebase.auth().currentUser;
            db.collection('quotes').add({
                author: this.quote_author,
                message: this.quote,
                favorite: false,
                poster_name: user.displayName,
                poster_id: user.uid
            });
            //empty form
            this.quote_author='',
            this.quote=''
        },

        add_favorite(id_quote){
            db.collection('quotes').doc(id_quote).update({
                favorite: true
            })
        },

        remove_favorite(id_quote){
            db.collection('quotes').doc(id_quote).update({
                favorite: false
            })
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        favorite_quotes(){
            return this.quotes.filter(quote => quote.favorite == true )
        },
        awful_quotes(){
            return this.quotes.filter(quote => quote.favorite == false)
        }
    },
    firestore() {           
        return {
            quotes: db.collection('quotes')
        }
    }

}
</script>

<style scoped>

.container{
    margin-top:20px;
    text-align: center;
    
}

#block1{
    max-height:950px;
    overflow-y:auto;
}

#block2{
    padding:1.5em;
    border-radius:8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card{
    border-radius: 20px;
    overflow:hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 2rem;
}

.btn{
    font-weight: bold;
    height:2.8rem;
    width:6rem;
    margin-top:1rem;
    border:2px solid white;
}

h6{
    margin-left:30em;
    opacity: 80%;
}

textarea{
    resize:none;
    border: 3px solid rgb(253, 219, 131);
    min-height: 8rem;
}

#who {
    border: 3px solid rgb(253, 219, 131);
}

</style>