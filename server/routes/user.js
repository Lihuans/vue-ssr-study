const Router = require('koa-router')
const api = require('../api')


const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async (ctx) => {
    console.log(ctx.request.body)
    const data = await ctx.db.login(ctx.request.body);
    // const data = resp.data
    // console.log(resp.headers['set-cookie']);
    if(data.code === 100) {
      ctx.session.user = {
        // ad_session: resp.msg.ad_session
        ad_session: '232-432432-345255'
        // ad_session: resp.headers['set-cookie']
      }
      ctx.body = data
    } else {
      ctx.status = 401
      ctx.body = {
        code: 401,
        message: 'username or password error'
      }
    }
  })

module.exports = userRouter
