const log4js = require('log4js');
// 引入日志输出信息的封装文件
const access = require("./access.js");
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]

let replaceConsole = false

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: process.env.NODE_ENV,
  projectName: 'vue-ssr',
  serverIp: '0.0.0.0'
}

module.exports = (options) => {
  const contextLogger = {}
  const appenders = {}

  // 继承自 baseInfo 默认参数
  const opts = Object.assign({}, baseInfo, options || {})
  const { env, appLogLevel, dir, serverIp } = opts;
  // 增加常量，用来存储公用的日志信息
  const commonInfo = { serverIp }

  appenders.cheese = {
    type: 'dateFile',
    filename: `${dir}/log_date/`,
    pattern: 'yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }

  if (env === "dev" || env === "development") {
    // appenders.out = { //控制台输出信息，并写入文件
    //   type: "console"
    // }
    // appenders.cheese.type = 'console' //控制台输出信息，不写入文件
    // replaceConsole = true
  }
  let config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    },
    replaceConsole,
  }

  const logger = log4js.getLogger('cheese');

  return async (ctx, next) => {
    const start = Date.now()

    log4js.configure(config)
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
       // 将入参换为函数返回的字符串
        logger[method](access(ctx, message, commonInfo))
      }
    })
    ctx.log = contextLogger;

    await next()
    const responseTime = Date.now() - start;
    logger.info(access(ctx, {
      responseTime: `响应时间为${responseTime/1000}s`
    }, commonInfo))
  }
}
