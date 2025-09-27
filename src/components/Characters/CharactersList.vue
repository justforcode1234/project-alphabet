<script setup>
import Character from './Character.vue';
const props=defineProps({
    characters:{
        required:true
    }
})
</script>

<template>
    <div class="characterList-wrapper">
        <Character v-for="character in characters" :key="character.id" :character="character"/>
    </div>
</template>

<style scoped>
.characterList-wrapper{
    padding:0 30px;
    display:grid;
    grid-template-columns: repeat(5,minmax(60px,85px));
    gap:10px;
    justify-content: center;
}
</style>