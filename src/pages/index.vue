<script setup>
import { ref } from 'vue'
import ChangeSize from '@/components/ChangeSize.vue'
const title = ref('Hello Mini App')
const fontSize = ref(20)
const onFontSizeChange = (e)=>{
  fontSize.value = e
}
</script>

<template>
  <view class="content">
    <image class="logo" mode="widthFix" src="../static/logo.png"></image>
    <view class="text-area">
      <text class="title" :style="{ fontSize: fontSize + 'px' }">{{ title }}</text>
    </view>
    <ChangeSize @changeFontSize="onFontSizeChange"></ChangeSize>
  </view>
</template>

<style scoped>

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  margin-top: 100rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  margin-bottom: 60rpx;
}

.title {
  color: #8f8f94;
}
</style>
