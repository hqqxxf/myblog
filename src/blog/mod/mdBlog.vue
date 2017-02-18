<style scoped>
  html, body, .m-editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, .m-editor div {
    display: inline-block;
    width: 49%;
    height: 600px;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }

  .header {
    width: 400px;
    margin: 0 auto 10px;
  }

  .float-p {
    float: left;
  }

  .fabu {
    width: 100px;
    margin: 10px auto 0;
  }

  .el-button--primary {
    width: 100%;
  }

  .active {
    color: #1d90e6;
    border-color: #1d90e6;
  }
</style>
<template>
  <div class="m-editor">
    <textarea row="30" :value="content" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<script>
  import marked from 'marked'
  import _ from 'lodash'
  export default{
    data () {
      return {
        content: ''
      }
    },
    computed: {
      compiledMarkdown: function () {
        if (!this.content || typeof this.content !== 'string') {
          return
        }
        return marked(this.content, {sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function (e) {
        if (!e.target) {
          return
        }
        this.content = e.target.value
        this.$emit('update-content', this.content)
      }, 500)
    }
  }
</script>
