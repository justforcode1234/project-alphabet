<script></script>
<template>
    <div class="container">
        <div class="sub-container card flex">
            <div class="right-container flex-column">
                <div class="section-container flex">
                    <a href=""><img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/e013fd27fc6bd1d2fea85fe707b615cd.svg" alt=""></a>
                    <p>SECTION 1,UNIT 1</p>
                </div>
                <h3>Order food</h3>
            </div>
            <div class="left-container">
                    <button class="flex"><img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/5b531828e59ae83aadb3d88e6b3a98a8.svg" alt="">GUIDEBOOK</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    position: sticky;
    top:0;
    z-index: 20;
    background-color: var(--bg-color);
    padding-top:20px;
}
.sub-container{
    justify-content: space-between;
    align-items: center;
    background-color: var(--duo-green-color);
    border-radius: 15px;
    min-height: 90px;
}

.section-container{
    gap:10px;
}

.right-container{
    gap:10px;
}

button{
    padding:10px;
    border-radius: 15px;
    border:2px solid gray;
    background-color: transparent;
    align-items: center;
    gap:10px;
    box-shadow: 0 2px 0 gray;
}
</style>