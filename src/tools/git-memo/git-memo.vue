<template>
  <div>
    <memo />
  </div>
</template>

<script setup lang="ts">
import Memo from './git-memo.md';
import { useThemeVars } from 'naive-ui';

const themeVars = useThemeVars();
</script>

<style lang="less" scoped>
::v-deep(pre) {
  margin: 0;
  padding: 15px 22px;
  background-color: v-bind('themeVars.cardColor');
  border-radius: 4px;
  overflow: auto;
}
</style>
