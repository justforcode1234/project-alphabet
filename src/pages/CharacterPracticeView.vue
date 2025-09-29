<script setup>
import CharacterPractice from '../components/Characters/CharacterPractice.vue'
import CharactersList from '../components/Characters/CharactersList.vue'
import hiragana from '../hiragana.json'

import {ref,provide} from 'vue'

let selectedCharactersList=ref([])

let isStarted=ref(false)
provide('selectedCharactersList',selectedCharactersList)
provide('isStarted',isStarted)

const handleClick=()=>{
    isStarted.value=!isStarted.value
}
</script>

<template>
    <div class="characterPractice-wrapper">
        <CharactersList v-if="!isStarted" :characters="hiragana" :select-mode="true"/>
        <CharacterPractice v-else/>
        <button v-show="!isStarted" @click="handleClick" class="start-button unselectable">Start</button>
    </div>
</template>

<style scoped>
.characterPractice-wrapper{
    position: relative;
}

.start-button{
    position: sticky;
    bottom: 0;
    left:100%;
    background-color: var(--duo-green-color);
    height:70px;
    width:60px;
    border-radius: 15px;
}

</style>