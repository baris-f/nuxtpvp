<template>
    <div>
        <div class="background-dark"></div>

        <div class="card floating-center" style="display: flex;">
            <div class="title text-center">GAME OVER</div>
            <div class="desc-container">
                <div class="desc">내 점수</div>
                <div class="num text-center" v-if="pending">진행중...</div>
                <div class="num text-center" v-else>{{ numberWithCommas(num) }}</div>
                <div></div>
                <div></div>
            </div>
        </div>
        
        <el-button @click="props.nextState" class="button floating-center" color="#FF7414">다음</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { numberWithCommas } from "@/scripts/utilsPvp"

var descActive = ref(false)

const props = defineProps({
    num: {
        type: Number,
        default: 99999999
    },
    pending: Boolean,
    nextState: Function
})

</script>

<style scoped lang="scss">
.background-dark {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121212 33.33%, #0E0E0E 66.67%, rgba(0, 0, 0, 0) 100%);
    width: 100vw;
    height: 70vh;
    position: fixed;
}

.title {
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    color: white;
    margin-bottom: 12px;
}

.desc-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 10px;
}

.desc {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

.num {
    font-family: Inter;
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
}

.card {
    width: 858px;
    height: 421px;
    border-radius: 10px;
    padding: 20px 12px 12px 12px;
    background-color: #FF7414;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
}

.button {
    width: 171px;
    height: 49px;
    border-radius: 10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    color: white;
    top: 58%;
    transform: translateX(-50%);
}


@media all and (max-width: 768px) {
    .background-dark {
        height: 70vh;
    }

    .card {
        width: 85%;
        height: 22%;
        padding: 10px 6px 6px 6px;
        border-radius: 5px;
    }

    .title {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 4px;
        font-weight: 400;
    }

    .desc-container {
        border-radius: 5px;
    }
    
    .desc {
        font-size: 15px;
        line-height: 20px;
    }

    .num {
        font-size: 25px;
        line-height: 20px;
    }

    .button {
        width: 30%;
        height: 40px;
        top: 64%;
        font-weight: 400;
    }
}
</style>