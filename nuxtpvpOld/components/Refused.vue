<template>
    <div class="card floating-center">
        <div class="title">{{ usePvp().match.value.opponent.name }}님이 대전신청을 거절 했습니다.</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['countOver'])

const props = defineProps({
    count: {
        type: Number,
        default: 2
    }
})
var count = ref(props.count)

function countDown() {
    if (count.value > 0)
        setTimeout(() => {
            count.value = count.value - 1;
          }, 1000);
    else
        usePvp().match.value.isRefused = false
}
countDown()

watch(count, () => {
    countDown();
});
</script>

<style scoped lang="scss">
.title {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    overflow-wrap: break-word;
}

.card {
    border-radius: 10px;
    padding: 26px 36px 26px 36px;
    background-color: white;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    top: 30%;
}

</style>