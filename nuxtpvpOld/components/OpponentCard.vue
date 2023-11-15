<template>
    <div class="opponent-card">
        <div class="name text">{{ name }}</div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        default: "개똥이"
    },
})

</script>

<style scoped lang="scss">
.text {
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 24.2px;
    letter-spacing: 0em;
    text-align: left;
}

.name {
    height: 28px;
    width: fit-content;
    top: 192px;
    left: 15px;
    border-radius: 20px;
    padding: 3px 11px 0 11px;
    margin: 5px 0 0 3px;
    background: white;
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
    background: #AFAFAF;
    overflow: auto;
    margin: 0 auto 5px auto;
}
</style>