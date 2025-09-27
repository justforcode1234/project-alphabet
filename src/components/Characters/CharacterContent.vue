<script setup>
import CharactersLearnBanner from './CharactersLearnBanner.vue';
import CharactersList from './CharactersList.vue';

const props=defineProps({
    alphabet:{
        required:false
    }
})
</script>

<template>
    <div v-if="!props.alphabet" style="text-align: center; margin-top:50px">
        COMING SOON!
    </div>
    <div v-else class="charactersContent-wrapper flex-column">
        <CharactersLearnBanner :banner="props.alphabet.banner" />
        <CharactersList :characters="props.alphabet.characters" />
        <div class="bar"></div>
    </div>
</template>

<style scoped>
.charactersContent-wrapper{
    padding:20px;
    gap:20px;
}

.bar{
    background-color: var(--primary-border-color);
}
</style>