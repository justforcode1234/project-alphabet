<script setup>
import StatsBarItem from './StatsBarItem.vue';
const statsBarItems=[
    {imgSrc:"https://d35aaqx5ub95lt.cloudfront.net/images/icons/65b8a029d7a148218f1ac98a198f8b42.svg",value:6,dataTest:'flag-ja',xlink:'https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg',barItem:{type:'course'}},
    {imgSrc:"https://d35aaqx5ub95lt.cloudfront.net/images/icons/65b8a029d7a148218f1ac98a198f8b42.svg",value:10,barItem:{type:'streak'}},
    {imgSrc:"https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg",value:300,barItem:{type:'gem'}},
    {imgSrc:"https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg",value:5,barItem:{type:'heart'}},
]
</script>
<template>
    <div class="container">
        <ul class="icon-list">
            <li v-for="(item,index) in statsBarItems" :key="index"><StatsBarItem :imgSrc="item.imgSrc" :value="item.value" :data-test="item.dataTest" :xlink:href="item.xlink" :barItem="item.barItem"/></li>
        </ul>
    </div>
</template>

<style scoped>

.icon-list{
    display:flex;
    justify-content: space-between;
}

</style>