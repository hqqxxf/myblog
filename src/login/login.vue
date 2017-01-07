
<template>
  <div>
    <h1>登录</h1>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item>
        <el-button type="primary" >提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//  import { exists, readFile } from 'fs'
  export default {
    name: 'login',
    data () {
      return {
        username: '123',
        password: ''
      }
    },
    render () {
      console.log(this.username)
    },
    method: {

    },
    components: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
