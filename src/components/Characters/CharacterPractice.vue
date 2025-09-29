<script setup>
import { ref,watch,inject } from 'vue';
let characters=inject('selectedCharactersList')
characters.value.sort(() => Math.random() - 0.5);

let isStarted=inject('isStarted')
const inputCharacter=ref('')
let displayCharacter=ref('')

const handleClick=()=>{
    isStarted.value=!isStarted
}

watch(inputCharacter,(currentValue)=>{
    if(currentValue==='') return
    if(characters.value.length && currentValue===characters.value[0].english){
        displayCharacter.value=characters.value[0].japanese
        characters.value.splice(0,1)
        inputCharacter.value=''
    }
})

</script>

<template>
    <div class="characterPractice-wrapper flex-column">
        <div class="practiceDisplay-container flex">
            {{ characters.length? characters[0].japanese : displayCharacter}}
        </div>
        <div class="practiceFooter-container flex">
            <div class="practiceScore-container flex">
                <div class="subScore-container">
                    <span class="score-title">Accuracy</span>
                    <span>0%</span>
                </div>
                <div class="subScore-container" style="border-right: 1px solid var(--primary-active-color);border-left:1px solid var(--primary-active-color);">
                    <span class="score-title">Remaining</span>
                    <span>{{ characters.length }}</span>
                </div>
                <div class="subScore-container">
                    <span class="score-title">Incorrect</span>
                    <span>0/1</span>
                </div>
            </div>
            <input type="text" placeholder="Type Phonetic English" v-model="inputCharacter">
            <button @click="handleClick"> Reveal Answer</button>
        </div>
    </div>
</template>

<style scoped>
.characterPractice-wrapper{
    padding-top:100px;
}

.practiceDisplay-container{
    font-size: 100px;
    min-height: 250px;
    align-items:center;
    justify-content: center;
}

.practiceFooter-container{
    justify-content: space-between;
    gap:20px;
    padding:10px 0;
}

.practiceFooter-container input{
    border-radius: 30px;
    flex:1;
    padding:0 10px;
}

.practiceFooter-container input::placeholder{
    text-align: center;
}

.practiceScore-container{
    gap:5px;
    border:2px solid var(--primary-active-color);
    border-radius: 30px;
    padding:5px 10px;
}

.subScore-container{
    display:flex;
    flex-direction: column;
    gap:5px;
    padding:0 10px;
    align-items: center;
}

.subScore-container .score-title{
    font-size: 10px;
}

.practiceFooter-container button{
    border-radius:30px;
    background-color: var(--primary-link-color);
    padding:0 20px;
}
</style>