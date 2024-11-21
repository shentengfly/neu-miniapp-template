<script setup>
import { t, useI18n, getDirection } from '@/locale/index'
import { onShow } from '@neuxnet/neu-app';
import { nextTick } from 'vue';

onShow(() => {
  // update tabbar
  setTabbar()
  nextTick(() => {
    // set page direction
    neu.setPageMeta({
      pageStyle: `direction:${getDirection()}`,
    })
  })
})


const { locale, availableLocales } = useI18n()
const onLocaleChange = (e) => {
  locale.value = e.detail.value
  neu.setPageMeta({
    pageStyle: `direction:${getDirection()}`,
  })
  // update tabbar
  setTabbar()
}

const setTabbar = ()=>{
  neu.setTabBarItem({
    index: 0,
    text: t("tabbar.home")
  })
  neu.setTabBarItem({
    index: 1,
    text: t("tabbar.list")
  })
}

const user = { name: 'Tom', detail: { height: 178, weight: '75kg' } }
</script>

<template>
  <view class="content">
    <image class="logo" mode="widthFix" src="../static/logo.png"></image>
    <view class="locale-setting">{{ t('index.language-info') }}</view>
    <view class="list-item">
      <text class="k">{{ t('index.application-language') }}:</text>
      <text class="v">{{ locale }}</text>
    </view>
    <view class="locale-setting">{{ t('Interpolations') }}</view>
    <view class="list-item">
      <view class="v">{{ t('introduction1', user) }}</view>
      <view class="v">{{ t('introduction2', ['30', '10']) }}</view>
    </view>

    <view class="locale-setting">{{ t('index.language') }}</view>
    <radio-group @change="onLocaleChange">
      <label class="list-cell" v-for="item in availableLocales" :key="item">
        <radio :value="item" :checked="item === locale" />
        <view class="list-cell-text">{{ item }}</view>
      </label>
    </radio-group>
  </view>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30rpx;
}

.logo {
  height: 200rpx;
  margin-top: 100rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  margin-bottom: 60rpx;
}

.title {
  color: #8f8f94;
}

.locale-setting {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
}

.list-item {
  font-size: 14px;
  padding: 10px 0;
}

.list-item .v {
  margin-left: 5px;
}

.locale-item {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

.locale-item .text {
  flex: 1;
}

.list-cell {
  display: flex;
  align-items: center;
  margin: 20rpx 0;
}
.list-cell-text{
  margin: 0 5px;
}
</style>
