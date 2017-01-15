<style lang="less" src="../../static/css/wrap.less"></style>

<template>
  <div>
    <my-header></my-header>
    <!--<my-slide-nav></my-slide-nav>-->
    <div class="form-wrap">
      <h1 class="title">注册</h1>
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="regForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getEmailCode">获取邮箱验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="emailCode">
          <el-input type="text" v-model="regForm.emailCode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="regForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="regForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
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
          return callback(new Error(this.msg.emailErr))
        } else {
          callback()
        }
      }
      var checkEmailCode = (rule, value, callback) => {
        if (value.length !== 6) {
          callback(new Error(this.msg.emailCodeErr))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error(this.msg.passErr))
        } else {
          if (this.regForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.regForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        showCodeInput: false,
        regForm: {
          pass: '',
          checkPass: '',
          email: '',
          emailCode: ''
        },
        msg: {
          emailSendMsg: '验证码已经发送到您的邮箱，请登录查看',
          success: '恭喜你，注册成功',
          error: '注册失败，请重试',
          emailErr: '请输入正确的邮箱',
          emailCodeErr: '请输入正确的邮箱验证码',
          passErr: '请输入大于等于6位数任意字符的密码'
        },
        regRules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          emailCode: [
            {validator: checkEmailCode, trigger: 'blur'}
          ]
        }
      }
    },
    complete: {},
    methods: {
      getEmailCode () {
        var _this = this
        _this.$http.jsonp(API.getEmailCode, {
          params: {
            username: _this.regForm.email
          }
        }).then(function (res) {
          if (!res.data.code) {
            _this.$message({
              message: _this.msg.emailSendMsg,
              type: 'success'
            })
            _this.showCodeInput = true
          } else {
            _this.$message.error(res.data.desc)
          }
        }, function (err) {
          _this.$message.error(err.msg)
        })
      },
      submitForm (formName) {
        var _this = this
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.$http.jsonp(API.login, {
              params: {
                username: _this.regForm.email,
                password: _this.regForm.pass
              }
            }).then(function (res) {
              if (!res.data.code) {
                _this.$message({
                  message: _this.msg.success,
                  type: 'success'
                })
                _this.$router.push('/')
              } else {
                _this.$message.error(res.data.desc)
              }
            }, function (err) {
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
      'my-footer': require('../widget/footer.vue'),
      'my-slide-nav': require('../widget/slideNav.vue')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
