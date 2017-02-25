<style type="text/less" src="../../static/css/wrap.less"></style>
<template>
  <div>
    <my-header></my-header>
    <h1 class="title">blog首页</h1>
    <div class="blog-wrap">
      <el-button type="primary" @click="toAddBlog">
        添加博客
      </el-button>
      <ul class="items">
        <li v-for="blog in blogs">
          <a @click="blogDetail(blog.id)">
            <h2 class="item-title">{{blog.title}}</h2>
          </a>
          <el-button :plain="true" :size="small" @click="editBlog(blog.id)">编辑</el-button>
          <div class="time">
            <span>{{blog.updateTime}}</span>
          </div>
        </li>
        <div class="block">
          <el-pagination
            v-show="page.total > 0"
            layout="prev, pager, next"
            :current-page="page.pageNo"
            :total="page.total"
            @current-change="changePage">
          </el-pagination>
        </div>
      </ul>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import API from '../conf/api.conf'
  export default {
    data () {
      return {
        blogs: [],
        page: {
          pageNo: 1,
          pageLength: 10,
          total: 0
        }

      }
    },
    mounted () {
      this.getBlogs()
    },
    methods: {
      toAddBlog: function () {
        this.$router.push('/createBlog')
      },
      getBlogs: function () {
        var _this = this
        var url = API.blogs
        url += '/' + this.page.pageNo
        _this.$http.get(url)
          .then((res) => {
            res = res.data
            if (res.code === 200) {
              _this.blogs = res.data.blogList
              _this.page = res.data.page
            }
          })
      },
      editBlog: function (id) {
        this.$router.push('/createBlog/' + id)
      },
      blogDetail: function (id) {
        this.$router.push('/blogDetail/' + id)
      },
      changePage: function (pageNo) {
        this.page.pageNo = pageNo
        this.getBlogs()
      }
    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>

