import env from './env.conf'
module.exports = {
  // 获取邮箱验证码
  getEmailCode: env.apiHost + 'user/sendEmail',
  // login
  login: env.apiHost + 'user/login',
  // register
  register: env.apiHost + 'user/register'

}
