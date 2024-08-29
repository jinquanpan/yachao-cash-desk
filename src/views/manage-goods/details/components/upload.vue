<template>
  <div class="do-pages-manage-goods-details-upload">
    <a-upload
      action="/"
      :fileList="props.modelValue ? [props.modelValue] : []"
      :show-file-list="false"
      accept=".jpg, .jpeg, .png"
      @change="onChange"
      @progress="onProgress"
    >
      <template #upload-button>
        <div
          :class="`arco-upload-list-item${
            props.modelValue && props.modelValue.status === 'error'
              ? ' arco-upload-list-item-error'
              : ''
          }`"
        >
          <div
            v-if="props.modelValue && props.modelValue.url"
            class="arco-upload-list-picture custom-upload-avatar"
          >
            <img :src="props.modelValue.url" />
            <div class="arco-upload-list-picture-mask">
              <IconEdit />
            </div>
            <a-progress
              v-if="
                props.modelValue.status === 'uploading' &&
                props.modelValue.percent < 100
              "
              :percent="props.modelValue.percent"
              type="circle"
              size="mini"
              :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
            />
          </div>
          <div v-else class="arco-upload-picture-card">
            <div class="arco-upload-picture-card-text">
              <IconPlus />
              <div style="margin-top: 10px; font-weight: 600">上传</div>
            </div>
          </div>
        </div>
      </template>
    </a-upload>

    <a-modal
      width="auto"
      v-model:visible="model"
      @beforeOk="cropperChange"
      @cancel="handleCancel"
      body-style="padding:0"
    >
      <template #title> 图片裁剪 </template>
      <div>
        <cropper
          style="width: 800px"
          ref="cropperRef"
          :src="model?.url"
          :stencil-props="{
            handlers: {},
            movable: false,
            resizable: false,
          }"
          :stencil-size="{
            width: 400,
            height: 400,
          }"
          image-restriction="stencil"
        />
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useFormItem } from '@arco-design/web-vue';
  import { Cropper } from 'vue-advanced-cropper';
  import 'vue-advanced-cropper/dist/style.css';

  const { eventHandlers } = useFormItem();

  const model = ref(null);

  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  const cropperRef = ref();

  const cropperChange = (done) => {
    const { coordinates, canvas } = cropperRef.value.getResult();
    // 获取blob对象
    canvas.toBlob((blob) => {
      // 转换为file 上传
      const file = new File([blob], model.value.name, {
        type: 'image/png',
      });
      // 获取路径
      let url = URL.createObjectURL(file);

      let param = {
        ...model.value,
        url,
        file,
      };

      emit('update:modelValue', param);
      eventHandlers.value?.onChange?.(param);
      done(true);
    });
  };

  const handleCancel = () => {
    model.value = null;
  };

  const onChange = (_: any, currentFile: any) => {
    const reader = new FileReader();
    reader.onload = function () {
      // 将file转为base64
      model.value = { ...currentFile, url: reader.result };
    };
    reader.readAsDataURL(currentFile.file);
  };
</script>

<style scoped lang="less">
  .do-pages-manage-goods-details-upload {
  }
</style>
