<script setup>
import MainContent from './components/MainContent/MainContent.vue';
import NavBar from './components/NavBar/NavBar.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

</script>

<template>
    <div class="body-container">
        <NavBar/>
        <MainContent/>
        <Sidebar/>
    </div>
</template>

<style>
.body-container{
    display:grid;
    grid-template-columns: 250px minmax(400px,800px) 350px;
}

.main-container{
    grid-column: 2;
}

.side-container{
    grid-column: 3;
}
</style>