<script setup>
import CharactersList from '../components/Characters/CharactersList.vue'
import hiragana from '../hiragana.json'
// let practiceCharacters=[]
// let tempCharacters=[]
// for (let i = 1; i <= hiragana.length; i++) {
//     tempCharacters.push(hiragana[i-1])
//     if(i%5==0){
//         practiceCharacters.push(tempCharacters)
//         tempCharacters=[]
//     }  
// }
</script>

<template>
    <div class="characterPractice-wrapper">
        <CharactersList :characters="hiragana"/>
        <button class="start-button unselectable">Start</button>
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