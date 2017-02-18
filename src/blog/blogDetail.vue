<template>
  <div>
    <my-header></my-header>
    <div class="blog-wrap">
      <div class="title">
        {{blogInfo.title}}
      </div>
      <div v-if="blogInfo.contentType == 2">
        <div v-html="compiledMarkdown">
          # hello
        </div>
      </div>
      <div v-else>
        <div class="content">
          else{{blogInfo.content}}
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import API from '../../src/conf/api.conf'
  import marked from 'marked'
  export default{
    data () {
      return {
        blogInfo: {
          title: '',
          content: '',
          contentType: 2
        }
      }
    },
    computed: {
      compiledMarkdown: function () {
        if (!this.blogInfo.content || typeof this.blogInfo.content !== 'string') {
          return
        }
        return marked(this.blogInfo.content, {sanitize: true})
      }
    },
    mounted () {
      var _this = this
      _this.$http.get(API.blogDetail + '?blogId=' + this.$route.params.id)
        .then((res) => {
          res = res.data
          if (res.code === 200) {
          	res.data.contentType = 2
            _this.blogInfo = res.data
          }
        }, (err) => {
          console.log(err)
        })
    },
    method: {

    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>
