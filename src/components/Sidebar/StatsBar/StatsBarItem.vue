<script setup>
import PopupBox from './StatsBarPopup/PopupBox.vue';


defineProps({
    imgSrc:String,
    value:Number,
    dataTest:String,
    xlink:String,
    barItem:Object
})

</script>

<template>
    <div class="item-wrapper">
        <svg v-if="dataTest" viewBox="0 264 82 66" data-test="flag-ja" style="height: 28.9756px; width: 36px;"><image href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg>
        <img v-else :src="imgSrc" alt="">{{value}}
        <PopupBox :barItem="barItem"/>
    </div>
</template>

<style scoped>

.item-wrapper{
    min-width: 70px;
    position: relative;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    border-radius: 10px;
    padding:10px;
}

.item-wrapper:hover{
    background-color: gray;
}

.item-wrapper:hover .popup-container{
    display:block;
}

svg{
    height:30px;
    width:36px;
}

</style>