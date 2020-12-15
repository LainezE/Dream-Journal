module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'dreamjournal',
        user: process.env.DB_USER || 'dreamjournal',
        password: process.env.DB_PASSWORD || 'dreamjournal',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './dreamjournal.sqlite'
        }
    }
}
