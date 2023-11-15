<template>
    <div class="card floating-center">
        <div class="top">
            <div class="profile-image skeleton-animation" />
            <div class="contain">
                <div class="dummy skeleton-animation"/>
                <div style="width: 80px;" class="dummy skeleton-animation"/>
            </div>
        </div>
        <div class="flex-center" style="margin-top: 13px;">
            <div style="margin-right: 6px;" class="button skeleton-animation"></div>
            <div class="button skeleton-animation"></div>
        </div>
        <el-divider style="margin-top: 11.25px;margin-bottom: 17.25px; border-color: #00000080;" />
        <div class="sk-links">
            <div class="dummy skeleton-animation"/>
            <div class="dummy skeleton-animation"/>
            <div class="dummy skeleton-animation"/>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    img: {
        type: String
    },
    name: {
        type: String,
    },
    at: {
        type: String,
    }
})

</script>

<style scoped lang="scss">
.profile-image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 11px auto 6px;
}

.top {
    display: flex;
}

.contain {
    display:flex; 
    flex-direction: column;
    justify-content: space-between;
}

.sk-links > div {
   width: 100%;
   margin-bottom: 10px;
}

.card {
    width: 303px;
    height: 264px;
    border-radius: 10px;
    padding: 22px 26px 22px 26px;
    background-color: white;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
}

.button {
    width: 120px;
    height: 25px;
    border-radius: 2px;
    font-family: Inter;
    font-size: 13px;
    font-weight: 700;
    color: white;
}

</style>