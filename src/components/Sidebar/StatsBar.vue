<script setup></script>
<template>
    <div class="container">
        <ul class="icon-list">
            <li><svg viewBox="0 264 82 66" data-test="flag-ja" style="height: 28.9756px; width: 36px;"><image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg></li>
            <li><img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/65b8a029d7a148218f1ac98a198f8b42.svg" alt="">10</li>
            <li><img src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="">300</li>
            <li><img src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg" alt="">5</li>
        </ul>
    </div>
</template>

<style>

.icon-list{
    display:flex;
    justify-content: space-between;
}

.icon-list li{
    min-width: 70px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    border-radius: 10px;
    padding:10px;
}

.icon-list li:hover{
    background-color: gray;
}

</style>