const router = require('koa-router')()
const controller = require('./controller')

router.get('/', async(ctx) => {
    let result = await controller.getBlogs()
    if (result.code) {
        ctx.body = result
    } else {
        let posts = {}
        posts.length = result.count
        posts.data = result.rows
        await ctx.render('list', {
            posts: posts
        })
    }
})

router.get('/new', async(ctx) => {
    await ctx.render('new')
})

router.post('/profile', async(ctx) => {
    let query = ctx.request.body
    let result = await controller.addBlog(query)
    if (result.code) {
        ctx.body = result
    } else {
        ctx.redirect('/');
    }
})

router.get('/:id', async(ctx) => {
    let id = ctx.params.id
    let result = await controller.getOneBlog(id)
    if (result.code) {
        ctx.body = result
    } else {
        console.log('------------------------')
        console.log(result)
        await ctx.render('show', {
            post: result
        })
    }
})

module.exports = router.routes()