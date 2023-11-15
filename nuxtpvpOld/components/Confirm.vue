<template>
    <div class="card floating-center">
        <div class="title" style="margin-bottom: 12px;">{{ title }}</div>
        <div class="text">{{ usePvp().match.value.opponent?.name + "님이 " + usePvp().match.value.selectedGame?.title + " 대전을 신청 했습니다." }}</div>
        <div class="count text-center">{{ count }}</div>
        <div class="flex-center" style="margin-top: 6px;">
            <el-button style="margin-right: 10px; margin-top: 1px;" @click="usePvp().refuseChallenge()" class="button" color="#FF4949">거절</el-button>
            <nuxt-link to="/fakegame">
                <el-button @click="" class="button" color="#2AC543">수락</el-button>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Match } from '~/scripts/types';

const emit = defineEmits(['countOver'])

const props = defineProps({
    title: {
        type: String,
        default: "대전신청"
    },
    count: {
        type: Number,
        default: 5
    }
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
</script>

<style scoped lang="scss">

.title {
    font-family: Inter;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

.text {
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
}

.count {
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
}

.card {
    width: 303px;
    height: 167px;
    border-radius: 10px;
    padding: 22px 26px 22px 26px;
    background-color: white;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
}

.button {
    width: 120px;
    height: 25px;
    border-radius: 5px;
    font-family: Inter;
    font-size: 13px;
    font-weight: 700;
    color: white;
}
</style>