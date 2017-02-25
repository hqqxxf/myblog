<template>
  <div>
    <my-header></my-header>
    <div class="blog-wrap">
      <div class="title">
        {{blogInfo.title}}
      </div>
      <div v-if="blogInfo.contentType == 2">
        <div v-html="showContent">
        </div>
      </div>
      <div v-else>
        <div>
          {{blogInfo.content}}
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import API from '../../src/conf/api.conf'
  import marked from 'marked'
  import highlightjs from 'highlight.js'
  import 'highlight.js/styles/googlecode.css'
  marked.options({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return highlightjs.highlightAuto(code).value
    }
  })
  export default{
    data () {
      return {
        blogInfo: {
          title: '',
          content: '',
          contentType: 0
        }
      }
    },
    mounted () {
      var _this = this
      _this.$http.get(API.blogDetail + '?blogId=' + this.$route.params.id)
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            _this.blogInfo = res.data
            console.info(_this.blogInfo)
          }
        }, (err) => {
          console.log(err)
        })
    },
    computed: {
      showContent: function () {
        return marked(this.blogInfo.content)
      }
    },
    method: {},
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>
