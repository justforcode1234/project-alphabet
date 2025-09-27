<script setup>
import { computed } from 'vue';
import CoursePopup from './CoursePopup.vue';
import GemPopup from './GemPopup.vue';
import HeartPopup from './HeartPopup.vue';
import StreakPopup from './StreakPopup.vue';


const {barItem}=defineProps({
    barItem:Object
})

const typeMap={
    course:CoursePopup,
    gem:GemPopup,
    heart:HeartPopup,
    streak:StreakPopup,
}
 
const contentType=computed(()=>typeMap[barItem.type] || null)

</script>
<template>
    <div class="popup-container">
        <component :is="contentType"/>
    </div>
</template>
<style scoped>
.popup-container{
    display:none;
    position: absolute;
    top:110%;
    border:2px solid var(--primary-border-color);
    border-radius:15px;
    background-color: var(--bg-color);
    z-index:20;
}

</style>