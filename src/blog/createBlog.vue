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
</style>
<template>
  <div>
    <my-header></my-header>
    <div class="wrap">
      <div class="header clearfix">
        <h1 class="title">编写博客</h1>
        <div class="float-p">
          <el-button :type="tab==1?'primary': ''" @click="switchTab(1)">markdown编辑器</el-button>
          <!--<el-button :type="tab==2?'primary': ''" @click="switchTab(2)">html编辑器</el-button>-->
          <el-button :type="tab==3?'primary': ''" @click="switchTab(3)">普通编辑器</el-button>
        </div>
      </div>
      <md-blog v-show="tab==1" :html="html"></md-blog>
      <!--<html-blog v-show="tab==2" :html="html"></html-blog>-->
      <text-blog v-show="tab==3" :html="html"></text-blog>
      <div class="fabu">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        html: '',
        tab: 1
      }
    },
    methods: {
      switchTab: function (index) {
        this.tab = index
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
