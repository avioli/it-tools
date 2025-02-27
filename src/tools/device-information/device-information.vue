<template>
  <n-card v-for="{ name, information } in sections" :key="name" :title="name">
    <n-grid cols="1 400:2" x-gap="12" y-gap="12">
      <n-gi v-for="{ label, value } in information" :key="label" class="information">
        <n-card :bordered="false" embedded>
          <div class="label">
            {{ label }}
          </div>

          <div class="value">
            <n-ellipsis>
              {{ value.value }}
            </n-ellipsis>
          </div>
        </n-card>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { width, height } = useWindowSize();

const sections = [
  {
    name: 'Screen',
    information: [
      {
        label: 'Screen size',
        value: computed(() => `${window.screen.availWidth} x ${window.screen.availHeight}`),
      },
      {
        label: 'Orientation',
        value: computed(() => window.screen.orientation.type),
      },
      {
        label: 'Orientation angle',
        value: computed(() => `${window.screen.orientation.angle}°`),
      },
      {
        label: 'Color depth',
        value: computed(() => `${window.screen.colorDepth} bits`),
      },
      {
        label: 'Pixel ratio',
        value: computed(() => `${window.devicePixelRatio} dppx`),
      },
      {
        label: 'Window size',
        value: computed(() => `${width.value} x ${height.value}`),
      },
    ],
  },
  {
    name: 'Device',
    information: [
      {
        label: 'Browser vendor',
        value: computed(() => navigator.vendor),
      },
      {
        label: 'Languages',
        value: computed(() => navigator.languages.join(', ')),
      },
      {
        label: 'Platform',
        value: computed(() => navigator.platform),
      },
      {
        label: 'User agent',
        value: computed(() => navigator.userAgent),
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.information {
  .label {
    font-size: 14px;
    opacity: 0.8;
    line-height: 1;
    margin-bottom: 5px;
  }
  .value {
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
  }
}
</style>
