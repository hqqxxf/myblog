<style lang="less" src="../../static/css/wrap.less"></style>

<template>
  <div>
    <my-header></my-header>
    <div class="form-wrap">
      <h1 class="title">登录</h1>
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="age">
          <el-input v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="regForm.pass" auto-complete="off"></el-input>
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
  export default {
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
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
          username: ''
        },
        regRules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          username: [
            {validator: checkAge, trigger: 'blur'}
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
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = 'login.json'
            _this.$http.get(url).then(function (data) {
              console.log(data)
              if (data.code) {
                _this.$message({
                  message: _this.msg.success,
                  type: 'success'
                })
              } else {
                _this.$message.error(_this.msg.error)
              }
            }, function (err) {
              _this.$message.error(err.msg)
            })
          } else {
            _this.$message.error(_this.msg.error)
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
