<script setup lang="ts">
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="p-5px mt-[0.3px]">windi 位置</div>
  <button class="btn btn-blue bg-hex-b2a8bb">windi按钮</button>
  <div>
    <!-- 图标 -->
    <i-mdi-ab-testing style="font-size: 2em; color: blue" />
  </div>
  <div>
    <!-- scss -->
    <nav></nav>
  </div>
  <div>
    <el-button type="text">ELEMENT Button</el-button>
  </div>
</template>

<style lang="scss" scoped>
$nav-color: #f90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}
</style>
