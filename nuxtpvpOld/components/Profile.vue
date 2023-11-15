<template>
    <ProfileSk v-if="pending" />
    <div v-else style="width: 100vw;height: 100vh;z-index: 1px; position: fixed;" @click.self="usePvp().closeProfile()">
        <div class="card floating-center">
            <div class="top">
                <img class="profile-image" :src="user?.picture" />
                <div>
                    <div class="name">{{ user?.name }}</div>
                    <div class="at">{{ '@' + user?.nickname }}</div>
                </div>
            </div>
            <div class="flex-center" style="margin-top: 13px;">
                <!-- TODO : Follow and send message to user -->
                <el-button class="button" color="#F0AA0B">FOLLOW</el-button>
                <el-button class="button" color="#F0AA0B">SEND MESSAGE</el-button>
            </div>
            <el-divider style="margin-top: 11.25px;margin-bottom: 17.25px; border-color: #00000080;" />
            <div>
                <a class="action"
                    @click="usePvp().setMatchOpponent(user); usePvp().sendChallenge(); usePvp().closeProfile()">
                    <img class="icon" src="/images/pvpIcon.png" />
                    <span class="text">대전 신청</span>
                </a>
                <!-- TODO : Block and report user -->
                <a class="action">
                    <img class="icon" style="width: 18px;height:18px;margin-left: -1px" src="/images/noAccountIcon.png" />
                    <span style="margin-left: -1px" class="text">차단하기</span>
                </a>
                <a class="action">
                    <img class="icon" src="/images/warningIcon.png" />
                    <span class="text">신고하기</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User } from '@/scripts/types'

const props = defineProps({
    user: {
        type: Object as PropType<User>
    },
    pending: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;
}

.name {
    font-weight: bold;
    font-size: 25px;
}

.at {
    vertical-align: top;
    font-size: 15px;
    font-weight: bold;
}

.profile-image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 11px auto 6px;
}

.icon {
    width: 16px;
    height: 16px;
    margin: 1px 4px 1px 0;
}

.top {
    display: flex;
}

.action {
    display: flex;
    margin-bottom: 15px;

    .text {
        vertical-align: middle;
        font-family: Inter;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
    }
}

.card {
    width: 303px;
    height: 264px;
    border-radius: 10px;
    padding: 22px 26px 22px 26px;
    background-color: white;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    z-index: 2px;
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