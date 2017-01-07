<template>

  <div id="app">
    <my-header></my-header>
    <router-view keep-alive></router-view>
    <my-footer></my-footer>

  </div>

</template>

<script>
  export default {
    name: 'App',
    components: {
      'my-header': require('./widget/header.vue'),
      'my-footer': require('./widget/footer.vue')
    }
  }
</script>
