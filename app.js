const koa = require('koa')
const logger = require('koa-logger')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const path = require('path')
const router = require('./router')
const config = require('./config')
const sequelize = require('./db').sequelize;

const app = module.exports = new koa()
console.log('path', __dirname)

app.use(logger())
app.use(bodyparser())

if (config.useDatenbase) {
    sequelize.import(path.join(__dirname, '/model.js'));
    sequelize.sync();
}

// 指定后面render页面的路径，渲染模板方式swig,和渲染页面html
// 注册router方法
app.
use(views(path.join(__dirname, '/views'), {
        map: {
            html: 'swig'
        }
    }))
    .use(router)

app.on('error', function(err, ctx) {
    console.log('server err', err);
})

app.listen(config.port)
console.log('start')