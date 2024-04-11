<template>
  <view class="content">
    <image class="logo" mode="widthFix" src="../../static/logo.png"></image>
    <view class="text-area">
      <text class="title" :style="{ fontSize: fontSize + 'px' }">{{ title }}</text>
    </view>
    <ChangeSize @changeFontSize="onFontSizeChange"></ChangeSize>
  </view>
</template>

<script>
import ChangeSize from '@/components/ChangeSize.vue'
export default {
  data() {
    return {
      title: 'Hello World',
      fontSize: 20
    }
  },
  components: {
    ChangeSize
  },
  onLoad() {
  },
  methods: {
    onFontSizeChange(e){
       this.fontSize = e
    }
  },
}
</script>

<style>
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