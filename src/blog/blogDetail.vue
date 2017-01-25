<template>
  <div>
    <my-header></my-header>
    <div class="blog-wrap">
      <div class="title">
        {{blogInfo.title}}
      </div>
      <div class="content">
        {{blogInfo.content}}
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import API from '../../src/conf/api.conf'
  export default{
    data () {
      return {
        blogInfo: {
          title: '',
          content: ''
        }
      }
    },
    mounted () {
      var _this = this
      _this.$http.jsonp(API.blogDetail, {
        blogId: 1
      })
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            _this.blogInfo = res.data
          }
        }, (err) => {
          console.log(err)
        })
    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>
