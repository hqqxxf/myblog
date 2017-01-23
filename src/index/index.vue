<style type="text/less" src="../../static/css/wrap.less"></style>
<template>
  <div>
    <my-header></my-header>
    <h1 class="title">blog首页</h1>
    <div class="blog-wrap">
      <el-button type="primary">
        <router-link :to="{ path: 'createBlog' }">添加博客</router-link>
      </el-button>
      <ul class="items">
        <li v-for="blog in blogs">
          <p class="item-title">{{blog.title}}</p>
          <div class="time">
            <span>{{blog.createTime}}</span>
            <span>上次更新：{{blog.updateTime}}</span>
          </div>
        </li>
      </ul>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import API from '../conf/api.conf'
  export default {
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    },
    data () {
      return {
        blogs: []
      }
    },
    mounted () {
      this.getBlogs()
    },
    methods: {
      getBlogs: function () {
        var _this = this
        _this.$http.jsonp(API.blogs)
          .then((res) => {
            res = res.data
            if (res.code === 200) {
              _this.blogs = res.data
              console.log(_this.blogs)
            }
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
</script>

