<script setup>
import Character from './Character.vue';
import {ref,inject} from 'vue'

const props=defineProps({
    characters:{
        required:true
    },
    selectMode:{
        default:false
    }
})

const selectedCharactersList=props.selectMode?inject('selectedCharactersList'):[]

const handleSelectedCharacter=(character)=>{
    const index = selectedCharactersList.value.findIndex(c => c.id === character.id)
    if (index === -1) {
        selectedCharactersList.value.push(character)
    } 
    else {
        selectedCharactersList.value.splice(index, 1)
  }
}

</script>

<template>
    <div class="characterList-wrapper">
        <Character v-for="character in characters" :key="character.id" :character="character" @selectedCharacter="handleSelectedCharacter" :selectMode="props.selectMode"/>
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