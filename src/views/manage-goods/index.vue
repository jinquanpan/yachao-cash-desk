<template>
  <div>
    <CommoditySearch @keyword-input="keywordInput" />
    <CommodityList :classify-id="classifyId" :keyword="keyword" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import CommoditySearch from '../dashboard/components/commodity-search.vue';
  import CommodityList from './components/commodity-list.vue';

  const classifyId = ref(0);
  const keyword = ref();
  const keywordInput = (value: any) => {
    keyword.value = value;
  };
</script>

<style scoped lang="less"></style>
