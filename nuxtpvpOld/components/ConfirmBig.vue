<template>
    <div>
        <div class="card hidden-desc floating-center" v-if="descActive">
            <div style="height: 50%;"></div>
            <div class="desc" style="margin:auto">{{ usePvp().match.value.selectedGame?.description}}</div>
        </div>
        <div class="card floating-center" style="display: flex;">
            <div class="title">{{ title }}</div>
            <div class="text-container">
                <div class="text">{{ usePvp().match.value.opponent.name + "님이 " + usePvp().match.value.selectedGame.title + " 대전을 신청 했습니다." }}</div>
                <div class="count text-center">{{ count }}</div>
            </div>
            <div class="flex-center" style="margin-left: -12px;margin-right: -12px;">
                <el-button @click="usePvp().refuseChallenge()" class="button" color="#FF4949">거절</el-button>
                <nuxt-link to="/fakegame">
                    <el-button class="button" color="#2AC543">수락</el-button>
                </nuxt-link>
                <div class="action" @click="showDesc">
                    <img class="icon" :style="{ transform : descActive ? 'rotate(-180deg)' : 'rotate(0deg)' }" src="/images/arrowDownIcon.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


var descActive = ref(false)

const props = defineProps({
    title: {
        type: String,
        default: "대전신청"
    },
    count: {
        type: Number,
        default: 5
    },
    descActive : Boolean
})
var count = ref(props.count)

function countDown() {
    if (count.value > 0)
        setTimeout(() => {
            count.value = count.value - 1;
          }, 1000);
    else
        usePvp().refuseChallenge()
}
countDown()
watch(count, () => {
    countDown();
});

function showDesc() {
    descActive.value = !descActive.value
}

</script>

<style scoped lang="scss">
.title {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

.text-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

.count {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
}

.card {
    width: 497px;
    height: 274px;
    border-radius: 10px;
    padding: 31px 29px 31px 36px;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
}

.hidden-desc {
    height: 482px;
    transform: translate(-50%, -25%);
}

.action {
    margin-left: 16px;
}

.icon {
    width: 28px;
    height: 16px;
}

.button {
    width: 197px;
    height: 41px;
    border-radius: 5px;
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    color: white;
}

@media all and (max-width: 479px) {
    .card {
        width: 90%;
        height: 30%;
        border-radius: 5px;
    }

    .hidden-desc {
        height: 50%;
        transform: translate(-50%, -25%);
    }

    .desc {
        font-size: 16px;
    }
}
</style>