<script setup>
import {ref,computed} from 'vue'
import CharacterContent from '../components/Characters/CharacterContent.vue';
import hiraganaCharacters from '../hiragana.json'
import katakanaCharacters from '../katakana.json'

const tabNames=['HIRAGANA','KATAKANA','KANJI']
const activeTab=ref(tabNames[0])

const hiraganaBanner={title:'Let’s learn Hiragana!',subTitle:'Get to know the main writing system in Japanese'}
const katakanaBanner={title:'Let’s learn Katakana!',subTitle:'Practice characters used for loanwords'}

const hiragana={characters:hiraganaCharacters,banner:hiraganaBanner}
const katakana={characters:katakanaCharacters,banner:katakanaBanner}

const currentCharacter=computed(()=>{
    if (activeTab.value === 'HIRAGANA') return hiragana
    if (activeTab.value === 'KATAKANA') return katakana
    if (activeTab.value === 'KANJI') return null
    
})
</script>

<template>
    <div class="characterView-wrapper">
        <div class="nav-wrapper">
            <ul>
                <li @:click="activeTab=name" :class="{ active:activeTab===name}" v-for="(name) in tabNames" :key="name">{{name}}</li>
            </ul>
        </div>
        <CharacterContent :alphabet="currentCharacter"/>
    </div>
</template>

<style scoped>
.nav-wrapper ul{
    display:flex;
}

.nav-wrapper li{
    flex:1;
    display:flex;
    justify-content: center;
    padding:20px 0;
    border-bottom: 2px solid var(--secondary-text-color);
    color:var(--secondary-text-color);
    cursor: pointer;
}

.nav-wrapper li.active{
    border-bottom: 2px solid var(--primary-link-color);
    color:var(--primary-link-color);
}

.nav-wrapper li:hover{
    border-bottom: 2px solid var(--primary-link-color);
    color:var(--primary-link-color);
}
</style>