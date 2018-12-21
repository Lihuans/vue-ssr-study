const Router = require('koa-router')
const api = require('../api')


const apiRouter = new Router( { prefix: '/api' } )

const validateUser = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

apiRouter.use(validateUser)


apiRouter
  .get(api.getIndustry, async (ctx) => {
    try  {
      ctx.body = await ctx.db.getIndustry(ctx.query)
    } catch (err) {
      ctx.log.error(err.stack)
    }
  })
  .get(api.getCities, async (ctx) => {
    try  {
      ctx.body = await ctx.db.getCitys()
    } catch (err) {
      ctx.log.error(err.stack)
    }
  })

module.exports = apiRouter
