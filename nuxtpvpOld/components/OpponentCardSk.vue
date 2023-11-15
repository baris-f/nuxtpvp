<template>
    <div class="opponent-card skeleton-animation">
        <div class="name"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.name {
    height: 28px;
    width: 60px;
    top: 192px;
    left: 15px;
    border-radius: 20px;
    padding: 3px 11px 0 11px;
    margin: 5px 0 0 3px;
    background-color: white;
}

.opponent-card {
    width: 90%;
    @media (max-width: 1920px) {
        height: 10.5%;
    }
    height: 13.5%;
    top: 189px;
    left: 10px;
    border-radius: 20px;
    overflow: auto;
    margin: 0 auto 5px auto;
}
</style>