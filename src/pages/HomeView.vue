<script setup>
import { computed } from 'vue';
import CharactersPage from './CharactersView.vue';
import LearnPage from './LearnView.vue';

const page='characters'
const pageMap={
    learn:LearnPage,
    characters:CharactersPage,
}

const currentPage=computed(()=>pageMap[page] || null)
</script>

<template>
<div class="homePage-wrapper">
    <div class="content-container">
        <component :is="currentPage"/>
    </div>
</div>
</template>

<style scoped>
.homePage-wrapper{
    margin-right:50px;
}

.content-container{
    position: relative;
    max-width: 80%;
    margin-left: auto;
    height:100%;
    margin-top:20px;
}

</style>