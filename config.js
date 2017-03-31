module.exports = {
    useDatenbase: true,
    port: 8000,
    db: {
        // 数据库名
        database: 'blog',
        // 数据库用户名
        username: 'demo',
        // 数据库密码
        password: '123456',
        // 连接数据库的主机
        host: 'localhost',
        // 要连接的数据库类型。可选值有：mysql、postgres、sqlite、mariadb、mssql
        dialect: 'mysql',
        // 使用连接池连接
        pool: {
            // 最大连接数
            max: 5,
            // 最小连接数
            min: 0,
            // 连接最大空置时间（毫秒），超时后将释放连接
            idle: 10000
        }
    }
}