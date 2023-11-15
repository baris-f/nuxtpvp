<template>
    <div class="panel floating-left" :style="{ transform : panelActive ? 'translateX(-100%)' : 'translateX(0px)' }">
        <el-button @click="togglePanel" class="burger" color="#373737" round :style="{ transform : panelActive ? 'translate(110%, 10%)' : 'translate(-10%, 10%)' }">
            <IconBars color="#FFFFFF" width="22" height="22"/>
        </el-button>
        <div class="container">
            <OpponentCard v-if="!pending" v-for="(elem, index) in opponents" :key="index" v-bind=elem />
            <OpponentCardSk v-else v-for="elem in [1]"/>
        </div>
        <nuxt-link style="width: 100%;display: flex;" to="/">
            <el-button @click="usePvp().matchReset();" class="close-button" color="#FF7414">
                나가기
            </el-button>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User } from "@/scripts/typesPvp"

const panelActive= ref(true)

const props = defineProps({
    desc: {
        type: String,
        default: "상대를 찾고 있습니다 ...."
    },
    opponents: Array<User>,
    active: Boolean,
    pending: {
        type: Boolean,
        default: false
    }

})

const togglePanel = () => {
    panelActive.value = !panelActive.value
}

</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;
}

.close-button {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    color: white;
    border-radius: 10px;
    margin: 0 auto 14px auto;
    width: 75%;
    height: 40px;
}

.burger {
    border-radius: 20px;
    width: 40px;
    height: 33px;
    position: absolute;
    top: 0%;
    right: 0%;
}

.container {
    flex-grow: 1;
    overflow-y:auto;
    height:400px;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.container::-webkit-scrollbar { 
    display: none;
}

.floating-left {
    position: fixed;
    bottom: 0%;
    left: 0%;
}

.panel {
    @media (max-width: 1920px) {
        width: 165px;
    }
    padding-top: 8vh;
    width: 220px;
    height: 100%;
    background: #00000080;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
}

</style>