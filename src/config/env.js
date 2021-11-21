require("dotenv").config();

const config = {
    app_port:process.env.APP_PORT,
    jwt_secret: process.env.JWT_SECRET
}

module.exports = config