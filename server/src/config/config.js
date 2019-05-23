module.exports = {
    port: process.env.PORT || 8080,
    db: {
        database: process.env.DB_NAME || 'inventory',
        user: process.env.DB_USER || 'inventory',
        password: process.env.DB_PASS || 'inventory',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './inventory.sqlite'
        }
    }
}