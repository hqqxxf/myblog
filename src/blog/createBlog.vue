<template>
  <div>
    <my-header></my-header>
    <div class="wrap">
      <div class="header">
        <h1 class="title">编写博客</h1>
      </div>
      <div class="write-blog">
        <textarea name="blog" cols="30" rows="10">
          {{text}}
        </textarea>
        <div>
          {{html}}
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        text: '',
        html: ''
      }
    },
    mounted () {
      var _this = this
      _this.text = '#hello, markdown!'
      var converter = new showdown.Converter()
      _this.html = converter.makeHtml(text)

    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>
