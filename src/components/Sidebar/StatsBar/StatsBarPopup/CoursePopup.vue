<script setup>

</script>

<template>
    <div class="coursePopup-container flex-column">
        <div class="sub-container">
            <h4>MY COURSES</h4>
        </div>
        <div class="sub-container subFlag">
            <svg viewBox="0 264 82 66" data-test="flag-ja" style="height: 28.9756px; width: 36px;"><image href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" xlink:href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image></svg>
            <p style="color:var(--primary-link-color)">Japanese</p>
        </div>
        <div class="sub-container">
            <div class="addCourse-icon">+</div>
            <p style="color:white">Add a new course</p>
        </div>
    </div>
</template>

<style scoped>
.coursePopup-container{
    min-width:300px;
    color:var(--secondary-text-color)
}
.sub-container{
    display:flex;
    padding:15px;
    gap:10px;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
}

.subFlag{
    background-color: var(--primary-border-color);
}

.addCourse-icon{
    border:1px solid gray;
    padding:2px 10px;
}

h4{
    font-size: small;
}


</style>