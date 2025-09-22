<script setup></script>
<template>
    <div class="quest-container">
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg" alt="">
        <div class="detail-container">
            <h4>Earn 10 XP</h4>
            <div class="progress-container">
                <div>0/10</div>
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg" alt="">
            </div>
        </div>
    </div>
</template>
<style>

.quest-container{
    display:flex;
    gap:10px;
}

.quest-container img{
    max-width: 50px;
}

.detail-container{
    flex:1fr;
    width:100%;
}

.progress-container{
    display:flex;
    align-items: center;
    gap:3px;
    margin-top:5px;
}

.progress-container div{
    width:100%;
    background-color: gray;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
}
</style>