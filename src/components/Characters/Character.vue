<script setup>
import {ref,inject} from "vue"
import useDragging from "../../utils/useDragging"

const props=defineProps({
    character:{required:true},
    selectMode:{default:false}
})

const selectedCharactersList=props.selectMode?inject('selectedCharactersList'):[]
const emit = defineEmits(['selectedCharacter'])
const buttonPressed=ref(false)
const {isDragging}=props.selectMode? useDragging():false



const clickHandler=()=>{
}

</script>

<template>
    <div @pointerdown="buttonPressed=true" @pointerup="buttonPressed=false" @pointerenter="isDragging && character.id && emit('selectedCharacter',character)" @click="clickHandler" class="character-wrapper flex-column unselectable" :class="{'empty-box':!character.id,'clicked':buttonPressed,'selected':selectedCharactersList.includes(character)}">
        <div>{{ character.japanese }}</div>
        <div>{{ character.english }}</div>
        <div v-if="character.id"><div :class="{'progress-bar':character.id}"></div></div>
    </div>
</template>

<style scoped>
.character-wrapper{
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding:5px 0 0 0;
    border:2px solid var(--primary-border-color);
    box-shadow: 1px 2px 1px var(--primary-border-color);
    cursor: pointer;
}

.character-wrapper div.progress-bar{
    width:50%;
    height:8px;
    background-color: var(--primary-border-color);
    border-radius: 15px;
}

.character-wrapper div{
    height:20px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
}

.character-wrapper.empty-box{
    background-color:rgb(32, 47, 54) ;
}

.character-wrapper.clicked{
 box-shadow: none
}

.selected{
    background-color: yellow;
    color:black;
}
</style>