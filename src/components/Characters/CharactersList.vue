<script setup>
import Character from './Character.vue';
import {ref,provide} from 'vue'

let selectedCharactersList=ref([])

const props=defineProps({
    characters:{
        required:true
    }
})

provide('selectedCharactersList',selectedCharactersList)
const handleSelectedCharacter=(character)=>{
    const index = selectedCharactersList.value.findIndex(c => c.id === character.id)
    console.log(selectedCharactersList.value.findIndex(c => c.id === character.id))
}

</script>

<template>
    <div class="characterList-wrapper">
        <Character v-for="character in characters" :key="character.id" :character="character" @selectedCharacter="handleSelectedCharacter"/>
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