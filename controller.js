const Sequelize = require('./db').sequelize
const blog = Sequelize.import('./model.js')

// 新增博客
const addBlog = async(query) => {
    try {
        return await blog.create(query)
    } catch (err) {
        return {
            code: 1,
            msg: 'error'
        }
    }
}

// 博客列表
const getBlogs = async() => {
    try {
        return await blog.findAndCountAll()
    } catch (err) {
        return {
            code: 1,
            msg: 'error'
        }
    }
}

// 获取博客详情
const getOneBlog = async(id) => {
    try {
        return await blog.findOne({
            where: {
                id: 　id
            }
        })
    } catch (err) {
        return {
            code: 1,
            msg: 'error'
        }
    }
}

module.exports = {
    getBlogs: getBlogs,
    addBlog: addBlog,
    getOneBlog: getOneBlog
}