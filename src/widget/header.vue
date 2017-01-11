<template>
  <div>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link :to="{name: 'index'}">
      <el-menu-item index="1">博客</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">我的</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <router-link :to="{name: 'login'}">
        <el-menu-item index="3" >登录</el-menu-item>
      </router-link>
      <router-link :to="{name: 'register'}">
      <el-menu-item index="4">注册</el-menu-item>
      </router-link>
    </el-menu>

  </div>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
