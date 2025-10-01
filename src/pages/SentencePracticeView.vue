<script setup>
import {ref,watch} from 'vue'
import sentences from '../sentences.json'

const getFiveRandom=(arr)=> [...arr].sort(() => Math.random() - 0.5).slice(0, 5);
const shuffledSentences=ref(sentences.sort(() => Math.random() - 0.5))
let currentSentence=ref(shuffledSentences.value[0])
let answerCharacters=ref([])
let scrambledCharacters=ref(shuffledSentences.value.map(sentence => sentence['en-sentence'].split(" ")).flat())
let currentScrambledCharacters=ref([...currentSentence.value['en-sentence'].split(" "),...getFiveRandom(scrambledCharacters.value)].sort(() => Math.random() - 0.5))

const handleInputClick=(character,index)=>{
    currentScrambledCharacters.value.splice(index, 1);
    answerCharacters.value = [...answerCharacters.value, character]; 
}

const handleAnswerClick=(character,index)=>{
    answerCharacters.value.splice(index, 1);
    currentScrambledCharacters.value = [...currentScrambledCharacters.value, character];
}

watch(answerCharacters,(currentValue)=>{
    if(currentValue==='') return
    if(answerCharacters.value.join(' ')===currentSentence.value['en-sentence']){
        shuffledSentences.value.shift();
        currentSentence.value=shuffledSentences.value[0]
        scrambledCharacters.value=shuffledSentences.value.map(sentence => sentence['en-sentence'].split(" ")).flat()
        currentScrambledCharacters.value=[...currentSentence.value['en-sentence'].split(" "),...getFiveRandom(scrambledCharacters.value)].sort(() => Math.random() - 0.5)
        answerCharacters.value=[]
    }
})
</script>

<template>
    <div class="sentencePractice-wrapper flex-column">
        <div class="sentenceHeader-container">
        </div>
        <div class="sentenceMain-container flex-column">
            <h1>Write this in English</h1>
            <div class="japaneseSentence-section flex-column">
                <p>{{ currentSentence['jp-sentence'] }}</p>
                <p>{{ currentSentence['romanji-sentence'] }}</p>
            </div>
            <div class="answerSentence-container answer-container">
                <button class="button" @click="handleAnswerClick(character,index)" v-for="(character,index) in answerCharacters" :key="index">{{ character }}</button>
            </div>
            <div class="inputSentence-container answer-container">
                <button class="button" @click="handleInputClick(character,index)" v-for="(character,index) in currentScrambledCharacters" :key="index">{{ character }}</button>
            </div>
        </div>
        <div class="sentenceFooter-container flex">
            <button>Skip</button>
            <button>Check</button>
        </div>
    </div>
</template>

<style scoped>
.sentencePractice-wrapper{
    height:100vh;
}

.sentenceMain-container{
    gap:20px

}

.japaneseSentence-section{
    align-items: center;
    align-self:center;
    min-width: 250px;
    min-height: 50px;
    border:2px solid var(--primary-border-color);
    border-radius:15px;
    padding:5px 0;
}
.answerSentence-container{
    border-top: 2px solid var(--primary-border-color);
    border-bottom: 2px solid var(--primary-border-color);
    min-height: 60px;
    align-items: center;
    padding:0 5px;
}

.inputSentence-container{
    padding:0 20px;
}

.answer-container{
    display:flex;
    gap:5px;
}

.sentenceFooter-container{
    margin-top:auto;
    border-top:3px solid var(--primary-border-color);
    padding:10px;
    justify-content: space-between;
}
</style>