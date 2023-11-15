<template>
    <!-- TODO : Implement on random matching -->
    <div class="card floating-top text-white">
        <div class="text-center">{{ desc }}</div>
        <div class="text-center">{{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { User } from "@/scripts/typesPvp"

const props = defineProps({
    desc: {
        type: String,
        default: "상대를 찾고 있습니다 ...."
    },
    players: Array<User>,
    count: {
        type: Number,
        default: 0
    }
})
var count = ref(props.count)

function countDown() {
    if (count.value < 5)
        setTimeout(() => {
            count.value = count.value + 1;
          }, 1000);
    else {
          usePvp().matchStart()
          navigateTo({ path: '/fakegame' })
    }
}
countDown()
watch(count, () => {
    countDown();
});


</script>

<style scoped lang="scss">
.text-white {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
}

.floating-top {
    position: fixed;
    top: 25%;
    left: 50%;
}

.card {
    width: 42%;
    height: 90px;
    border-radius: 20px;
    padding: 22px 26px 22px 26px;
    background: #00000080;
    box-sizing: border-box;
    margin-top: -45px;
    transform: translate(-50%);
}

@media all and (max-width: 768px) {
    .card {
        width: 90%;
    }
}
</style>