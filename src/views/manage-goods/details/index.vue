<template>
  <div class="do-pages-manage-goods-details">
    <!-- <div class="title">商品详情</div> -->
    <a-form
      ref="formRef"
      :size="form.size"
      :model="form"
      :style="{ padding: '40px 0', width: '100%' }"
      :label-col-props="{ span: 3, offset: 0 }"
      :rules="rules"
      @submit="handleSubmit"
    >
      <a-form-item field="name" label="商品名称">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item field="price" label="商品价格">
        <a-input v-model="form.price" />
      </a-form-item>
      <a-form-item field="classify_id" label="商品类型">
        <a-select
          v-model="form.classify_id"
          placeholder="Please select ..."
          allow-clear
        >
          <a-option value="section one">Section One</a-option>
          <a-option value="section two">Section Two</a-option>
          <a-option value="section three">Section Three</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="inventory" label="商品库存">
        <a-input v-model="form.inventory" />
      </a-form-item>
      <a-form-item field="file" label="商品图片">
        <Upload v-model="form.file"></Upload>
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button html-type="submit">Submit</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import Upload from './components/upload.vue';

  const formRef = ref();

  const form = reactive({
    file: {
      url: 'https://t9.baidu.com/it/u=3756553611,537019679&fm=3035&app=3035&size=f242,150&n=0&f=JPEG&fmt=auto?s=EDA6B05683C346ECCC6CB1F103001063&sec=1725037200&t=551a249ac5972c665c27699dedcb1a8b',
    },
  }) as any;

  const rules = {
    name: [
      {
        required: true,
        message: '请输入名称',
      },
    ],
    price: [
      {
        required: true,
        message: '请输入价格',
      },
    ],
    classify_id: [
      {
        required: true,
        message: '请选择类型',
      },
    ],
    inventory: [
      {
        required: true,
        message: '请输入库存',
      },
    ],
    file: [
      {
        required: true,
        message: '请上传图片',
      },
    ],
  };

  const handleSubmit = ({ values, errors }: any) => {
    console.log('values:', values, '\nerrors:', errors);
  };
</script>

<style scoped lang="less">
  .do-pages-manage-goods-details {
    margin: 0 auto;
    width: 1180px;
    height: calc(100vh - 60px);
    background-color: #fff;
    .title {
      height: 64px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 18px;
      color: #02040d;
      font-style: normal;
      padding-left: 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(2, 4, 13, 0.12);
    }
  }
</style>
