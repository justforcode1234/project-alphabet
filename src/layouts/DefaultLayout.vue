<script setup>
import NavBar from '../components/NavBar/NavBar.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
</script>

<template>
<div class="body-container">
        <NavBar/>
        <div class="homePage-wrapper">
            <div class="content-container">
                <router-view/>
            </div>
        </div>
        <Sidebar/>
    </div>
</template>

<style scoped>
.body-container{
    display:grid;
    grid-template-columns: 250px minmax(400px,800px) 350px;
}

.homePage-wrapper{
    grid-column: 2;
    margin-right:50px;
}

.content-container{
    position: relative;
    max-width: 80%;
    margin-left: auto;
    height:100%;
    margin-top:20px;
}

.side-container{
    grid-column: 3;
}
</style>