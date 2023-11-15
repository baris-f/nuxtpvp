<template>
    <div class="list-element">
        <div class="skeleton-animation img" src="" />
        <div style="display:flex;flex-direction: column; justify-content: space-evenly;">
            <div class="skeleton-animation" style="border-radius: 10px; width: 100px;height: 12px;"></div>
            <div class="skeleton-animation" style="border-radius: 10px; width: 80px;height: 8px;"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: auto 6px auto 6px;
}

.list-element {
    display: flex;
    background-color: white;
    border-radius: 10px;
    height: 41px;
}
</style>