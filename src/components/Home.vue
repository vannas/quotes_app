<template>

<div class="container">

    <div class="card red white-text" v-if="user">
        <div class="card-title"> 
            <h2 v-if="user">Welcome {{ user.name }} !</h2>
        </div>
        <div class="card-body text-justify">

            <p> Aliquam accumsan ornare ex, vitae mollis tortor aliquam eu. Duis sodales tristique tortor ac dignissim. Cras cursus sapien eget tempus volutpat. Mauris lacinia tincidunt dui, at ultrices ante faucibus ac. Donec consequat finibus porta. Quisque efficitur quis ipsum et efficitur. Suspendisse vitae ante quam. In iaculis, turpis quis maximus porta, mauris mauris rhoncus turpis, eget suscipit eros est id urna. Pellentesque lorem purus, aliquet ac commodo non, auctor quis odio. Phasellus pellentesque diam et ipsum tincidunt, quis pretium urna ultricies. </p>

            <p>Morbi vel ipsum vel augue sodales vulputate euismod et lectus. Aenean non volutpat orci, at auctor tortor. Aliquam erat volutpat. Ut volutpat, mauris ac fringilla maximus, lorem nulla laoreet nulla, ut lacinia tortor sapien tempor leo. </p>
        </div>
        <div class="card-footer"><button class="yellow btn-floating btn" @click="logout"><i class="large material-icons red">pest_control_rodent</i></button></div>    
    </div>

    <div class="card s10 m10 post" v-if="user">
        <div class="row">
            <h6 class="">What's on your mind?</h6>
            <textarea name="user:input" id="user_input" cols="30" rows="10" class="col s8 m10" placeholder="Write a post">
                <!--no she-->
            </textarea>
                
            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card red the-wall" v-if="user">
        <div class="row">


        </div>
    </div>

</div>

</template>

<script>
import { db } from '../firebase';  //link to the firebase databank 
import M from 'materialize-css'

export default {
    name: 'Home',
    data() {
        return {
            users: [],
        }
    },
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {
            direction: 'left'
            })
            console.log(instances);
  });
    },
    methods: {
        logout() {
            console.log('out of here');
            this.$store.dispatch('logout');
        }    
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    firestore() {           // adding this key/function
        return {
            users: db.collection('users')
        }
    }

}
</script>

<style scoped>

.container{
    margin-top:60px;
    text-align: center;
    
}

.card{
    border-radius: 100px;
    padding:10px;
    overflow:hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-body{
    padding: 1em 2.5em 0.8em 2.5em;
}

.btn{
    
    height:2.8rem;
    width:2.8rem;
    border:2px solid white;
}

#user_input{
    margin-left:4.5em;
    height:6em;
    overflow:hidden;
    border-radius: 100px;
    padding:20px;
}

h6{
    margin-left:30em;
    opacity: 80%;
}

</style>