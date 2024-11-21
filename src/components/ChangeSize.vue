<template>
    <view>
        <slider class="slider" style="direction: ltr;" value="20" min="14" max="40" show-value @change="sliderChange" step="1" />
    </view>
</template>
<script setup>
const emit = defineEmits(['changeFontSize'])
const sliderChange = (e) => {
    emit('changeFontSize', e.detail.value)
}
</script>
<style>
.slider{
    width: 500rpx;
}
</style>