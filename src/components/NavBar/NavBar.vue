<script setup>
import logo from "../../assets/images/logo.png"
import { useRoute } from "vue-router";

const isActiveLink=(routePath)=>{
    const route=useRoute();
    return route.path===routePath;
}
</script>

<template>
<div class="nav-container">
    <div class="logo-container">
        <img :src="logo" alt="" class="logo">
    </div>
    <ul class="nav-list">

        <router-link to="/learn">
            <li :class="{'active':isActiveLink('/learn') || isActiveLink('/')}"><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">LEARN</li>
        </router-link>

        <router-link to="/characters">
            <li :class="{'active':isActiveLink('/characters')}" ><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/80a60f598d6a6b0493aeb4d7b93fc0e3.svg" alt="">CHARACTERS</li>
        </router-link>

        <router-link to="/practice">
            <li :class="{'active':isActiveLink('/practice') || isActiveLink('/character-practice')}"><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/5187f6694476a769d4a4e28149867e3e.svg" alt="">PRACTICE</li>
        </router-link>

        <router-link to="/">
            <li :class="{'active':isActiveLink('/404')}"><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg" alt="">LEADERBOARD</li>
        </router-link>

        <router-link to="/">
            <li :class="{'active':isActiveLink('/404')}"><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" alt="">MORE</li>
        </router-link>
    </ul>
</div>
</template>

<style scoped>
.nav-container{
    padding:0 10px;
    border-right:2px solid var(--primary-border-color);
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    width:250px;
    z-index: 10;
}

.logo-container{
    height:100px;
    display:flex;
    align-items: center;
    margin-bottom: 15px;
    padding:0 10px;
}
.logo{
    max-width: 150px;
    cursor: pointer;
}

.nav-list{
    display:flex;
    flex-direction: column;
    gap:5px;
}

.nav-list li{
    display:flex;
    align-items: center;
    gap:20px;
    padding:10px;
    cursor: pointer;
    border-radius: 10px;
    font-size:13px;
    font-weight: 800;
}

.nav-list li.active{
    border:2px solid var(--primary-active-color);
    color:var(--primary-link-color);
}

.nav-list li:hover{
    background-color: gray;
}

.nav-list li.active:hover{
    background-color: transparent;
}

.nav-list li img{
    max-width:35px;
}

</style>