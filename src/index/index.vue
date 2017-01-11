<style lang="less" src="../../static/css/wrap.less"></style>
<template>
  <div>
    <my-header></my-header>
    <h1 class="title">blog首页</h1>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>
