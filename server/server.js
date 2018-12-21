//启动文件
const koa = require('koa');
const send = require('koa-send');
const path = require('path')
const koaBody = require('koa-body')
const koaSession = require('koa-session')
const favicon = require('koa-favicon');
const ip = require('ip');

const staticRouter = require('./routes/static')
const apiRouter = require('./routes/router')
const userRouter = require('./routes/user')
const createDb = require('./db/db')

const logger = require('../log');

const resolve = file => path.resolve(__dirname, file)

const app = new koa();

const db = createDb()

app.use(favicon(resolve('./../static/img/favicon.ico')));

app.use(logger({
  serverIp: ip.address()
}));

app.use(async (ctx, next) => {
  ctx.db = db
  await next()
})

const isDev = process.env.NODE_ENV === 'development';

app.keys = ['vue ssr teach']
app.use(koaSession({
  key: 'v-ssr-id',
  maxAge: 4*60*60*1000
}, app))

app.use(koaBody())
app.use(staticRouter.routes()).use(staticRouter.allowedMethods()); //koa-router的方法
app.use(userRouter.routes()).use(userRouter.allowedMethods()); //koa-router的方法
app.use(apiRouter.routes()).use(apiRouter.allowedMethods()); //koa-router的方法

let pageRouter;
if(isDev) {
  pageRouter = require('./routes/dev-ssr');
} else {
  pageRouter = require('./routes/prod-ssr');
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods()); //koa-router的方法

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch(err) {
    // console.log('=======================',err);
    ctx.status = 500;
    console.log(5550000,err)
    ctx.log.error(err.stack)
    if(isDev) {
      ctx.body = err.message
    } else {
      ctx.body = 'please try again later'
    }
    await next()
  }
});


// app.use(async (ctx, next) => {
//   if(ctx.path === '/favicon.ico') {
//     await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../')})
//   } else {
//     await next()
//   }
// });

app.on('error', (err, ctx) => {
  console.log(5550000,err)
  ctx.log.error(err.stack)
});

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
