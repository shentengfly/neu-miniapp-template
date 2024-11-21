<template>
    <view class="content">
        <scroll-view style="height: 80vh" scroll-y="true">
            <view v-for="item in list">
                <text :style="{ fontSize: fontSize + 'px' }">{{ item }}</text>
            </view>
        </scroll-view>
        <ChangeSize @changeFontSize="onFontSizeChange"></ChangeSize>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import { onShow } from '@neuxnet/neu-app';
import { getDirection } from '@/locale/index'
import ChangeSize from '@/components/ChangeSize.vue'
import { nextTick } from 'vue';
onShow(() => {
    nextTick(() => {
        neu.setPageMeta({
            pageStyle: `direction:${getDirection()}`,
        })
    })
})

const fontSize = ref(20)
const onFontSizeChange = (e) => {
    fontSize.value = e
}
const list = ref([])
for (let i = 0; i < 100; i++) {
    list.value.push(i)
}
</script>

<style scoped>
.content {
    padding: 10rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>