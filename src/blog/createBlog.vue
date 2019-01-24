<style scoped>
  .header {
    width: 260px;
    margin: 0 auto 10px;
  }

  .float-p {
    float: left;
  }

  .fabu {
    width: 100px;
    margin: 10px auto 0;
  }

  .fabu .el-button--primary {
    width: 100%;
  }

  .active {
    color: #1d90e6;
    border-color: #1d90e6;
  }

  .title-input {
    padding-bottom: 30px;
  }
</style>
<template>
  <div>
    <my-header></my-header>
    <div class="wrap">
      <div class="header clearfix">
        <h1 class="title">编写博客</h1>
        <div class="float-p">
          <el-button :type="blogInfo.contentType==2?'primary': ''" @click="switchTab(2)">markdown编辑器</el-button>
          <!--<el-button :type="tab==2?'primary': ''" @click="switchTab(2)">html编辑器</el-button>-->
          <el-button :type="blogInfo.contentType==0?'primary': ''" @click="switchTab(0)">普通编辑器</el-button>
        </div>
      </div>
      <el-input class="title-input" type="text" v-model="blogInfo.title" placeholder="标题"></el-input>
      <md-blog v-show="blogInfo.contentType==2" @update-content="updateContent" :super-content="blogInfo.content"></md-blog>
      <!--<html-blog v-show="tab==2" :content="blogInfo"></html-blog>-->
      <text-blog v-show="blogInfo.contentType==0" :content="blogInfo.content"></text-blog>
      <div class="fabu">
        <el-button type="primary" @click="submit">发布</el-button>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import API from '../../src/conf/api.conf'
  export default {
    data () {
      return {
        blogInfo: {
          'groupId': 0,
          'title': '',
          'tagNames': [],
          'blogType': 1,
          'content': '',
          'blogId': '',
          'contentType': 2
        }
      }
    },
    mounted () {
      if (this.$route.params.id) {
        this.$http.get(API.blogDetail + '?blogId=' + this.$route.params.id)
          .then((res) => {
            res = res.data
            if (res.code === 200) {
              this.blogInfo = res.data
            }
          }, (err) => {
            console.log(err)
          })
      }
    },
    methods: {
      switchTab: function (index) {
        this.blogInfo.contentType = index
      },
      submit: function () {
        var _this = this
        _this.$http.post(API.saveBlog, _this.blogInfo)
          .then((res) => {
            res = res.data
            if (res.code === 200) {
              _this.$router.push('/blogDetail/' + res.data)
            }
          }, (err) => {
            console.info('Internet error', err)
          })
      },
      updateContent: function (res) {
        this.blogInfo.content = res
      }
    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue'),
      'md-blog': require('./mod/mdBlog.vue'),
      'html-blog': require('./mod/htmlBlog.vue'),
      'text-blog': require('./mod/textBlog.vue')
    }
  }
</script>
