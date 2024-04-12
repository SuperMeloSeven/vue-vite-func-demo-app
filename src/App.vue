<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { changeLang } from './locales'
import echarts from './utils/lib/echarts.js'

const { t } = useI18n()

let echartsInstance
const initEcharts = () => {
  if (!echartsInstance) {
    echartsInstance = echarts.init(document.getElementById('echarts-container'));
  }
  setEchartsOptions({
    title: {
      text: t('echarts-title')
    },
    tooltip: {},
    xAxis: {
      data: [t('shirts'), t('pants'), t('shoes')]
    },
    yAxis: {},
    series: [
      {
          name: t('sales'),
          type: 'bar',
          data: []
      }
    ]
  })
}
const setEchartsOptions = (options) => {
  echartsInstance.setOption(options);
}

const switchLang = (lang) => {
  changeLang(lang)
  initEcharts()
  changeSetOption()
}

const isLight = ref(true)
const switchTheme = () => {
  isLight.value = !isLight.value
  setEchartsOptions({
    darkMode: isLight.value ? 'auto' : 'dark'
  })
}

const changeSetOption  = () => {
  setEchartsOptions({
    series: [
      {
        name: t('sales'),
        type: 'bar',
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
      }
    ]
  })
}


onMounted(() => {
  initEcharts()
})
</script>

<template>
  <button @click="switchLang('zh')">中文</button>
  <button @click="switchLang('en')">英文</button>
  <button @click="switchTheme">主题色切换</button>
  <button @click="changeSetOption">测试setOption</button>
  <p>{{ t('msg') }}-{{ t('name') }}</p>

  <div id="echarts-container" style="width: 600px;height:400px;"></div>
</template>

<style scoped>
</style>
