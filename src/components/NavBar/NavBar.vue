<script setup>
import logo from "../../assets/images/logo.png"
</script>

<template>
<div class="nav-container">
    <div class="logo-container">
        <img :src="logo" alt="" class="logo">
    </div>
    <ul class="nav-list">
        <li class="active"><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">Learn</li>
        <li><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">Learn</li>
        <li><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">Learn</li>
        <li><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">Learn</li>
        <li><img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" alt="">Learn</li>
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
    gap:10px;
    padding:10px;
    cursor: pointer;
    border-radius: 10px;
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

</style>