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
  
<script>
import ChangeSize from '@/components/ChangeSize.vue'
let arr = []
for (let i = 0; i < 100; i++) {
    arr.push(i)
}
export default {
    data() {
        return {
            title: 'Hello World',
            fontSize: 20,
            list: arr
        }
    },
    components: {
        ChangeSize
    },
    onLoad() { },
    methods: {
        onFontSizeChange(e) {
            this.fontSize = e
        }
    },
}
</script>
  
<style scoped>
    .content{
        padding: 10rpx;
    }
</style>