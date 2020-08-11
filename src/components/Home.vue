<template>

<div class="container">

    <div class="card red white-text">
        <div class="card-title"> 
            <h2>Welcome! {{user}} </h2>
        </div>
        <div class="card-body text-justify">

            <p> Aliquam accumsan ornare ex, vitae mollis tortor aliquam eu. Duis sodales tristique tortor ac dignissim. Cras cursus sapien eget tempus volutpat. Mauris lacinia tincidunt dui, at ultrices ante faucibus ac. Donec consequat finibus porta. Quisque efficitur quis ipsum et efficitur. Suspendisse vitae ante quam. In iaculis, turpis quis maximus porta, mauris mauris rhoncus turpis, eget suscipit eros est id urna. Pellentesque lorem purus, aliquet ac commodo non, auctor quis odio. Phasellus pellentesque diam et ipsum tincidunt, quis pretium urna ultricies. </p>

            <p>Morbi vel ipsum vel augue sodales vulputate euismod et lectus. Aenean non volutpat orci, at auctor tortor. Aliquam erat volutpat. Ut volutpat, mauris ac fringilla maximus, lorem nulla laoreet nulla, ut lacinia tortor sapien tempor leo. </p>
        </div>
        <div class="card-footer"><button class=" yellow btn-floating btn" @click="logout"><i class="large material-icons red">pest_control_rodent</i></button></div>
    
    </div>

</div>

</template>

<script>
import { db } from '../firebase';  //link to the firebase databank 

export default {
    name: 'Home',
    data() {
        return {
            users: []
        }
    },
    methods: {
        logout() {
            console.log('out of here')
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
    border-radius: 200px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-body{
    padding:0.5em;
}

.btn{
    margin:20x;
    height:2.8rem;
    width:2.8rem;
    border:2px solid white;
}

</style>