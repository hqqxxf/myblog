<style lang="less" src="../../static/css/wrap.less"></style>

<template>
  <div>
    <my-header></my-header>
    <div class="form-wrap">
      <h1 class="title">登录</h1>
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="regForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="regForm.pass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('regForm')" router->提交</el-button>
          <el-button @click="resetForm('regForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <my-footer></my-footer>
  </div>
</template>


<script>
  import API from '../conf/api.conf'
  import CONST from '../conf/const.conf'
  export default {
    data () {
      var checkEmail = (rule, value, callback) => {
        if (!CONST.emailReg.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('请输入大于等于6位数任意字符的密码'))
        } else {
          callback()
        }
      }
      return {
        regForm: {
          pass: '',
          email: ''
        },
        regRules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ]
        },
        msg: {
          'success': '恭喜你，登录成功',
          'error': '登录失败，请重试'
        }
      }
    },
    methods: {
      submitForm (formName) {
        var _this = this
        console.log(API.login, _this.$refs[formName].model)
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.$http.jsonp(API.login, {
              params: {
                username: _this.regForm.email,
                password: _this.regForm.pass
              }

            }).then((res) => {
              if (!res.data.code) {
                _this.$message({
                  message: _this.msg.success,
                  type: 'success'
                })
                _this.$router.push('/')
              } else {
                _this.$message.error(res.data.desc)
              }
            }, (err) => {
              _this.$message.error(err.msg)
            })
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    },
    components: {
      'my-header': require('../widget/header.vue'),
      'my-footer': require('../widget/footer.vue')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
